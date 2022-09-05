# rateGJStars211.php

Sends a star suggestion for a level

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response



## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7"
}

req = requests.post('http://boomlings.com/database/getSaveData.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->