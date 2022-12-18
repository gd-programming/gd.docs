# uploadGJAccComment20.php

Posts an account comment

## Parameters

### Required Parameters

**accountID** - Account ID of the user posting the comment

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user posting the comment

**comment** - The comment's text, converted to [URL-safe base64](/topics/encryption/base64).

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**cType** - The comment type, 0 for level, 1 for user

[**chk**](/topics/encryption/chk?id=comment) - Unsure

## Response

Returns account comment ID if the comment was successfully posted, but a 500 error code if the comment is either left out or could not be posted

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "comment": base64.b64encode(b"This comment was uploaded for the GD Docs!").decode(),
    "secret": "Wmfd2893gb7",
}

r = requests.post('http://boomlings.com/database/uploadGJAccComment20.php', data=data)
print(req.text)
```

**Response**
```py
1772719
```

<!-- tabs:end -->
