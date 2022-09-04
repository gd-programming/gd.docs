# updateGJDesc20.php

Updates the description of a level

## Parameters

### Required Parameters

**accountID** - The account ID of the level's author

**gjp** - The [GJP](/topics/encryption/gjp.md) of the level's author

**levelID** - The ID of the level

**levelDesc** - The new description of the level, converted to [URL-safe base64](/topics/encryption/base64)

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

1 if successful, -1 if not

## Example

<!-- tabs:start -->

### **Python**

```py
import requests, base64, random

data = {
    "accountID": 5317656, # PasswordFinders' account ID
    "gjp": "********", # This would be PasswordFinders' password encoded with GJP encryption
    "userName": "PasswordFinders",
    "stars": 6969,
    "demons": 69,
    "diamonds": 5000,
    "icon": 0,
    "color1": 21,
    "color2": 42,
    "iconType": 0,
    "coins": 150,
    "userCoins": 400,
    "special": 2,
    "accIcon": 0,
    "accShip": 0,
    "accBall": 0,
    "accBird": 0,
    "accDart": 0,
    "accRobot": 0,
    "accGlow": 0,
    "accSpider": 0,
    "accExplosion": 1,
    "secret": "Wmfd2893gb7",
    "seed": ''.join(random.sample("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM", 10))
}
items = [add(data, "accountID"), add(data, 'userCoins'), add(data, 'demons'), add(data, 'stars'), add(data, 'coins'), add(data, 'iconType'), add(data, 'icon'), add(data, 'diamonds'), add(data, 'accIcon'), add(data, 'accShip'), add(data, 'accBall'), add(data, 'accBird'), add(data, 'accDart'), add(data, 'accRobot'), add(data, 'accGlow'), add(data, 'accSpider'), add(data, 'accExplosion')]
data['seed2'] = generate_chk(items, "85271", "xI35fsAapCRg")

r = requests.post('http://boomlings.com/database/updateGJUserScore22.php', data=data)
print(req.text)
```

**Response**
```py
17787971
```

<!-- tabs:end -->