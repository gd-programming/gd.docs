# uploadGJComment21.php

Uploads a comment to a user level.

## Parameters

### Required Parameters

**accountID** - The commenter's account ID

**gjp** - The commenter's [GJP](/topics/encryption/gjp.md)

**userName** - The commenter's username

**comment** - The comment, converted to [URL-safe base64](/topics/encryption/base64)

**secret** - Wmfd2893gb7

**levelID** - The ID of the level to comment on

**percent** - The level percentage shown on the comment

[**chk**](/topics/encryption/chk) - `userName` + `comment` + `levelID` + `percent`

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Returns the ID of the posted comment, or `-1` if the request was rejected.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is posting the comment "Hello from the GDDocs!" to 62687277

chk = generate_chk(key="29481", values=["devexit", "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", 62687277, 69], salt="0xPT6iUrtws0J")
# These values can be found in the XOR and CHK pages

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "userName": "devexit",
    "comment": "SGVsbG8gZnJvbSB0aGUgR0REb2NzIQ==", # "Hello from the GDDocs!"
    "levelID": 62687277,
    "percent": 69,
    "chk": chk,
    "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/uploadGJComment21.php", data=data)
print(req.text)
```

**Response**
```py
31444784
```

<!-- tabs:end -->
