# removeGJFriend20.php

Removes someone from a user's friend list

## Parameters

### Required Parameters

**accountID** - The accountID of the user removing the friend

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user removing the friend

**targetAccountID** - The accountID of the user being removed

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response



## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    'accountID': 173831, # DevExit's account ID
    'gjp': "********", # This would be DevExit's password encoded with GJP encryption
    'targetAccountID': 5317656,
    'secret': 'Wmfd2893gb7'
}

r = requests.post('http://boomlings.com/database/removeGJFriend20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->