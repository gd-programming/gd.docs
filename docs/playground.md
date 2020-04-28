# Miko's Playground
You're able to use this publicly, just like a sandbox. Please make sure ***not*** to commit this ***EVER***.

<!-- tabs:start -->

### Python

```py
import base64

def decode_level_password(password: str) -> str:
    # decode the password from base64
    decoded_base64 = base64.b64decode(password.encode()).decode()
    # put it through the xor cipher with the key "26364")
    decoded = xor_cipher(decoded_base64, "26364")

    return decoded
```

### Second tab

fuck it

<!-- tabs:end -->

\* = do you like disclaimers, i don't