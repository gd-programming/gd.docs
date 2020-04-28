# Level encoding/decoding
Despite Geometry Dash levels being stored in a plaintext, human-readable format, the game will resort to storing level data in a compressed binary format when storing them in the game's memory or files(albeit for compatibility reasons levels can also be loaded directly in a uncompressed format).

Compressed levels are actually composed out of two things: [Base64 encoding](topics/encryption/base64) and [GZIP](https://zlib.net) compression

## Encoding
To encode a level you take first the level string and `compress()` it, afterwards you need to encode the resulting byte sequence with Base 64 encoding.

```py
import base64
import gzip

def decode_level(data) -> str:
	base64_decoded_string = base64.urlsafe_b64decode(data.encode())
	plaintext_level_string = gzip.decompress(base64_decoded_string)
	return plaintext_level_string.decode()
```
## Decoding
To decompress the level you'll first need to decode the compressed string in it's B64 encoded form, then you need to `uncompress()` the resulting bytes to obtain a valid level string which can be read by the game.

```py
import base64
import gzip

def encode_level(levelstr_bytes) -> str:
	gzipped_inflated_bytes = gzip.compress(levelstr_bytes)
	base64_encoded_string = base64.urlsafe_b64encode(gzipped_inflated_bytes)
	return base64_encoded_string.decode()
```