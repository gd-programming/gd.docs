# deleteGJLevelUser20.php

Deletes a level from the server.

## Parameters

### Required Parameters

**accountID** - The level author's account ID

**gjp** - The level author's [GJP](/topics/encryption/gjp.md)

**levelID** - The ID of the level being deleted

**secret** - Wmfv2898gc9

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Returns 1 if deleted, -1 if it failed or the level does not exist.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting the level with ID 62689548

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "levelID": 62689548,
        "secret": "Wmfv2898gc9"
}

req = requests.post("http://boomlings.com/database/deleteGJLevelUser20.php", data=data)
print(req.text)
```

### **Javascript**

```js
// With this code, DevExit is deleting the level with ID 62689548

const data = {
        accountID: 173831, // DevExit's account ID
        gjp: "********", // This would be DevExit's password encoded with GJP encryption
        levelID: 62689548,
        secret: "Wmfv2898gc9",
}

// Asynchronous context
const res = await fetch("http://boomlings.com/database/deleteGJLevelUser20.php", {
        method: "POST",
        body: new URLSearchParams(data),
});

const text = await res.text();
console.log(text);
```

**Response**
```py
1
```

<!-- tabs:end -->
