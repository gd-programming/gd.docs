# XOR

[XOR](https://en.wikipedia.org/wiki/Bitwise_operation#XOR) is a *bit-wise* binary operation that is commonly written as `^` in programming languages.

Each character in a string is essentially represented by a number,
so-called *codepoint*, to which XOR operation can be applied.

<!-- tabs:start -->

### **Python**

In python, you can use `ord()` function to get the codepoint of a character,
and `chr()` to convert the codepoint to a character.

```py
>>> ord("N")
78
>>> chr(78)
"N"
```

<!-- tabs:end -->

## XOR Cipher

**XOR-Cipher** elaborates on the idea of applying *XOR* to each to characters,
one in the string and one in the key.

Here is our **XOR-Cipher** stub (empty) function:

<!-- tabs:start -->

### **Python**

```py
def xor_cipher(string: str, key: str) -> str: ...
```

<!-- tabs:end -->

Suppose we have a string `"GD"` (how original), and key `"42069"` (rather original as well).

Here is what will happen to our string if we apply **XOR-Cipher**:

<!-- tabs:start -->

### **Python**

```py
>>> chr(ord("G") ^ ord("4")) + chr(ord("D") ^ ord("2"))
"sv"
```

<!-- tabs:end -->

**XOR-Cipher** connects each character in given string with character in key (key is cycled), then applies *XOR* operation on each pair.

Returning back to the function:

<!-- tabs:start -->

### **Python**

```py
import itertools

# we are going to use itertools.cycle() on our key, which will basically
# repeatedly yield "1234512345..." for key "12345"

def xor_cipher(string: str, key: str) -> str:
    result = ""
    for string_char, key_char in zip(string, itertools.cycle(key)):
        result += chr(ord(string_char) ^ ord(key_char))
    return result
```

This function is quite good, but adding new characters to strings in python is quite slow.
Here is a better function that implements **XOR-Cipher** (and hey, it is written in one line!):

```py
def xor_cipher(string: str, key: str) -> str
    return ("").join(chr(ord(x) ^ ord(y)) for x, y in zip(string, itertools.cycle(key)))
```

<!-- tabs:end -->

## XOR Keys

Here is a list of XOR keys currently used in GD:

| Key   | Usage             |
|-------|-------------------|
| 14251 | Messages          |
| 26364 | Level Password    |
| 37526 | Account Password  |
| 39673 | Level Leaderboard |
| 41274 | Level Seed        |
| 29841 | Comment CHK       |
| 19847 | Challenges        |
| 59182 | Rewards           |
| 58281 | Like and Rate     |
| 85271 | User Profile      |
