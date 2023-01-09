# Game Files - Encryption and Decryption

Although Geometry Dash's install path is usually inside the user's `steamapps/common` folder (if the game was bought from Steam) the game will actually store all relevant user data inside the `AppData/Local` directory, in which a new folder will be created under the name of `GeometryDash`. This folder contains all custom songs that the user has downloaded but it also contains 2 important files, which are *CCGameManager.dat* and *CCLocalLevels.dat*; the first one contains all the information regarding the player's in-game stats and preferences while the latter contains the data for the game's user created levels.

On Android, saves are placed under `/data/data/{package name}` (replace `{package name}` with package name of game).

On MacOS, saves are placed under `~/Library/Application Support/GeometryDash`, and use completely different encoding from Windows one.

However when these files are written to the disk they are encrypted and have to be decrypted before they can be read or modified.
Both files share the same process for decryption and encryption.

Windows and Android Geometry Dash can load plain XML save files, but MacOS Geometry Dash can't.

## Decryption

### Windows and Android

Local game files are decrypted in the following order: Apply XOR function with key `0xB` (`11`), then apply [B64 decoding](topics/encryption/base64), the resulting byte sequence will be a [gzip](https://en.wikipedia.org/wiki/Gzip) compressed string which needs to be decompressed/inflated.

If file size is not divisible by 4, last `file_size % 4` bytes are garbage.

Simple XOR function can be written like this:

<!-- tabs:start -->

### **Python**

```py
def xor(data: bytes, key: int) -> bytes:
	return bytes(byte ^ key for byte in data)
```

<!-- tabs:end -->

Programmatically decryption can be implemented like so:

<!-- tabs:start -->

### **Python**

```py
from gzip import decompress
from base64 import urlsafe_b64decode


def decrypt_data(data: bytes) -> str:
    size_mod_4 = len(data) % 4
    if size_mod_4 > 0:
        # size not divisible by 4
        data = data[:-size_mod_4]
    xored = bytes(byte ^ 11 for byte in data)
    base64_decoded = urlsafe_b64decode(xored)
    return decompress(base64_decoded).decode()
```

<!-- tabs:end -->

### MacOS

On MacOS, decryption is quite simpler. Saves are encrypted with
[AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), using [ECB](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Electronic_codebook_.28ECB.29) mode with [PKCS#7](https://en.wikipedia.org/wiki/Padding_%28cryptography%29#PKCS.235_and_PKCS.237) padding.

256-bit key for encryption looks like this:

<!-- tabs:start -->

### **Plain**

```plain
ipu9TUv54yv]isFMh5@;t.5w34E2Ry@{
```

### **Hex**

```plain
69 70 75 39 54 55 76 35 34 79 76 5d 69 73 46 4d 68 35 40 3b 74 2e 35 77 33 34 45 32 52 79 40 7b
```

### **Python**

```py
KEY = b'ipu9TUv54yv]isFMh5@;t.5w34E2Ry@{'
```

<!-- tabs:end -->

Here is how actual decryption would be implemented:

<!-- tabs:start -->

### **Python**

```py
# using https://pypi.org/project/cryptography/
from cryptography.hazmat.primitives import ciphers, padding

mac_cipher = ciphers.Cipher(
    ciphers.algorithms.AES256(b'ipu9TUv54yv]isFMh5@;t.5w34E2Ry@{'),
    ciphers.modes.ECB()
)
mac_padding = padding.PKCS7(128)


def mac_decrypt(data: bytes) -> str:
    decryptor = mac_cipher.decryptor()
    unpadder = mac_padding.unpadder()
    return (b'%s%s%s' % (
        unpadder.update(decryptor.update(data)),
        unpadder.update(decryptor.finalize()),
        unpadder.finalize()
    )).decode()
```

<!-- tabs:end -->

## Encryption

### Windows and Android

Encryption is done pretty much the same way but with opposite operations and order. So the sequence for encrypting can be defined as: [gzip](https://en.wikipedia.org/wiki/Gzip) compress/deflate &rarr; [Base64](topics/encryption/base64) encode &rarr; XOR using `0xb` (`11`) as a key.

<!-- tabs:start -->

### **Python**

```py
from gzip import compress
from base64 import urlsafe_b64encode


def encrypt_data(xmlstring: str) -> bytes:
	gzipped = compress(xmlstring.encode())
	base64_encoded = urlsafe_b64encode(gzipped)
	return bytes(byte ^ 11 for byte in base64_encoded)
```

<!-- tabs:end -->

### MacOS

Like on Windows and Android, encryption and decrypion are almost the same:

<!-- tabs:start -->

### **Python**

```py
# using https://pypi.org/project/cryptography/
from cryptography.hazmat.primitives import ciphers, padding

mac_cipher = ciphers.Cipher(
    ciphers.algorithms.AES256(b'ipu9TUv54yv]isFMh5@;t.5w34E2Ry@{'),
    ciphers.modes.ECB()
)
mac_padding = padding.PKCS7(128)


def mac_encrypt(xmlstring: str) -> bytes:
    encryptor = mac_cipher.encryptor()
    padder = mac_padding.padder()
    return b'%s%s%s' % (
        encryptor.update(padder.update(xmlstring.encode())),
        encryptor.update(padder.finalize()),
        encryptor.finalize()
    )
```

<!-- tabs:end -->
