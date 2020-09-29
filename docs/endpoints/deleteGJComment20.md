# deleteGJComment20.php

Deletes a level comment.

## Parameters

### Required Parameters

**accountID** - The account ID of the user who is deleting the comment

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user who is deleting the comment

**commentID** - ID of the comment

**levelID** - ID of the level the comment is on

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Returns 1 if deleted, -1 if not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the comment with ID 31415926

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "commentID": 31415926,
        "levelID": 54953085,
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/deleteGJComment20.php", data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->