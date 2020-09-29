# getGJMapPacks21.php

Gets the map packs.

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**page** - Denotes which page of map packs you want to retrieve, starting with 0

## Response

A list of [map pack](/resources/server/mappack.md) objects, separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets the 5th page of map packs.

data = {
    "secret": "Wmfd2893gb7",
    "page": 4
}

req = requests.post("http://boomlings.com/database/getGJMapPacks21.php", data=data)
print(req.text)
```

**Response**
```py
1:59:2:Cyclone Pack:3:1566116,946020,1100161:4:8:5:1:6:5:7:255,75,255:8:255,75,255|1:60:2:Colossus Pack:3:1350389,1215630,1724579:4:8:5:1:6:5:7:100,255,175:8:100,255,175|1:61:2:Diamond Pack:3:1267316,1670283,1205277:4:8:5:1:6:5:7:255,255,255:8:255,255,255|1:11:2:Chaos Pack:3:329929,188909,340602:4:9:5:1:6:5:7:255,125,0:8:255,125,0|1:44:2:Magma Pack:3:882417,884256,551979:4:9:5:1:6:5:7:255,100,50:8:255,100,50|1:62:2:Paradox Pack:3:1447246,1132530,1683722:4:9:5:1:6:5:7:50,255,75:8:50,255,75|1:63:2:Funky Pack:3:1728550,1799065,1311773:4:9:5:1:6:5:7:50,175,255:8:50,175,255|1:19:2:Remix Pack 4:3:341613,358750,369294:4:10:5:2:6:6:7:255,255,0:8:255,255,0|1:20:2:Demon Pack 1:3:70059,10109,135561:4:10:5:2:6:6:7:255,0,125:8:255,0,125|1:21:2:Demon Pack 2:3:57730,308891,102765:4:10:5:2:6:6:7:255,0,0:8:255,0,0#65:40:10#79c437d2cf75d2edf36a5094e0cc650c54440ba3
```

<!-- tabs:end -->