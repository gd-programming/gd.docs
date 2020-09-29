# deleteGJMessages20.php

Deletes a message between two users.

## Parameters

### Required Parameters

**accountID** - The account ID of the user who is deleting the message

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user who is deleting the message

**messageID** - ID of the message being deleted

**isSender** - 1 if the user who deleted the message is the sender, otherwise this parameter isn't sent

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Always returns 1, regardless of whether the message was deleted or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting a message with the ID 3141592
# DevExit received this message, and therefore the isSender parameter is not needed

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "messageID": 3141592,
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/deleteGJMessages20.php", data=data)
print(req.text)


```

**Response**
```py
1
```

<!-- tabs:end -->