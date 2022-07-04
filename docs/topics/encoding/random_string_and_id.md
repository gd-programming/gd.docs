# Random String, UUID and UDID

These are the parameters that can be frequently noticed when sending a request.

## Random String

Random Seed, or Random String, is essentially just a string containing *n* (often *10*)
random alphanumeric characters. It is mainly sent as `rs` in requests.

Generating it is quite simple:

```python
from random import choices
from string import ascii_letters, digits

CHARSET = ascii_letters + digits

EMPTY = str()
LENGTH = 10

concat = EMPTY.join


def generate_random_string(length: int = LENGTH, charset: str = CHARSET) -> str:
    return concat(choices(charset, k=length))
```

## UUID

[UUID][UUID] stands for Universally Unique Identifier. It is sent as `uuid` in requests.

It can be randomly generated using `uuid` module:

```py
from uuid import uuid4

def generate_uuid() -> str:
    return str(uuid4())
```

## UDID

[UDID][UDID] is an abbreviation for Unique Device Identifier that is sent as `udid` in requests.
It does not really have a defined format, but frequently has structure like `S` followed by digits,
or it can be the same as user ID.

Generating UDID means merely generating a random integer:

```python
from random import randrange as random_range

PREFIX = "S"
DEFAULT_START = 100_000
DEFAULT_STOP = 100_000_000


def generate_udid(
    prefix: str = PREFIX, start: int = DEFAULT_START, stop: int = DEFAULT_STOP
) -> str:
    return prefix + str(random_range(start, stop))
```

[UUID]: https://en.wikipedia.org/wiki/Universally_unique_identifier
[UDID]: https://en.wikipedia.org/wiki/UDID
