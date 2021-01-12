# Client Gamesave Resource

## CCGameManager.dat

Your CCGameManager.dat File contains a lot of information regarding your account. it is encrypted using [Xor](/topics/encryption/xor.md) with a key of 11 / 0xB, [url-Safe Base64](/topics/encryption/base64.md) and [Gzip](/topics/encryption/zip.md) and is in the [XML](https://en.wikipedia.org/wiki/XML) format

## Gamesave Key structure

| Key     | Type | description |
| :-------| :--- | :-----------|
| bgVolume| Float| any value between 0 - 1 |
| sfxVolume| Float| any value between 0 - 1 |
| playerUDID| [UDID](/topics/encryption/id?id=udid)| The UDID of the user |
| playerName| String| The In-game Name of the player|
| playerUserID| Integer| The userID of the player|
| playerFrame| [Icon](enumerations.md)| The ID of the player Cube |
| playerShip| [Icon](enumerations.md)| The ID of the player Ship |
| playerBall| [Icon](enumerations.md)| The ID of the player Ball |
| playerBird| [Icon](enumerations.md)| The ID of the player UFO |
| playerDart| [Icon](enumerations.md)| The ID of the player Wave |
| playerRobot| [Icon](enumerations.md)| The ID of the player Robot |
| playerSpider| [Icon](enumerations.md)| The ID of the player Spider |
| playerColor| [Icon](enumerations.md)| The ID of the player Color |
| playerColor| [Icon](enumerations.md)| The ID of the player Color2 |
| playerStreak| [Icon](enumerations.md)| The ID of the player Trail |
| playerDeathEffect| [Icon](enumerations.md)| The ID of the player Death Effect |
| playerIconType| [Icon](enumerations.md)| The Index of the player's IconType |
| playerGlow| Bool| if Glow is enabled or not |
| secretNumber| Integer| the answer to `cod3breaker` in the vault of secrets |
| customObjectDict| [levelData](/resources/client/level-components/level-object.md) | contains object data of custom objects saved|
| reportedAchievements| [Achievements](/resources/client/gamesave/achievement.md) | contains a dictonary of all reported achievements on your account|

## GLM

GLM contains all the information the game needs for all online levels. GLM likely stands for `Global Levels Manager` 

## GLM Structure
| Key     | Type | description |
| :-------| :--- | :-----------|
| GLM_01 | [Level](/resources/server/level.md)| All Official Levels you have progress on are stored here |
| GLM_02 | [level](/resources/server/level.md) | Uploaded levels - before the account System |
| GLM_03 | [Level](/resources/server/level.md)| online levels played|
| GLM_04 | rating| Shows what levels you have rated. was removed after 1.9 |
| GLM_06 | AccountIDs| The AccountIDs of all creators you follow    |
| GLM_07 | levelID| Levels played in last session |
| GLM_08 | filters | Search Filters States    |
| GLM_09 | filters | Search Filters for Online Levels    |
| GLM_10 | [Level](/resources/server/level.md)| daily? |
| GLM_11 | Integer| Current Daily ID |
| GLM_12 | likes | Something Related to likes |
| GLM_13 | levelID | All levels you submitted a rating on |
| GLM_14 | reportedLevels| A dictionary of all levels you have reported|
| GLM_15 | levelID | all Demon levels you have submitted a rating for |
| GLM_16 | [Level](/resources/server/level.md)| All the levels found in the Gauntlets that you have progress on are stored in here |
| GLM_17 | integer| Current Weekly ID |
| GLM_18 | Folder | The Folder Names for saved levels |
| GLM_19 | Folder | The Folder names for Local Levels |


## GS Values

## GS Key Structure
| Key     | description |
| :-------|:-----------|
| GS_value| [Player Stats](resources/client/gamesave/playerStats.md)  |
| GS_completed| Completed Levels  |
| GS_3| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| GS_4| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| GS_5| Completed Mappacks + rewarded stars `<k>pack_{MappackID}</k><s>{Stars rewarded}</s>` |
| GS_6| Shope items |
| GS_7| level progress `<k>{levelID}</k><s>{percentage}</s>` |
| GS_8| Unknown |
| GS_9| How many stars downloaded levels give `<k>{levelID}</k><s>{rewardedStars}</s>` |
| GS_10| Offical level progress `<k>{ID}</k><s>{percentage}</s>` |
| GS_11| Unknown |
| GS_12| Contains [Quests](resources/client/gamesave/quests.md)|
| GS_14| Unknown |
| GS_15| Contains Upcoming [Quests](resources/client/gamesave/quests.md)|
| GS_16| Daily/Weekly level progress `<k>{Daily/WeeklyID}</k><s>{percentage}</s>` |
| GS_17| Daily/Weekly Stars `<k>{Daily/WeeklyID}</k><s>{Stars}</s>` |
| GS_18| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| GS_19| Unknown |
| GS_20| a number |
| GS_21| Unknown |
| GS_22| Unknown |
| GS_23| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| GS_24| might be related to Dailys/weeklys |
| GS_25| Unknown |

## GV Values

Game Values for the ingame check boxes

## GV Structure

| Key | Value|
| :-- |:-----------|
| gv_0001 | Follow PLayer (editor) |
| gv_0002 | play Music (editor) |
| gv_0003 | Swipe (editor) |
| gv_0004 | Free Move (editor) |
| gv_0007 | Toggle rotate (editor) |
| gv_0008 | Toggle snap (editor) |
| gv_0009 | Ignore Damage (editor) |

## kCEK key structure

| Key | Name/Value                     | description |
| :-- | :----------------------------- | :-----------|
| 4   | [Levels](resources/client/level.md) | Contains Keys for levels you played in the past |
| 6   | [Songs](resources/client/gamesave/song.md) | Contains Keys for songs downloaded |
| 7   | [Quests](resources/client/gamesave/quests.md) | Contains Keys that the game uses to show quests when offline |
| 8   | unknown | object that holds kCEK 9 |
| 9   | unknown | Object |

## GJA

| Key | Value|
| :-- |:-----------|
| GJA_001 | Username|
| GJA_002 | Password (in plaintext)|
| GJA_003 | AccountID|

## LLM

| Key | Value|
| :-- |:-----------|
| LLM_01 | Local Levels |
| LLM_02 | Binary Version|