# rateGJDemon21.php

Rates the demon difficulty of a demon level

## Parameters

### Required Parameters

N/A

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**secret** - Wmfp3897gc3

**accountID** - The accountID of the user who's rating the demon's difficulty

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user who's rating the demon's difficulty

**levelID** - The ID of the demon being rated

**rating** - 1 for Easy Demon, 2 for Medium Demon, 3 for Hard Demon, 4 for Insane Demon and 5 for Extreme Demon

## Response

Always -1. Returns a 500 error code when sent by GD

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

headers = {
}

data = {
    "secret": "Wmfp3897gc3",
    "levelID": 3979721,
    "rating": 5
}

req = requests.post('http://www.boomlings.com/database/rateGJDemon21.php', headers=headers, data=data)
print(req.text)
```

**Response**
```py
-1
```

<!-- tabs:end -->