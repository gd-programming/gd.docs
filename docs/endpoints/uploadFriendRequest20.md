# uploadFriendRequest20.php

Sends a friend request to a user

## Parameters

### Required Parameters

**accountID** - Account ID of the user sending the friend request

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user sending the friend request

**toAccountID** - Account ID of the user receiving the friend request

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**comment** - The comment sent with the friend request encoded with [Base 64](/topics/encryption/base64), defaults to nothing if left out

## Response

1 if the user hasn't sent a friend request to that account ID already, regardless of whether it exists or not, but returns a 500 error code if the user has already sent a friend request to that account 

## Example

<!-- tabs:start -->

### **Python**

```py
import requests, base64

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "toAccountID": 5317656,
    "comment": base64.b64encode(b"Hello good sir!").decode(),
    "secret": "Wmfd2893gb7",
}

r = requests.post('http://boomlings.com/database/uploadFriendRequest20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->