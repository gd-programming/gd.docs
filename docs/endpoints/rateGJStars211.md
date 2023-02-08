# rateGJStars211.php

Sends a star suggestion for a level

## Parameters

### Required Parameters

**levelID** - the ID of a level to rate

**stars** - the amount of stars being suggested

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 20

**binaryVersion** - 35

**gdw** - 0

**accountID** - The rating person's account ID

**gjp** - The rating person's [GJP](/docs/topics/gjp.md)

**udid** - The rating person's [udid](/docs/topics/encryption/id.md?id=udid)

**uuid** - The rating person's [uuid](/docs/topics/encryption/id.md?id=uuid)

**chk** - unsure, but it can be left out

**rs** - [See here](/docs/topics/encryption/id.md?id=rs)

## Response

Always returns 1, regardless of whether the item was rated or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "levelID": 81304994,
    "stars": 3,
    "secret": "Wmfd2893gb7"
}

req = requests.post('http://boomlings.com/database/rateGJStars211.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->
