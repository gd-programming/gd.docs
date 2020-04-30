# uploadGJLevel21.php

Uploads a created level to the servers.

## Parameters

### Required Parameters

**accountID** - The uploader's account ID

**gjp** - The uploader's [GJP](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/gjp.md)

**userName** - The uploader's username

**levelID** - The ID the level, if updating it to a newer version. Otherwise 0

**levelName** - The name of the level, in plain text

**levelDesc** - The description of the level, in [URL-safe base64](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/base64.md)

**levelVersion** - The version number of the level

**levelLength** - The length of the level as a number, where 0 is tiny and 4 is XL

**audioTrack** - The [official song number](https://github.com/gd-programming/gddocs/blob/master/docs/reference.md) used in the level

**auto** - Unknown (0)

**password** - The level's copy password. Set to 0 for no copy or 1 for free copy

**original** - The ID of the original level, if the level was copied. Otherwise 0

**twoPlayer** - Set to 1 if the level utilizes two player mode

**songID** - The ID of the custom Newgrounds song used in the level. Set to 0 if an official song is used

**objects** - The number of objects in the level

**coins** - The number of user coins in the level

**requestedStars** - The requested star rating for the level. The number is not limited to 10

**unlisted** - Set to 1 if the level should be unlisted and only viewable by friends

**ldm** - Set to 1 if the level should have a low detail checkbox

**levelString** - The actual level data. Must be gzip compressed and then converted to [URL-safe base64](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/base64.md)

**seed2** - [A mandatory chk value generated from the first 50 characters of the ***compressed*** level data](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/chk.md)

**secret** - Wmfd2893gb7

### Optional Parameters

**wt** - A random number

**wt2** - Another random number

**seed** - A random string

**extraString** - A list of underscore seperated numbers. Unknown usage, but can be left out entirely without problems

**levelInfo** - A random gzip compressed string

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Returns the ID of the uploaded level, or `-1` if the request was rejected.
