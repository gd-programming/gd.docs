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
| playerColor2| [Icon](enumerations.md)| The ID of the player Color2 |
| playerStreak| [Icon](enumerations.md)| The ID of the player Trail |
| playerDeathEffect| [Icon](enumerations.md)| The ID of the player Death Effect |
| playerIconType| [Icon](enumerations.md)| The Index of the player's IconType |
| playerGlow| Bool| if Glow is enabled or not |
| secretNumber| Integer| the answer to `cod3breaker` in the vault of secrets |
| hasRP       | Bool | If the player is a moderator |
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
| timeOffset| integer | music offset in milliseconds  |

### GLM 

| Key     | Type | description |
| :-------| :--- | :-----------|
| [GLM_01](/resources/client/gamesave/GLM.md#GLM_01) | [Level](/resources/server/level.md)| All Official Levels you have progress on are stored here |
| [GLM_02](/resources/client/gamesave/GLM.md#GLM_02) | [level](/resources/server/level.md) | Uploaded levels - before the account System |
| [GLM_03](/resources/client/gamesave/GLM.md#GLM_03) | [Level](/resources/server/level.md)| online levels played|
| [GLM_04](/resources/client/gamesave/GLM.md#GLM_04) | rating| Shows what levels you have rated. was removed after 1.9 |
| [GLM_06](/resources/client/gamesave/GLM.md#GLM_06) | AccountIDs| The AccountIDs of all creators you follow    |
| [GLM_07](/resources/client/gamesave/GLM.md#GLM_07) | levelID| Levels played in last session |
| [GLM_08](/resources/client/gamesave/GLM.md#GLM_08) | filters | Search Filters States |
| [GLM_09](/resources/client/gamesave/GLM.md#GLM_09) | filters | Search Filters for Online Levels    |
| [GLM_10](/resources/client/gamesave/GLM.md#GLM_10) | [Level](/resources/server/level.md)| Completed dailies |
| [GLM_11](/resources/client/gamesave/GLM.md#GLM_11) | Integer| Current Daily ID |
| [GLM_12](/resources/client/gamesave/GLM.md#GLM_12) | likes | Something Related to likes |
| [GLM_13](/resources/client/gamesave/GLM.md#GLM_13) | levelID | All levels you submitted a rating on |
| [GLM_14](/resources/client/gamesave/GLM.md#GLM_14) | reportedLevels| A dictionary of all levels you have reported|
| [GLM_15](/resources/client/gamesave/GLM.md#GLM_15) | levelID | all Demon levels you have submitted a rating for |
| [GLM_16](/resources/client/gamesave/GLM.md#GLM_16) | [Level](/resources/server/level.md)| All the levels found in the Gauntlets that you have progress on are stored in here |
| [GLM_17](/resources/client/gamesave/GLM.md#GLM_17) | integer| Current Weekly ID |
| [GLM_18](/resources/client/gamesave/GLM.md#GLM_18) | Folder | The Folder Names for saved levels |
| [GLM_19](/resources/client/gamesave/GLM.md#GLM_19) | Folder | The Folder names for Local Levels |

### GS

| Key     | Type |
| :-------| :--- |
| [GS_value](/resources/client/gamesave/GS_Value?id=gs-value-structure)| Player Stats  |
| [GS_completed](/resources/client/gamesave/GS_Value?id=gs_completed)| Completed Levels  |
| [GS_3](/resources/client/gamesave/GS_Value?id=gs_3)| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| [GS_4](/resources/client/gamesave/GS_Value?id=gs_4)| Completed levels with coins `{levelID}_{number of coins aquired from level}` |
| [GS_5](/resources/client/gamesave/GS_Value?id=gs_5)| Completed Mappacks + rewarded stars `<k>pack_{MappackID}</k><s>{Stars rewarded}</s>` |
| [GS_6](/resources/client/gamesave/GS_Value?id=gs_6)| all Purchased Icons/Colours in the shops `<k>{ListingID}</k><s>{Price}</s>` |
| [GS_7](/resources/client/gamesave/GS_Value?id=gs_7)| level progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_8](/resources/client/gamesave/GS_Value?id=gs_8)| Unused |
| [GS_9](/resources/client/gamesave/GS_Value?id=gs_9)| How many stars downloaded levels give `<k>{levelID}</k><s>{rewardedStars}</s>` |
| [GS_10](/resources/client/gamesave/GS_Value?id=gs_10)| Offical level progress `<k>{ID}</k><s>{percentage}</s>` |
| [GS_11](/resources/client/gamesave/GS_Value?id=gs_11)| All rewards gained from Daily Chests |
| [GS_12](/resources/client/gamesave/GS_Value?id=gs_12)| Contains [Quests](resources/client/gamesave/quests.md)|
| [GS_14](/resources/client/gamesave/GS_Value#GS_14)| Daily/Challenges rewards |
| [GS_15](/resources/client/gamesave/GS_Value?id=gs_15)| Contains Upcoming [Quests](resources/client/gamesave/quests.md)|
| [GS_16](/resources/client/gamesave/GS_Value?id=gs_16)| Daily/Weekly level progress `<k>{Daily/WeeklyID}</k><s>{percentage}</s>` |
| [GS_17](/resources/client/gamesave/GS_Value?id=gs_17)| Daily/Weekly Stars `<k>{Daily/WeeklyID}</k><s>{Stars}</s>` |
| [GS_18](/resources/client/gamesave/GS_Value?id=gs_18)| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_19](/resources/client/gamesave/GS_Value#GS_19)| All the Rewards from unlocked chests in the treasure room |
| [GS_20](/resources/client/gamesave/GS_Value?id=gs_20)| Demon Keys |
| [GS_21](/resources/client/gamesave/GS_Value#GS_21)| All rewards for Completed Gauntlets + rewards for Demon quest/social medias   |
| [GS_22](/resources/client/gamesave/GS_Value?id=gs_22)| Rewards from Geometry Dash world |
| [GS_23](/resources/client/gamesave/GS_Value?id=gs_23)| Gauntlet Level Progress `<k>{levelID}</k><s>{percentage}</s>` |
| [GS_24](/resources/client/gamesave/GS_Value?id=gs_24)| Daily/Weekly Percentage |
| [GS_25](/resources/client/gamesave/GS_Value#GS_25)| All the rewards from completed weekly Demons |

### GJA

| Key | Value|
| :-- |:-----------|
| GJA_001 | Username|
| GJA_002 | Password (in plaintext)|
| GJA_003 | AccountID |

#### GDL22 GJA
| Key | Value|
| :-- |:-----------|
| GJA_004 | SessionID |

### LLM

| Key | Value|
| :-- |:-----------|
| LLM_01 | Local Levels |
| LLM_02 | Hardcoded to `binaryVersion`|

### MDLM

| Key | Value |
|:----|:------|
| MDLM_001 | Dictionary of SongInfoObject |
| MDLM_002 | Song Priority of a song |

### KBM

| Key | Value |
|:----|:------|
| KBM_001 | Keybindings |
| KBM_002 | Keybindings |
