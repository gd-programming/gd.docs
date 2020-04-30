# uploadGJComment21.php

Uploads a comment to a user level.

## Parameters

### Required Parameters

**accountID** - The commenter's account ID

**gjp** - The commenter's [GJP](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/gjp.md)

**userName** - The commenter's username

**comment** - The comment, converted to [URL-safe base64](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/base64.md)

**secret** - Wmfd2893gb7

**levelID** - The ID of the level to comment on

**percent** - The level percentage shown on the comment

[**chk**](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/chk.md) - `userName` + `comment` + `levelID` + `percent` + "0xPT6iUrtws0J"

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

## Response

Returns the ID of the posted comment, or `-1` if the request was rejected.
