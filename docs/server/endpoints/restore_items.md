# restoreGJItems.php

Restores user's data; defunct as of the new save system

## Parameters

### Required Parameters

**udid** - A unique identifier for the user's device, can be replaced with anything

**secret** - Wmfd2893gb7

## Response

A 500 error code

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"udid": "605BE9FD-300E-49EA-A45C-B272EE64D3E0",
    "secret": "Wmfd2893gb7"
}

req = requests.post('http://boomlings.com/database/restoreGJItems.php', data=data)
print(req.status_code)
```

**Response**
```py
500
```

<!-- tabs:end -->