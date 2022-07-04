# getGJGauntlets21.php

Gets the gauntlet levels.

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**special** - 1 (fetches the 2.2 gauntlets)

## Response

A list of [gauntlet objects](/resources/server/gauntlet.md), separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
    "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getGJGauntlets21.php", data=data)
print(req.text)
```

**Response**
```py
1:1:3:27732941,28200611,27483789,28225110,27448202|1:2:3:20635816,28151870,25969464,24302376,27399722|1:3:3:28179535,29094196,29071134,26317634,12107595|1:4:3:26949498,26095850,27973097,27694897,26070995|1:5:3:18533341,28794068,28127292,4243988,28677296|1:6:3:28255647,27929950,16437345,28270854,29394058|1:7:3:25886024,4259126,26897899,7485599,19862531|1:8:3:18025697,23189196,27786218,27728679,25706351#74aeff3cb009cbde1d7235e1c7e74b47d793eb82
```

<!-- tabs:end -->