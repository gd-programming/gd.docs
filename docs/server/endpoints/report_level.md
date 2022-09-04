# reportGJLevel.php

Reports a level

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**levelID** - The ID of the level being reported

## Response

1 if a secret is passed, even if no levelID is passed, and -1 otherwise

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"levelID": 30194711,
    "secret": "Wmfd2893gb7"
}

req = requests.post('http://boomlings.com/database/reportGJLevel.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->