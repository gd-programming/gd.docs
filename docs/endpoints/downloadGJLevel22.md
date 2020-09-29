# downloadGJLevel22.php

Downloads a user level and info so it can be played.

## Parameters

### Required Parameters

**levelID** - The ID of the level to download. Use -1 for the daily level and -2 for the weekly.

**secret** - Wmfd2893gb7

### Optional Parameters

**inc** - Unknown function. Set to 1

**extras** - Unknown function. Set to 0

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Returns a [level object](/resources/server/level.md).

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# With this code we are getting the level info of Test by DevExit

data = {
	"levelID": 62687277,
	"secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/downloadGJLevel22.php", data=data)
print(req.text)
```

**Response**
```py
1:62687277:2:Test:3:QSB0ZXN0IGxldmVsIGZvciB0aGUgR0QgRG9jcyE=:4:H4sIAAAAAAAAC6WQwQ3DIAxFF3IlfxsIUU6ZIQP8AbJChy_GPSZqpF7-A4yfDOfhXcCiNMIqnVYrgYQl8rDwBTZCVbkQRI3oVHbiDU6F2jMF_lesl4q4kw2PJMbovxLBQxTpM3-I6q0oHmXjzx7N0240cu5w0UBNtESRkble8uSLHjh8nTubmYJZ2MvMrEITEN0gEJMxlLiMZ28frmj:5:1:6:3935672:8:0:9:0:10:1:12:0:13:21:14:0:17::43:0:25::18:0:19:0:42:0:45:1:15:0:30:55610687:31:0:28:1 hour:29:1 hour:35:546561:36::37:0:38:0:39:50:46::47::40::27:AQcHBwEL#1bae6491cc87c72326abcbc0a7afaee139aa7088#f17c5a61f4ba1c7512081132459ddfaaa7c6f716
```

<!-- tabs:end -->