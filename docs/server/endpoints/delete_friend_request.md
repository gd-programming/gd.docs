# deleteGJFriendRequests20.php

Deletes a friend request

## Parameters

### Required Parameters

**accountID** - The account ID of the user who is deleting the friend request

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user who is deleting the friend request

**targetAccountID** - ID of the person whose friend request is being deleted

**isSender** - 1 if the user who deleted the friend request is the sender, otherwise 0

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

## Response

Always returns 1, regardless of whether the request exists or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting a friend request to the person with ID 314159

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "targetAccountID": 314159, 
        "isSender": 1, # DevExit sent the friend request, so this is 1
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/deleteGJFriendRequests20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->