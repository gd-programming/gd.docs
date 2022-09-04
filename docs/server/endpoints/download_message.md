# downloadGJMessage20.php

Download a message.

## Parameters

### Required Parameters

**accountID** - The person's account ID

**gjp** - The blocking person's [GJP](/topics/encryption/gjp.md)

**messageID** - The ID of the message to read

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Returns a [message object](/resources/server/message.md) separated by colons `:`

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code we are getting the message info of the message with ID 54109536

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "messageID": 54109536,
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/downloadGJMessage20.php", data=data)
print(req.text)
```

**Response**
```py
6:DevExit:3:3935672:2:173831:1:54109536:4:WW91J3JlIGR1bWIgbG9s:8:1:9:0:5:TWhtIHllcCB5b3UncmUgcCBkdW1iIGxtYW8=:7:19 minutes
```

<!-- tabs:end -->
