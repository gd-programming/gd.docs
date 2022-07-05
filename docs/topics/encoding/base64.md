# Base64

[Base64][base64] encoding is widely used amongst different endpoints in Geometry Dash.

It is used to encode fields like level data, level descriptions, comments, etc.

GD uses *URL-safe* Base64 encoding, which uses `[A-Z]` and `[a-z]` letters
along with `_` and `-` as special characters.

## Code

```python
# taken from gd.py

from base64 import b64decode as standard_decode_base64
from base64 import b64encode as standard_encode_base64
from base64 import urlsafe_b64decode as standard_decode_base64_url_safe
from base64 import urlsafe_b64encode as standard_encode_base64_url_safe

# encoding

DEFAULT_ENCODING = "utf-8"
DEFAULT_ERRORS = "strict"

# padding

BASE64_PAD = 4
BASE64_INVALID_TO_PAD = 1
BASE64_PADDING = b"="


def enforce_valid_base64(data: bytes) -> bytes:
    required = len(data) % BASE64_PAD

    if required:
        if required == BASE64_INVALID_TO_PAD:
            data = data[:LAST]

        else:
            data += BASE64_PADDING * (BASE64_PAD - required)

    return data


def decode_base64(data: bytes) -> bytes:
    return standard_decode_base64(enforce_valid_base64(data))


def encode_base64(data: bytes) -> bytes:
    return standard_encode_base64(data)


def decode_base64_url_safe(data: bytes) -> bytes:
    return standard_decode_base64_url_safe(enforce_valid_base64(data))


def encode_base64_url_safe(data: bytes) -> bytes:
    return standard_encode_base64_url_safe(data)


def decode_base64_string(
    string: str, encoding: str = DEFAULT_ENCODING, errors: str = DEFAULT_ERRORS
) -> str:
    return decode_base64(string.encode(encoding, errors)).decode(encoding, errors)


def encode_base64_string(
    string: str, encoding: str = DEFAULT_ENCODING, errors: str = DEFAULT_ERRORS
) -> str:
    return encode_base64(string.encode(encoding, errors)).decode(encoding, errors)


def decode_base64_string_url_safe(
    string: str, encoding: str = DEFAULT_ENCODING, errors: str = DEFAULT_ERRORS
) -> str:
    return decode_base64_url_safe(string.encode(encoding, errors)).decode(encoding, errors)


def encode_base64_string_url_safe(
    string: str, encoding: str = DEFAULT_ENCODING, errors: str = DEFAULT_ERRORS
) -> str:
    return encode_base64_url_safe(string.encode(encoding, errors)).decode(encoding, errors)
```

[base64]: https://en.wikipedia.org/wiki/Base64
