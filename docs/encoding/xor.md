# XOR

[XOR][XOR] is a *bit-wise* binary operation that is commonly written as `^` in programming languages.

Each character in a string is essentially represented as bytes, to which *XOR* is applied.

## XOR Cipher

*XOR Cipher* elaborates on the idea of applying *XOR* to each to byte,
one in the data and one in the key.

Here are our *XOR Cipher* empty functions:

```python
def cyclic_xor(data: bytes, key: bytes) -> bytes:
    ...


def cyclic_xor_string(string: str, key: str, encoding: str = ..., errors: str = ...) -> str:
    ...
```

*XOR Cipher* pairs each byte in the string with a byte in the key (which is cycled),
then applies *XOR* operation for each pair.

Returning back to our functions:

```python
from itertools import cycle

DEFAULT_ENCODING = "utf-8"
DEFAULT_ERRORS = "strict"


def cyclic_xor(data: bytes, key: bytes) -> bytes:
    return bytes(byte ^ key_byte for byte, key_byte in zip(data, cycle(key)))


def cyclic_xor_string(
    string: str, key: str, encoding: str = DEFAULT_ENCODING, errors: str = DEFAULT_ERRORS
) -> str:
    result = cyclic_xor(string.encode(encoding, errors), key.encode(encoding, errors))

    return result.decode(encoding, errors)
```

XOR Cipher can also use one byte as the key:

```python
def xor(data: bytes, key: int) -> bytes:
    return bytes(byte ^ key for byte in data)


def xor_string(
    string: str, key: str, encoding: str = DEFAULT_ENCODING, errors: str = DEFAULT_ERRORS
) -> str:
    result = xor(string.encode(encoding, errors), key.encode(encoding, errors))

    return result.decode(encoding, errors)
```

## XOR Keys

Here is a list of XOR keys currently used in GD:

| Key     | Usage             |
|---------|-------------------|
| `14251` | Messages          |
| `26364` | Level Password    |
| `37526` | User Password     |
| `39673` | Level Leaderboard |
| `41274` | Level Seed        |
| `29481` | Comment Check     |
| `19847` | Challenges        |
| `59182` | Rewards           |
| `58281` | Like and Rate     |
| `85271` | User Profile      |
| `19283` | Vault Codes       |
| `48291` | Load Data         |

[XOR]: https://en.wikipedia.org/wiki/Bitwise_operation#XOR
