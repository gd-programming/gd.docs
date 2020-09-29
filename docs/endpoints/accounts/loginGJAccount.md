# accounts/loginGJAccount.php

Logs into an account

## Parameters

### Required Parameters

**udid** - Funnily, this is the UUID of the user, [see here](/topics/encryption/id?id=uuid)

**userName** - The username of the account being signed into

**password** - The password of the account being signed into

**secret** - Wmfv3899gc9

### Optional Parameters

**sID** - Unsure, seems to be another 

## Response

The account ID and the player ID of the user, separated by a comma, otherwise -1

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "udid": "605BE9FD-300E-49EA-A45C-B272EE64D3E0",
    "userName": "DevExit",
    "password": "********", # This would be DevExit's password
    "secret": "Wmfv3899gc9"
}

r = requests.post("http://boomlings.com/database/accounts/loginGJAccount.php", data=data)
print(req.text)
```

**Response**
```py
173831,3935672
```

<!-- tabs:end -->