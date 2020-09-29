# updateGJAccSettings20.php

Updates a user's account settings

## Parameters

### Required Parameters

**accountID** - The accountID of the user whose account is being updated

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user whose account is being updated

**secret** - Wmfv3899gc9

### Optional Parameters

**mS** - Who the user allows messages from: 0 for anyone, 1 for just friends, and 2 for no one

**frS** - Who the user allows friend requests from: 0 for anyone, and 1 for no one

**cS** - Who the user allows to view their comments: 0 for anyone, 1 for just friends, and 2 for only themselves

**yt** - The end of the link to the user's youtube channel, after the `/channel/`. e.g. `UCZoN2WLAooS6uhREa9Cgpwg`

**twitter** - The user's twitter handle

**twitch** - The user's twitch username

## Response

1 if the required parameters are passed, regardless of anything is being updated, -1 otherwise

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "secret": "Wmfv3899gc9",
    "mS": 0,
    "frS": 0,
    "cS": 0,
    "yt": "UCZoN2WLAooS6uhREa9Cgpwg",
    "twitter": "DevExit",
    "twitch": "devexit"
}

req = requests.post('http://boomlings.com/database/updateGJAccSettings20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->