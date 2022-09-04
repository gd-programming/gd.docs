# accounts/registerGJAccount.php

Registers an account

## Parameters

### Required Parameters

**userName** - The username of the account to be added

**password** - The password of the account to be added

**email** - The email of the account to be added

**secret** - Wmfv3899gc9

## Response

1 if the account ID was successfully created, otherwise an [error code](/topics/status_codes)

## Example

<!-- tabs:start -->

### Python

```py
import requests

data = {
    "userName": "GDDocsTestAcc",
    "password": "********",
    "email": "gddocsemail@gmail.com",
    "secret": "Wmfv3899gc9"
}

req = requests.post("http://boomlings.com/database/accounts/registerGJAccount.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
