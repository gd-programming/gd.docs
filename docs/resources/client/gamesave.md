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
| [valueKeeper](/resources/client/gamesave/valueKeeper.md)| Dictionary | Dictionary filled with GV values you have enabled |
| unlockValueKeeper | Dictionary | Dictionary of Unlockable GV values|
| customObjectDict| Dictionary | Dictionary of object data of custom objects saved|
| reportedAchievements| Dictionary | contains a dictonary of all reported achievements on your account|
| showSongMarkers| Bool | if showSongMarkers is enabled |
| showProgressBar| Bool | if showProgressBar is enabled |
| clickedGarage| Bool | if Garage has been clicked |
| clickedEditor| Bool | if Editor has been clicked |
| clickedPractice| Bool | if Practice mode button has been clicked |
| showedEditorGuide| Bool | if EditorGuide has been clicked |
| showedLowDetailDialog| Bool | if low detail mode has been has been clicked |
| bootups| integer | The ammount of times you have opened Geometry Dash |
| hasRatedGame| Bool | if you have rated the game |
| binaryVersion| integer | The Games Binary Version |
| resolution| integer | The games resolution?  |
| texQuality| integer | how high the text quality is  |



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
| GLM_08 | filters | Search Filters States |
| GLM_09 | filters | Search Filters for Online Levels    |
| GLM_10 | [Level](/resources/server/level.md)| Completed dailies |
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

unfinished

## GS Key Structure
| Key     | description |
| :-------|:-----------|
| GS_value| [Player Stats](resources/client/gamesave/playerStats.md)  |
| GS_completed| Completed Levels  |
| GS_3| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| GS_4| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| GS_5| Completed Mappacks + rewarded stars `<k>pack_{MappackID}</k><s>{Stars rewarded}</s>` |
| GS_6| all Purchased Icons/Colours in the shops `<k>{ListingID}</k><s>{Price}</s>` |
| GS_7| level progress `<k>{levelID}</k><s>{percentage}</s>` |
| GS_8| Unknown |
| GS_9| How many stars downloaded levels give `<k>{levelID}</k><s>{rewardedStars}</s>` |
| GS_10| Offical level progress `<k>{ID}</k><s>{percentage}</s>` |
| GS_11| Something related to rewards (investigate) |
| GS_12| Contains [Quests](resources/client/gamesave/quests.md)|
| GS_14| Unknown |
| GS_15| Contains Upcoming [Quests](resources/client/gamesave/quests.md)|
| GS_16| Daily/Weekly level progress `<k>{Daily/WeeklyID}</k><s>{percentage}</s>` |
| GS_17| Daily/Weekly Stars `<k>{Daily/WeeklyID}</k><s>{Stars}</s>` |
| GS_18| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| GS_19| something related to rewards (investigate) |
| GS_20| a number |
| GS_21| something related to rewards (investigate) |
| GS_22| something related to rewards (investigate) |
| GS_23| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| GS_24| might be related to Dailys/weeklys |
| GS_25| something related to rewards (investigate) |

## GV Values

Game Variables for the ingame check boxes

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
| gv_0010 | flip2PlayerControls |
| gv_0011 | alwaysLimitControls |
| gv_0013 | increaseMaxUndoRedo |
| gv_0014 | disableExplosionShake |
| gv_0015 | flipPauseButton |
| gv_0018 | noSongLimit |
| gv_0019 | songsInMemory |
| gv_0022 | higherAudioQuality |
| gv_0023 | smoothFix |
| gv_0024 | showCursor In-Game |
| gv_0025 | fullscreenMode |
| gv_0026 | autoRetry |
| gv_0027 | autoCheckpoints |
| gv_0028 | disableThumbstick |
| gv_0029 | showedOptionsText |
| gv_0030 | vsyncEnabled |
| gv_0031 | `cocos2d::CCEGLView::sharedOpenGLView()`? |
| gv_0032 | forceTimerEnabled (got no idea how cos got to that??)|
| gv_0033 | ChangeSongPath |
| gv_0034 | GameCenterEnabled |
| gv_0036 | PreviewMode (editor) |
| gv_0037| showGround (editor) |
| gv_0038 | showGrid (editor) |
| gv_0039 | gridOnTop (editor) |
| gv_0040 | showPercentage |
| gv_0041 | showObjectInfo (editor) |
| gv_0042 | increaseMaxLevels |
| gv_0043 | effectLinesEnabled (editor) |


## UGV Values

Unlock Game Variables for the ingame events

## UGV Structure

| Key | Value|
| :-- |:-----------|
| ugv_1 | Unlocked the challenge |
| ugv_2 | Gubflub hint |
| ugv_3 | Gubflub hint 2 |
| ugv_4 | The Challenge completed |
| ugv_5 | Treasure Room unlocked |
| ugv_6 | Chamber of Time unlocked |
| ugv_7 | Chamber of Time Discovered |
| ugv_8 | shown Master Emblem |
| ugv_9 | GateKeeper Dialog |
| ugv_10 | Scratch Dialog |
| ugv_11 | Secret Shop unlocked |
| ugv_12 | Spoken to Demon Guardian |
| ugv_13 | Demon Freed |
| ugv_14 | Has Demon Key 1 |
| ugv_15 | Has Demon Key 2 |
| ugv_16 | Has Demon Key 3 |
| ugv_17 | Shop Keeper first dialog (500 orbs) |
| ugv_18 | online levels unlocked in GDW |
| ugv_19 | Demon Discovered in Demon Room |
| ugv_20 | Community shop unlocked |
| ugv_21 | PotBor dialog |
| ugv_22 | YouTube Chest unlocked |
| ugv_23 | FaceBook Chest unlocked |
| ugv_24 | Twitter Chest unlocked |

### GDL22 keys

| Key | Value|
| :-- |:-----------|
| ugv_25 | FireBird GateKeeper |
| ugv_26 | Twitch Chest Unlocked |


## kCEK key structure

| Key | Name/Value                     | description |
| :-- | :----------------------------- | :-----------|
| 4   | [GJGameLevel](resources/client/level.md) | Contains Keys for levels you played in the past |
| 6   | [SongInfoObject](resources/client/gamesave/song.md) | Contains Keys for songs downloaded |
| 7   | [GJChallengeItem](resources/client/gamesave/quests.md) | Contains Keys that the game uses to show quests when offline |
| 8   | [GJRewardItem](resources/client/gamesave/kCEK.md) | object that holds `GJRewardObject` |
| 9   | [GJRewardObject](resources/client/gamesave/kCEK.md) | contains data for Rewards |

## GJA

| Key | Value|
| :-- |:-----------|
| GJA_001 | Username|
| GJA_002 | Password (in plaintext)|
| GJA_003 | AccountID |
| GJA_004 | Most Likely SessionID (not confirmed) |

## LLM

| Key | Value|
| :-- |:-----------|
| LLM_01 | Local Levels |
| LLM_02 | Hardcoded to `binaryVersion`|

## MDLM

| Key | Value |
|:----|:------|
| MDLM_001 | Dictionary of SongInfoObject |
| MDLM_002 | Song Priority of a song |