# Server Leaderboard Score Resource

## Leaderboard Score

A leaderboard score is any score that is shown on a leaderboard, for example Viprin at #1 for creating.

#### Leaderboard Score Structure

**Note:** Keys marked by an `*` are only returned by getGJLevelScore211.

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | Username				  | **string**									 | The username of the user
| 2   | Player ID				  | **number**									 | The player ID of the user. **This is different than the account ID**
| 3   | Percentage*				  | **number**									 | Percentage the user has on the level
| 6   | Ranking					  | **number**									 | What rank they are (e.g. Viprin would have 1 in the creating leaderboard)
| 9   | Icon					  | **number**									 | Which icon the user is using, starting with 1 as the first icon
| 10  | Player Color 1			  | **number**									 | The user's primary player color, presumably ordered cronologically from left to right per update
| 11  | Player Color 2			  | **number**									 | The user's secondary player color, presumably ordered cronologically from left to right per update
| 13  | Coins        	          | **number**									 | Secret coins/number of usercoins you get on a level*
| 14  | Icon Type				  | **number**									 | The user's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | Glow   					  | **number**									 | 0 or 2
| 16  | Account ID				  | **number**									 | The user's account ID. **This is different than the player ID**
| 42  | Age						  | **string** 									 | How long ago the score was set (e.g. "2 months")