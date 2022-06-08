# RS, UUID and UDID

These are the parameters that can be frequently noticed when sending a request.

## RS

RS stands for Random Seed, or Random String, which is essentially just a string containing *n* (often *10*) random alphanumeric characters.
RS is mainly sent as `rs` in requests.

Generating RS is quite simple:

<!-- tabs:start -->

### **Python**

```py
import random
from string import ascii_letters, digits  # so we don't have to type [A-Za-z0-9] by hand

# this code works only on python 3.6 and above

possible_letters = ascii_letters + digits


def generate_rs(n: int) -> str:
    return ("").join(random.choices(possible_letters, k=n))
```

### **Javascript/NodeJS**

```js
// define these functions to don't have to type [a-zA-Z0-9]
const range = (size, startAt = 0) => [...new Array(size).keys()].map(e => e + startAt);
const characterRange = (start, end) => String.fromCharCode(...range(end.charCodeAt(0) - start.charCodeAt(0) + 1, start.charCodeAt(0)));

const possibleLetters = [
    ...characterRange("a", "z"), 
    ...characterRange("A", "Z"), 
    ...range(9)
];

const generateRs = n => range(n).map(() => possibleLetters[Math.floor(Math.random() * possibleLetters.length)]).join("");
```

<!-- tabs:end -->

## UUID

[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) stands for Universally Unique IDentifier.
It has format of `aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeee` and is sent as `uuid` in requests.

It can be randomly generated using our `generate_rs()` function:

<!-- tabs:start -->

### **Python**

```py
def generate_uuid(parts: [int] = (8, 4, 4, 4, 10)) -> str:
    # apply generate_rs to each number in parts, then join results
    return ("-").join(map(generate_rs, parts))
```

### **Javascript/NodeJS**

```js
const generateUuid = (parts = [8, 4, 4, 4, 10]) => parts.map(generateRs).join("-");
```

<!-- tabs:end -->

## UDID

[UDID](https://en.wikipedia.org/wiki/UDID) is an abbreviation for Unique Device IDentifier that is sent as `udid` in requests.
It does not really have a defined format,
but frequently has structure like `Sxxx...` where `x` are digits,
or it is the same as PlayerID of a user.

Generating UDID should be simpler because we can just generate a random integer:

<!-- tabs:start -->

### **Python**

```py
import random


def generate_udid(start: int = 100_000, end: int = 100_000_000) -> str:
    return "S" + str(random.randint(start, end))
```

### **Javascript/NodeJS**

```js
const generateUdid = (start = 100_000, end = 100_000_000) => "S" + Math.floor(Math.random() * end - start)
```

<!-- tabs:end -->
