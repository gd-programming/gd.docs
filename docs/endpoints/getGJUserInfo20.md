# getGJUserInfo20.php

Gets info about a user

## Parameters

### Required Parameters

**targetAccountID** - The account ID of the person you want the info of

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**accountID** - Your accountID

**gjp** - Your [GJP](/topics/encryption/gjp.md)

## Response

Returns a [user object](/resources/server/user.md) for the player you want

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "targetAccountID": 173831
}

req = requests.post('http://boomlings.com/database/getGJUserInfo20.php', data=data)
print(req.text)
```

**Response**
```py
1:DevExit:2:3935672:13:115:17:606:10:18:11:16:3:5143:46:8531:4:142:8:1:18:0:19:0:50:0:20:UCZoN2WLAooS6uhREa9Cgpwg:21:119:22:22:23:31:24:13:25:30:26:24:28:1:43:2:48:1:30:47981:16:173831:31:0:44:DevExit:45:devexit:49:0:29:1
```

<!-- tabs:end -->