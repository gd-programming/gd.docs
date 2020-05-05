# Client Level Resource

## Level
A level is a playable object in Geometry Dash, namely coming with data that explains on what it is, and the string that the client interprets, known as a level string. It is stored in [XML](https://en.wikipedia.org/wiki/XML) format, and each level entry is a dictionary, containing key/value pairs denoting the level's properties.

### Level Data
**Level Structure**

| Key | Name/Value                      | Type                                                             | Description                                                                      |
|:----|:--------------------------------|:-----------------------------------------------------------------|:---------------------------------------------------------------------------------|
| k1  | Level ID                        | **integer**                                                      | the id of the level                                                              |
| k2  | Level Name                      | **string**                                                       | the name of the level                                                            |
| k3  | Description                     | **string**                                                       | the level description, encoded in [base64](https://en.wikipedia.org/wiki/Base64) |
| k4  | Inner Level String              | **[inner level string](level-components/inner-level-string.md)** | the inner level string, or the playable level                                    |
| k5  | Creator                         | **[user](./user.md).name**                                       | the name of the level creator                                                    |
| k6  | Creator's User ID               | **integer**                                                      | the user id of the level creator                                                 |
| k8  | Official Song ID                | **[Audio Track](/reference?id=audio-track)**                     | the official Song ID (if used)                                                   |
| k10 | Difficulty                      | **[Difficulty](enumerations.md)**                                | the level difficulty (including Demon ratings)                                   |
| k11 | Downloads                       | **integer**                                                      | the amount of times the level's been downloaded                                  |
| k14 | Verified                        | **bool**                                                         | whether the level is verified or not                                             |
| k15 | Uploaded                        | **bool**                                                         | whether the level is uploaded to the server or not                               |
| k16 | Level Version                   | **integer**                                                      | the version of the level                                                         |
| k18 | Attempts                        | **integer**                                                      | the number of attempts that are made to this level                               |
| k19 | Normal Mode Percentage          | **integer**                                                      | the max percentage that has been achieved in normal mode in this level           |
| k20 | Practice Mode Percentage        | **integer**                                                      | the max percentage that has been achieved in practice mode in this level         |
| k22 | Like Rating                     | **integer**                                                      | the level's like rating (`likes - dislikes`)                                     |
| k23 | Length                          | **[Length](enumerations.md)**                                    | the level's length                                                               |
| k26 | Stars                           | **integer**                                                      | the stars the level is worth                                                     |
| k41 | Password                        | **integer**                                                      | the [password]() <!-- local gamesave password topic link --> set for the level   |
| k45 | Custom Song ID                  | **integer**                                                      | the custom Song ID (if used)                                                     |
| k46 | Level Revision                  | **integer**                                                      | the revision of the level                                                        |
| k48 | Object Count                    | **integer**                                                      | the [object count]() of the level                                                |
| k61 | First Coin Acquired             | **bool**                                                         | whether the first coin is acquired during verification                           |
| k62 | Second Coin Acquired            | **bool**                                                         | whether the second coin is acquired during verification                          |
| k63 | Third Coin Acquired             | **bool**                                                         | whether the third coin is acquired during verification                           |
| k66 | Requested Stars                 | **integer**                                                      | the requested stars during publication of the level                              |
| k71 | Orb Reward Percentage           | **integer**                                                      | the percentage up until the orb reward has been granted                          |
| k79 | Unlisted                        | **bool**                                                         | whether the level is to be marked as unlisted or not during publication          |
| k80 | Seconds Spent Editing           | **integer**                                                      | the number of seconds spent editing the level                                    |
| k84 | Level Folder                    | **integer**                                                      | the folder in which the level belongs (0 represents no folder)                   |
| k88 | Percentage Added Per "New Best" | **string**                                                       | how many percentages added each time a "new best" got, joined with `,`           |

***Current Unknown Values***

| Key | Type        | Info                                                     |
|:----|:------------|:---------------------------------------------------------|
| k21 | **integer** | has always appeared as 2                                 |
| k33 | **unknown** | none                                                     |
| k50 | **integer** | appears to be the current [binary version]() of the game |
| k67 | **unknown** | has to do with playing the level                         |
| k81 | **unknown** | none                                                     |

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
