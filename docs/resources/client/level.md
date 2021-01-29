# Client Level Resource

## Level
A level is a playable object in Geometry Dash, namely coming with data that explains on what it is, and the string that the client interprets, known as a level string. It is stored in [XML](https://en.wikipedia.org/wiki/XML) format, and each level entry is a dictionary, containing key/value pairs denoting the level's properties.

### Level Data
**Level Structure**

| Key | Name/Value                     | Type                                                             | Description                                                                      |
| :-- | :----------------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| k1  | Level ID                       | **integer**                                                      | the id of the level                                                              |
| k2  | Level Name                     | **string**                                                       | the name of the level                                                            |
| k3  | Description                    | **string**                                                       | the level description, encoded in [base64](https://en.wikipedia.org/wiki/Base64) |
| k4  | Inner Level String             | **[inner level string](level-components/inner-level-string.md)** | the inner level string, or the playable level                                    |
| k5  | Creator                        | **[user](./user.md)Name**                                        | the name of the level creator                                                    |
| k6  | UserID                         | **integer**                                                      | The UserID of the level Creator
| k7  | level difficulty               | **integer**                                                      | the difficulty the level has                                                     |
| k8  | Official Song ID               | **[Audio Track](/reference?id=audio-track)**                     | the official Song ID (if used)                                                   |
| k9  | Rating                         | **integer**                                                      | The rating a level has                                                           |
| k10 | RatingSum                      | **integer**                                                      | the sum of all the ratings a level has                                           |
| k11 | Downloads                      | **integer**                                                      | the amount of times the level's been downloaded                                  |
| k12 | setCompletes                   | **integer**                                                      | level completions for that particular level
| k13 | isEditable                     | **Bool**                                                         | used to stop people editing online and Official levels                           |
| k14 | Verified                       | **bool**                                                         | whether the level is verified or not                                             |
| k15 | Uploaded                       | **bool**                                                         | whether the level is uploaded to the server or not                               |
| k16 | Level Version                  | **integer**                                                      | the version of the level                                                         |
| k17 | Game Version                   | **integer**                                                      | The Games Version
| k18 | Attempts                       | **integer**                                                      | the number of attempts that are made to this level                               |
| k19 | Normal Mode Percentage         | **integer**                                                      | the max percentage that has been achieved in normal mode in this level           |
| k20 | Practice Mode Percentage       | **integer**                                                      | the max percentage that has been achieved in practice mode in this level         |
| k21 | levelType                      | **Bool**                                                         | The Level Type (1 = Official, 2 = Local, 3 = Saved, 4 = Online)                  |
| k22 | Like Rating                    | **integer**                                                      | the level's like rating (`likes - dislikes`)                                     |
| k23 | Length                         | **[Length](enumerations.md)**                                    | the level's length                                                               |
| k25 | isDemon                        | **Bool**                                                         | if the level is demon or not
| k26 | Stars                          | **integer**                                                      | the stars the level is worth                                                     |
| k33 | Auto                           | **Bool**                                                         | If the level is auto                                                             |
| k34 | Replay Data                    | **[Gziped String]()**                                            | Contains a Gzipped String which contains replay data for levels                  |
| k35 | Demon                          | **[Demon](#)**                                                   | Contains the value for what type of demon the level is
| k41 | Password                       | **integer**                                                      | the [password]() <!-- local gamesave password topic link --> set for the level   |
| k42 | Level ID                       | **integer**                                                      | The ID of the level when its uploaded                                            |
| k43 | Two-Player Mode                | **Bool**                                                         | If the level is 2 player mode                                                    |
| k45 | Custom Song ID                 | **integer**                                                      | the custom Song ID (if used)                                                     |
| k46 | Level Revision                 | **integer**                                                      | the revision of the level                                                        |
| k47 | hasBeenModified                | **Bool**                                                         | if the level has been modified from outside the GD editor                        |
| k48 | Object Count                   | **integer**                                                      | the [object count]() of the level                                                |
| k50 | Binary Version                 | **integer**                                                      | [hardcoded](https://media.discordapp.net/attachments/801840133355470888/804428668192948245/unknown.png) to binary Version  |
| k61 | First Coin Acquired            | **bool**                                                         | whether the first coin is acquired during verification                           |
| k62 | Second Coin Acquired           | **bool**                                                         | whether the second coin is acquired during verification                          |
| k63 | Third Coin Acquired            | **bool**                                                         | whether the third coin is acquired during verification                           |
| k64 | Total Coins                    | **Integer**                                                      | How many Coins the level has                                                     |
| k66 | Requested Stars                | **integer**                                                      | the requested stars during publication of the level                              |
| k67 | Extra String                   | **[Extra String](#)**                                            | Contains batch information about levels for when `high capacity mode` is enabled   |
| k71 | Orb Reward Percentage          | **integer**                                                      | the percentage up until the orb reward has been granted                          |
| k72 | hasLowDetailMode               | **Bool**                                                         | If a level has LDM                                                               |
| k73 | toggleLDM                      | **Bool**                                                         | If a LDM is Enabled                                                              |
| k79 | Unlisted                       | **bool**                                                         | whether the level is to be marked as unlisted or not during publication          |
| k80 | Seconds Spent Editing          | **integer**                                                      | the number of seconds spent editing the level                                    |
| k81 | Seconds spent Editing (copies) | **integer**                                                      | the number of seconds spent editing the level (Previous copies)                  |
| k84 | Level Folder                   | **integer**                                                      | the folder in which the level belongs (0 represents no folder)                   |
| k85 | Clicks                         | **integer**                                                      | clicks done on a level                                                           |
| k86 | Player Time                    | **integer**                                                      | the amount of time on a players best attempt                                     |
| k87 | levelScore Seed                | **[LevelScoreSeed](/topics/encryption/seeds/levelScore.md)**     | Contains info to verify the integrity of levelScores                             |
| k88 | Level Progress                 | **integer**                                                      | Contains a list of high score differences seperated by a `,`                     |
| k90 | Verify percentage              | **integer**                                                      | Contains the percentage for levels you are trying to verify                      |

***Current Unknown Values***

| Key | Type        | Info                                                     |
| :-- | :---------- | :------------------------------------------------------- |
| k83 |             |                                                          |
| k69 | **Bool**    | clicked play?                                            |
| k89 | **Bool**    | always true                                              |


**Last Editor State Key/Value Pairs**
The last editor state key/value pairs contain a few values that indicate the last state of the editor before exiting the editor on that level.

| Key | Name/Value               | Type           | Description                              |
|:----|:-------------------------|:---------------|:-----------------------------------------|
| kI1 | Editor Camera X Position | **float**      | the X position of the editor camera      |
| kI2 | Editor Camera Y Position | **float**      | the Y position of the editor camera      |
| kI3 | Editor Camera Zoom       | **float**      | the zoom level of the editor camera      |
| kI4 | Build Tab Page           | **integer**    | the displayed page within the build tab  |
| kI5 | Build Tab                | **integer**    | the selected build tab                   |
| kI6 | Build Tab Pages          | **dictionary** | the last browsed pages of each build tab |
| kI7 | Editor Layer             | **float**      | the zoom level of the editor camera      |

Note that the build tab pages do not depend on the user's button row/column settings. That means, if the settings are changed, the build tab pages will not reflect the correct changes. For example:

The build tab page is 5, and the button settings are 6x2 (default), meaning the currently shown elements range from `5 * 6 * 2` = 60 to `6 * 6 * 2 - 1` = 71 (zero-indexed). If the user changes the button settings to 12x3, the tab page will remain as 5, showing elements ranging from `5 * 12 * 3` = 180 to `6 * 12 * 3 - 1` = 215 (zero-indexed).
