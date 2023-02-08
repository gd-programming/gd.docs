# readGJFriendRequest20.php

Marks a friend request as "read"

## Parameters

### Required Parameters

**accountID** - The accountID of the user reading the friend request

**gjp** - The [GJP](/docs/topics/gjp.md) of the user reading the friend request

**requestID** - The ID of the friend request

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

1 if the required parameters are met, otherwise -1

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    'accountID': 173831, # DevExit's account ID
    'gjp': "********", # This would be DevExit's password encoded with GJP encryption
    'requestID': 43199784,
    'secret': 'Wmfd2893gb7'
}

r = requests.post('http://boomlings.com/database/readGJFriendRequest20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
