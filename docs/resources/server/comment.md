# Server Comment Resource

## Comment

A comment is a message left on a level by a user. The server stores the message and its ID, along with the author's player ID, the likes, the percentage, etc.

#### Comment Object

A comment is split into two sections, separated by a colon. The first part is the comment information, and the second part is the author information.

#### Comment Structure

**Note:** Keys marked with an asterisk `*` are not returned by the getGJAccountComments20 endpoint.

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 2	  | Comment					  | **string**									 | The comment left by the user, encoded in [base64](/topics/encryption/base64.md)
| 3   | Author*					  | **number**									 | The player ID of the author. **This is different than the account ID**
| 4   | Likes					  | **number**									 | The amount of likes the comment has
| 6   | Message ID				  | **number**									 | The message ID. Account comments have different IDs than level comments
| 9   | Age						  | **string**									 | How long ago the comment was posted (e.g. "2 months")
| 10  | Percent*				  | **number**									 | The percent the player put in their comment
| 12  | Moderator Chat Color      | **string**									 | Comma separated list of the RGB values of the moderator's chat color

#### Player Structure

**Note:** This is not returned by the getGJAccountComments20 endpoint.

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | Username				  | **string**									 | Author's username
| 9   | Icon					  | **number**									 | Which icon the player is using, starting with 1 as the first icon
| 10  | Player Color 1			  | **number**									 | Author's primary player color, presumably ordered cronologically from left to right per update
| 11  | Player Color 2			  | **number**									 | Author's secondary player color, presumably ordered cronologically from left to right per update
| 14  | Icon Type				  | **number**									 | Author's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | Unknown					  | **number**									 | Either 0 or 2, might be related to glow
| 16  | Account ID				  | **number**									 | Author's account ID. **This is different than the player ID**