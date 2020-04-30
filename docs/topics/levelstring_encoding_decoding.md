# Level encoding/decoding
Despite Geometry Dash levels being stored in a plaintext, human-readable format, the game will resort to storing level data in a compressed binary format when storing them in the game's memory or files(albeit for compatibility reasons levels can also be loaded directly in a uncompressed format).

Compressed levels are actually composed out of two things: [Base64](topics/encryption/base64) encoding and [ZLIB](https://zlib.net) compression.

## Encoding
To encode a level you take first the level string and `compress()` it, afterwards you need to encode the resulting byte sequence with Base64 encoding.

<!-- tabs:start -->

### **Python**

```py
import base64
import gzip

def encode_level(level_string: str) -> str:
    gzipped = gzip.compress(level_string.encode())
    base64_encoded = base64.urlsafe_b64encode(gzipped)
    return base64_encoded.decode()
```

<!-- tabs:end -->

## Decoding
To decompress the level you'll first need to decode the compressed string in it's B64 encoded form, then you need to `decompress()` the resulting bytes to obtain a valid level string which can be read by the game.

<!-- tabs:start -->

### **Python**

```py
import base64
import zlib


def decode_level(level_data: str) -> str:
    base64_decoded = base64.urlsafe_b64decode(level_data.encode())
    # window_bits = 15 | 32 will autodetect gzip or not
    decompressed = zlib.decompress(base64_decoded, 15 | 32)
    return decompressed.decode()
```

<!-- tabs:end -->
