# Level Passwords

Level passwords are byte arrays at a 4 or 6 number length that can be set when a level is published. They are used for setting a way for adding a security to copying levels without making them free, alongside the implemented **Unlisted** property. Over the server, level passwords are encoded in a way that makes it more difficult for people to normally read, to prevent people from directly copying them from the response given from the server.

The property is also used to determine whether a level is set for free copy, or not; with the values `0` not being able to be copied, and `1` being free copy.

## Decoding

The passwords used to copy levels that have such set aren't plain string, and are encoded in a method commonly seen for values like these. Like most of the base64, it's done in [URL Encoded Base64](/topics/encryption/base64.md) The method of decryption is as follows:

`Decode Base64` -> `Xor Cipher (key "26364")` -> `Level Password`

**The following code demonstrates this process programmatically:**

<!-- tabs:start -->

### **Python**

```py
import base64

def decode_level_password(password: str) -> str:
	# decode the password from base64
	decoded_base64 = base64.b64decode(password.encode()).decode()
	# put it through the xor cipher with the key "26364")
	decoded = xor_cipher(decoded_base64, "26364")

	return decoded
```

<!-- tabs:end -->
