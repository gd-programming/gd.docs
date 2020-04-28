# XOR

[XOR](https://en.wikipedia.org/wiki/Bitwise_operation#XOR) is a *bit-wise* binary operation that is commonly written as `^` in programming languages.

It takes to integers and applies the following rule to each *bit* (hence, *bit-wise*):

| Left | Right | XOR |
|------|-------|-----|
| 0    | 0     | 0   |
| 1    | 0     | 1   |
| 0    | 1     | 1   |
| 1    | 1     | 0   |

Let's see an example of how XOR works for two numbers:

```plain
10 ^ 5 = 15

  1010
^ 0101
= 1111
```

We can see an interesting and very useful property of XOR.
That is, if we apply it twice, the result will be the same as the start.
For example:

```plain
15 ^ 5 = 10

  1111
^ 0101
= 1010
```

So, how does XOR apply in our case of encoding strings?
Well, each character in a string is essentially represented by a number, so-called *codepoint*.

In python, you can use `ord()` function to get the codepoint of a character,
and `chr()` to convert the codepoint to a character.

```py
>>> ord("N")
78
>>> chr(78)
"N"
```

## XOR Cipher

**XOR-Cipher** elaborates on the idea of applying XOR to each to characters,
one in the string and one in the key.

Let us define our simple XOR-Cipher function:

```py
def xor_cipher(string: str, key: str) -> str:
    ...  # we will add actual code soon
```

Here is an example of how this function will work.
Let's take a string `"GD"` (how original), and key `"42069"` (rather original as well).

Here is what will happen to our string if we apply XOR-Cipher:

```py
>>> chr(ord("G") ^ ord("4")) + chr(ord("D") ^ ord("2"))
"sv"
```

XOR-Cipher connects each character in given string with character in key (key is cycled), then applies XOR operation on each pair.

Returning back to our function:

```py
import itertools

# we are going to use itertools.cycle() on our key, which will basically
# repeatedly yield "1234512345..." for key "12345"

def xor_cipher(string: str, key: str) -> str:
    result = ""
    for string_char, key_char in zip(string, cycle(key)):
        result += chr(ord(string_char) ^ ord(key_char))
    return result
```

This function is quite good, but adding new characters to strings in python is quite slow.
Here is a better function that implements XOR Cipher (and hey, it is written in one line!):

```py
def xor_cipher(string: str, key: str) -> str
    return ("").join(chr(ord(x) ^ ord(y)) for x, y in zip(string, cycle(key)))
```

In fact, last function is used by `gd.py` project.

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
