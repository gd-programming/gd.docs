# Game Files - Encryption and Decryption

Although Geometry Dash's install path is usually inside the user's `steamapps/common` folder (if the game was bought from Steam) the game will actually store all relevant user data inside the `AppData/Local/` directory, in which a new folder will be created under the name of `GeometryDash`. This folder contains all custom songs that the user has downloaded but it also contains 2 important files, which are *"CCGameManager.dat"* and *"CCLocalLevels.dat"*; the first one contains all the information regarding the player's in-game stats and preferences while the latter contains the data for the game's main levels.

However when these files are written to the disk they are encrypted and have to be decrypted before they can be read or modified.
Both files share the same process for decryption and encryption

## Decryption
Local game files are decrypted in the following order: Apply [XOR Cipher](topics/encryption/xor) with key `0xB`(decimal 11), then apply [B64 decoding](topics/encryption/base64), the resulting byte sequence will be a [gzip](https://zlib.net) compressed string which needs to be decompressed/inflated.
Programatically it can be implemented in the following way
```py
def xor_eleven(string):
	result = ""
	for byte in string: 
		result += chr(ord(byte) ^ 11)
	return result

def decrypt_level(data) -> str:
	base64_decoded_string = base64.urlsafe_b64decode(xor_eleven(data).encode())
	plaintext_level_string = gzip.decompress(base64_decoded_string)
	return plaintext_level_string.decode()

```

## Encryption
Encryption is done pretty much the same way but with opposite operations and order. So the sequence for encrypting can be defined as: [gzip](https://zlib.net) compress/deflate -> [B64 encoded](topics/encryption/base64) -> [XOR Cipher](topics/encryption/xor) using `0xb`(decimal 11) as a key
```py
def xor_eleven(string):
	result = ""
	for byte in string: 
		result += chr(ord(byte) ^ 11)
	return result

def encrypt_level(data) -> str:
	gzip_compressed_string = gzip.compress(data.encode())
	base64_encoded_string  = base64.urlsafe_b64encode(gzip_compressed_string)
	return xor_eleven(base64_encoded_string.decode())

```
