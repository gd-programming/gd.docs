# likeGJItem211.php

Likes a level, comment, etc.

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

**itemID** - The ID of the level, comment, or account comment

**type** - 1 for level, 2 for level comment, 3 for account comment.

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**accountID** - The liking/disliking person's account ID

**gjp** - The liking/disliking person's [GJP](/topics/encryption/gjp.md)

**udid** - The liking/disliking person's [udid](/topics/encryption/id?id=udid)

**uuid** - The liking/disliking person's [uuid](/topics/encryption/id?id=uuid)

**like** - 0 is dislike, 1 is like. Not sure what it defaults to if left out, but it can be left out.

## Response

Always returns 1, regardless of whether the item was liked/disliked or not.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7",
	"itemID": 62687277,
	"type": 1
}

req = requests.post('http://boomlings.com/database/likeGJItem211.php', data=data)
print(req.text)
```

**Response**
```py
1
```

<!-- tabs:end -->