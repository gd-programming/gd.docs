# blockGJUser20.php

Blocks a user.

## Parameters

### Required Parameters

**accountID** - The blocking person's account ID

**gjp** - The blocking person's [GJP](/topics/encryption/gjp.md)

**targetAccountID** - The account ID of the person being blocked

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Always returns 1, regardless of if the target account exists or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is blocking RobTop

data = {
        "accountID": 173831, # DevExit's account ID
        "gjp": "********", # This would be DevExit's password encoded with GJP encryption
        "targetAccountID": 71, # Robtop's account ID
        "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/blockGJUser20.php", data=data)
print(req.text)
```

### **JavaScript**
```js
// With this code, DevExit is blocking RobTop

const data = {
        accountID: 173831, // DevExit's account ID
        gjp: "********", // This would be DevExit's password encoded with GJP encryption
        targetAccountID: 71,
        secret: "Wmfd2893gb7",
}

// Asynchornous context
const res = await fetch("http://boomlings.com/database/blockGJUser20.php", {
        method: "POST",
        body: new URLSearchParams(data) // Can be FormData(data) as well
});

const text = await res.text();
console.log(text);
```

### **NodeJS**
```js
// With this code, DevExit is blocking RobTop

// import axios from "axios" with ESM
const axios = require("axios");

const data = {
        accountID: 173831, // DevExit's account ID
        gjp: "********", // This would be DevExit's password encoded with GJP encryption
        targetAccountID: 71,
        secret: "Wmfd2893gb7",
}

// Asynchoronous context
const res = await axios.post("http://boomlings.com/database/blockGJUser20.php", new URLSearchParams(data));
console.log(res.data);

```

**Response**
```py
1
```

<!-- tabs:end -->