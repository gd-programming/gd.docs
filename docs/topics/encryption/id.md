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


def generate_rs(n: int = 10) -> str:
    return ("").join(random.choices(possible_letters, k=n))
```

### **JavaScript**
```js
function generateRS(len = 10) {
  // Join many alphanumeric characters together for any length
  let out = '';
  for (; len > 0; len--)
    out += (Math.random() * 36).toString();
  return out;
}
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

### **JavaScript**
```js
function generateUUID(parts = [8, 4, 4, 4, 10]) {
  return parts.map(generateRS).join('-');
}
```

<!-- tabs:end -->

Note that the Geometry Dash servers don't particularly care about the UUID format; you can send any random string, really.

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

### **JavaScript**
```js
function generateUDID(min = 100000, max = 100000000) {
  return 'S' + Math.floor(Math.random() * (max - min) + min);
}
```

<!-- tabs:end -->

Note that the Geometry Dash servers don't particularly care about the UDID format either.
