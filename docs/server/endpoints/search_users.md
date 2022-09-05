# getGJUsers20.php

Searches for a user and returns their info

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**str** - The name of the user you want to search for

**page** - The page of users you want. Redundant as it only returns 1 user

**total** - Current use is unknown, defaults to 0.

## Response

A [user object](/resources/server/user.md) of the person you're searching for.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
    "str": "Foundmyball"
}

req = requests.post('http://boomlings.com/database/getGJUsers20.php', data=data)
print(req.text)
```

**Response**
```py
1:foundmyball:2:15976456:13:66:17:50:6::9:2:10:11:11:15:14:6:15:0:16:5056324:3:571:8:0:4:31#999:0:10
```

<!-- tabs:end -->