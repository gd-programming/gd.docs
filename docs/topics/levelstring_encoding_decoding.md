# Level encoding/decoding
Despite Geometry Dash levels being stored in a plaintext, human-readable format, the game will resort to storing level data in a compressed binary format when storing them in the game's memory or files(albeit for compatibility reasons levels can also be loaded directly in a uncompressed format).

Official levels are stored in `<game installation folder>\Resources\LevelData.plist` (filename depends on game, `LevelDataSubzero.plist` for *Geometry Dash Subzero*, etc.)

Compressed levels are actually composed out of two things: [Base64](topics/encryption/base64) encoding and [ZLIB](https://zlib.net) compression.

## Encoding
To encode a level you take first the level string and `compress()` it, afterwards you need to encode the resulting byte sequence with Base64 encoding.

If you are encoding an official level and want to put it in `LevelData.plist`, you need to compress the string at only level 6, replace the first 10 bytes to `\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\x03` after compressing, then remove `H4sIAAAAAAAAA` in the beginning of the base64 encoded string. (actually the game itself has hardcoded values to verify the string length, so the best way to replace levels is using a hack)

<!-- tabs:start -->

### **python**

```py
import base64
import gzip

def encode_level(level_string: str, is_official_level: bool) -> str:
    gzipped = gzip.compress(level_string.encode(), compresslevel=6)
    if is_official_level:
        # gzip header with no modification time and os flag set to unix
        gzip_header = b'\x1f\x8b\x08\x00\x00\x00\x00\x00\x00\x03'
        gzipped = gzip_header + gzipped[10:]
    base64_encoded = base64.urlsafe_b64encode(gzipped)
    if is_official_level:
        base64_encoded = base64_encoded.lstrip(b'H4sIAAAAAAAAA')
    return base64_encoded.decode()
```

<!-- tabs:end -->

## Decoding
To decompress the level you'll first need to decode the compressed string in it's B64 encoded form, then you need to `decompress()` the resulting bytes to obtain a valid level string which can be read by the game.

If you are decoding an official level, you need to add `H4sIAAAAAAAAA` at the beginning of the compressed string.

<!-- tabs:start -->

### **python**

```py
import base64
import zlib


def decode_level(level_data: str, is_official_level: bool) -> str:
    if is_official_level:
        level_data = 'H4sIAAAAAAAAA' + level_data
    base64_decoded = base64.urlsafe_b64decode(level_data.encode())
    # window_bits = 15 | 32 will autodetect gzip or not
    decompressed = zlib.decompress(base64_decoded_string, 15 | 32)
    return decompressed.decode()
```

<!-- tabs:end -->
