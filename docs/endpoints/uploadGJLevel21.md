# uploadGJLevel21.php

Uploads a created level to the servers.

## Parameters

### Required Parameters

**gameVersion** - The game version. Currently 21

**accountID** - The uploader's account ID

**gjp** - The uploader's [GJP](./topics/encryption/gjp.md)

**userName** - The uploader's username

**levelID** - The ID of the level if updating to a newer version, otherwise 0

**levelName** - The name of the level, in plain text

**levelDesc** - The description of the level, in [URL-safe base64](./topics/encryption/base64.md)

**levelVersion** - The version number of the level

**levelLength** - The length of the level as a number, where 0 is tiny and 4 is XL

**audioTrack** - The [official song number](./reference.md) used in the level. Set to 0 if a newgrounds song is used

**auto** - Unknown (0)

**password** - The level's copy password. Set to 0 for no copy or 1 for free copy

**original** - The ID of the original level if the level was copied, otherwise 0

**twoPlayer** - Set to 1 if the level utilizes two player mode

**songID** - The ID of the custom Newgrounds song used in the level. Set to 0 if an official song is used

**objects** - The number of objects in the level

**coins** - The number of user coins in the level

**requestedStars** - The requested star rating for the level. The number is not limited to 10

**unlisted** - Set to 1 if the level should be unlisted and only viewable by friends

**ldm** - Set to 1 if the level should have a low detail checkbox

**levelString** - The actual level data. Must be gzip compressed and then converted to [URL-safe base64](./topics/encryption/base64.md)

**seed2** - A mandatory [chk value](./topics/encryption/chk.md) generated from the first 50 characters of the **_compressed_** level data

**secret** - Wmfd2893gb7

### Optional Parameters

**wt** - the amount of time spent in the editor of a level (local copy)

**wt2** - The amount of time spent in the editor of a level (previous copies)

**seed** - A random string

**extraString** - A list of underscore seperated numbers. apparently used for rendering levels

**levelInfo** - A random gzip compressed string

**binaryVersion** - 35

**gdw** - 0

## Response

Returns the ID of the uploaded level, or `-1` if the request was rejected.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This is an empty level with a default block at (8, 4)
# with (0, 0) being the bottom left block above the ground.

levelString = "H4sIAAAAAAAAC6WQwQ3DIAxFF3IlfxsIUU6ZIQP8AbJChy_GPSZqpF7-A4yfDOfhXcCiNMIqnVYrgYQl8rDwBTZCVbkQRI3oVHbiDU6F2jMF_lesl4q4kw2PJMbovxLBQxTpM3-I6q0oHmXjzx7N0240cu5w0UBNtESRkble8uSLHjh8nTubmYJZ2MvMrEITEN0gEJMxlLiMZ28frmj"

data = {
	"gameVersion": 21,
	"accountID": 173831, # This is DevExit's account ID
	"gjp": "*******", # This would be DevExit's password encoded with GJP encryption
	"userName": "devexit",
	"levelID": 0,
	"levelName": "Test", # The level name is Test
	"levelDesc": "QSB0ZXN0IGxldmVsIGZvciB0aGUgR0QgRG9jcyE", # "A test level for the GD Docs!"
	"levelVersion": 1,
	"levelLength": 0,
	"audioTrack": 0, # This uses a newgrounds song
	"auto": 0,
	"password": 314159,
	"original": 55610687,
	"twoPlayer": 0,
	"songID": 546561, # NK - Jawbreaker
	"objects": 1,
	"coins": 0,
	"requestedStars": 50,
	"unlisted": 1, # This level is unlisted, but does exist!
	"ldm": 0,
	"levelString": levelString, # The level string for the level described above
	"seed2": generate_chk(key="41274", values=[generate_upload_seed(levelString)], salt="xI25fpAapCQg"), # This is talked about in the CHK encryption,
	"secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/uploadGJLevel21.php", data=data)
print(req.text)
```

**Response**

```py
62687277
```

<!-- tabs:end -->
