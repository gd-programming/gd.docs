# Level Passwords
Level Passwords are numbers of `4 - 6` character long numbers that can be set when a level is published. They are used for setting a way for adding a security to copying levels without making them free, alongside the implemented **Unlisted** property. Over the server, level passwords are encoded in a way that makes it more difficult for people to normally read, to prevent people from directly copying them from the response given from the server.

The property is also used to determine whether a level is set for free copy, or not; with the values `0` being uncopyable, and `1` being free copy.

## Decoding
The passwords to copying levels that have such set aren't plain string, and are encoded in a method commonly seen for values like these. Like most of the base64, it's done in [URL Encoded Base64]() The method of decryption is as follows: 

`Decode Base64` -> `Xor Cipher (key 26364)` -> `Level Password`

**The following pseudocode demonstrates this process programmatically:**
```py
def decode_level_password(password):
  decoded_b64 = base64.b64decode(password) # decode the password from base64
  decoded = xor.cipher(password, 26364) # put it through the xor cipher with the key 26364)

  return password
```