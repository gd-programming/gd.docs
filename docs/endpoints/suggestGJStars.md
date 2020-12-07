# suggestGJStars.md

Endpoint used by moderators to send levels to RobTop

## Parameters

### Required Parameters

**accountID** - accountID of the user

**gjp** - The [GJP](/topics/encryption/gjp.md) of the user

**levelID** - the ID of the level

**stars** - how many stars that are requested

**secret** - Wmfp3879gc3

**gameVersion** - the game version

**binaryVersion** - the binary version

**feature** - 1 for feature, 0 for star rate

**gdw** - 0

## Response

-2 or 1

## example

<!--tabs:start -->

## Python
```py
import requests

data = {
        "gameVersion": 21,
        "binaryVersion":35
        "accountID": 71, # a moderators accountID
        "gjp": "********", # This would be the mods password encoded with GJP encryption
        "levelID": 128,
        "stars": 3,
        "feature": 0,
        "gdw": 0,
        "secret": "Wmfp3879gc3"
}

req = requests.post("http://boomlings.com/database/suggestGJStars.php", data=data)
print(req.text)

```

**Response**
```py
1
```