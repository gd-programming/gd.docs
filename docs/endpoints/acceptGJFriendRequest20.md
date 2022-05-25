# acceptGJFriendRequest20.php

Accepts an incoming friend request

## Parameters

### Required Parameters

**accountID** - Account ID of the user accepting the friend request

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user accepting the friend request

**targetAccountID** - Account ID of the user who sent the friend request

**requestID** - ID of the friend request (Returned by [uploadFriendRequest20](/endpoints/uploadFriendRequest20.md))

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

1, regardless of if the friend request exists or not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is accepted a friend request
# from PasswordFinders, whose account ID is 5317656

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "targetAccountID": 5317656,
    "requestID": 43248797,
    "secret": "Wmfd2893gb7",
}

req = requests.post('http://boomlings.com/database/acceptGJFriendRequest20.php', data=data)
print(req.text)
```

### **JavaScript**

```js
// With this code, DevExit is accepted a friend request
// from PasswordFinders, whose account ID is 5317656

const data = {
    accountID: 173831,
    gjp: "********", // This would be DevExit's password encoded with GJP encryption
    targetAccountID: 5317656,
    requestID: 43248797,
    secret: "Wmfd2893gb7",
}

// Asynchornous context
const res = await fetch("http://boomlings.com/database/acceptGJFriendRequest20.php", { 
    method: "POST",
    body: new URLSearchParams(data) // Can be FormData(data) too
})

const text = await res.text();
console.log(text);
```

### **NodeJS**
```js
// With this code, DevExit is accepted a friend request
// from PasswordFinders, whose account ID is 5317656

// import axios from "axios" with ESM
const axios = require("axios")

const data = {
    accountID: 173831,
    gjp: "********", // This would be DevExit's password encoded with GJP encryption
    targetAccountID: 5317656,
    requestID: 43248797,
    secret: "Wmfd2893gb7",
}

// Asynchoronous context
const res = await axios.post("http://boomlings.com/database/acceptGJFriendRequest20.php", new URLSearchParams(data));
console.log(res.data);

```

**Response**
```py
1
```

<!-- tabs:end -->