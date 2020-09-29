# getAccountURL.php

Gets the URL for the data server. Official domain name is [http://geometrydash.com](http://geometrydash.com), but the server returns [http://69.164.210.48](http://69.164.210.48).

## Parameters

### Required Parameters

**accountID** - Anyone's account ID

**type** - Unknown use; 2 by default

**secret** - Wmfd2893gb7

## Response

[http://69.164.210.48](http://69.164.210.48)

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
        "accountID": 173831,
        "type": 2,
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getAccountURL.php", data=data)
print(req.text)
```

**Response**
```py
http://69.164.210.48
```

<!-- tabs:end -->