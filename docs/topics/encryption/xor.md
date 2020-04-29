# XOR

[XOR](https://en.wikipedia.org/wiki/Bitwise_operation#XOR) is a *bit-wise* binary operation that is commonly written as `^` in programming languages.

Each character in a string is essentially represented by a number,
so-called *codepoint*, to which XOR operation can be applied.

## XOR Cipher

**XOR-Cipher** elaborates on the idea of applying *XOR* to each to characters,
one in the string and one in the key.

<!-- tabs:start -->

### **Python**

```py
def xor_cipher(string: str, key: str) -> str:
  # Join together all the XORed characters
  return ''.join(
    # Create an XORed character from...
    chr(
      # the XOR of the unicode values of the key and string characters
      ord(string[i]) ^ ord(key_str[i % len(key_str)])
    # for every character in the string
    ) for i in range(len(string))
  )
```

### **JavaScript**

```js
function xor(str, key) {
  let xored = '';
  // Iterate through every character
  for (let i = 0; i < str.length; i++) {
    // Add each xored character to the final string
    xored += str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
  }
  return xored;
}
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
