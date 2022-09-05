# blockGJUser20.php

Blocks a user.

## Parameters

### Required Parameters

**accountID** - The blocking person's account ID

**gjp** - The blocking person's [GJP](/topics/encryption/gjp.md)

**targetAccountID** - The account ID of the person being blocked

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Always returns 1, regardless of if the target account exists or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is blocking RobTop

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "targetAccountID": 71, # Robtop's account ID
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/blockGJUser20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->