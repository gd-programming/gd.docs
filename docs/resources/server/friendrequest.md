# Server Friend Request Resource

## Friend Request

A friend request is an invite with a message that you can send to someone to invite them to be friends with you on Geometry Dash.

#### Friend Request Structure

**Note:** We will use "other user" to describe the user on the other side of the friend request, be it the receiving end or the sending end.

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | Username				  | **string**									 | The username of the other user
| 2   | Player ID				  | **number**									 | The player ID of the other user. **This is different than the account ID**
| 9   | Icon					  | **number**									 | Which icon the other user is using, starting with 1 as the first icon
| 10  | Player Color 1			  | **number**									 | The other user's primary player color, presumably ordered cronologically from left to right per update
| 11  | Player Color 2			  | **number**									 | The other user's secondary player color, presumably ordered cronologically from left to right per update
| 14  | Icon Type				  | **number**									 | The other user's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | Unknown					  | **number**									 | Either 0 or 2, might be related to glow
| 16  | Account ID				  | **number**									 | The other user's account ID. **This is different than the player ID**
| 32  | Friend Request ID		  | **number**									 | An ID unique to each friend request. (I'm not 100% certain on this)
| 35  | Message					  | **string**									 | The friend requests's message, encoded in [base64](/topics/encryption/base64.md)
| 37  | Age						  | **string** 									 | How long ago the friend request was sent (e.g. "2 months")
| 41  | isBlocked			      | **Bool**									 | if you have blocked the user