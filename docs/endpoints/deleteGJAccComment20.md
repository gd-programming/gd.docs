# deleteGJAccComment20.php



## Parameters

### Required Parameters

**accountID** - Account ID of the user deleting the comment

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user deleting the comment

**commentID** - The ID of the comment being deleted (Returned by [uploadGJAccComment20](/endpoints/uploadGJAccComment20.md))

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

1 if the comment was deleted, -1 if there was an error

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code, DevExit is deleting his account comment with ID 1772717

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "commentID": 1772717,
    "secret": "Wmfd2893gb7"
}

r = requests.post('http://boomlings.com/database/deleteGJAccComment20.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->