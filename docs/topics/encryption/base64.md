# Base64

Base64 encoding is widely used amongst different endpoints in Geometry Dash.

It is used to encode fields like level data, level descriptions, comments, etc.

GD uses *URL-safe* Base64 encoding, which uses A-Z and a-z letters, along with `_` and `-` as special characters. (Main Base64 uses `+` and `/` special characters)

Here is an example of using Base64 decoding and encoding:
```py
import base64

# For unknown reasons, people tend to use base64.b64(decode|encode) functions
# and replace "+" with "-" and "/" with "_" manually,
# even though "base64" module implements base64.urlsafe_b64(decode|encode).

# encode and decode functions return "bytes" type in python so we might want to use
# bytes.decode() to convert them to "str" type.


def base64_encode(string: str) -> str:
    return base64.urlsafe_b64encode(string.encode()).decode()


def base64_decode(string: str) -> str:
    return base64.urlsafe_b64decode(string.encode()).decode()
```
