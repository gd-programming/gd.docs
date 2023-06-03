# GLM

GLM (Global Levels Manager) are various Dictionaries that contain every bit of information you need to know about online levels

## GLM_01

GLM_01 is used to store all progress the player has made on official levels

| Key | description |
|:----|:------------|
| kCEK 4 | [level data](resources/client/level.md) |

## GLM_02

GLM_02 was used before the account system to keep track of who owned Specific levels, currently unused

| Key | description |
|:----|:------------|
| k_{Num} | what place the level is placed in your level list |
| kCEK 4 | [level data](resources/client/level.md) |

## GLM_03

GLM_03 is used to store progress the player has done on all online levels

| Key | description |
|:----|:------------|
| kCEK 4 | [level data](resources/client/level.md) |

## GLM_04

GLM_04 contains all the difficulty ratings you have given levels, currently unused

| key | value |
|:----|:------------|
| `{levelID}`| `{diffID}` | 


## GLM_06

GLM_06 contains all of the creators you follow in game

| key | value | description |
|:----|:------|:------------|
| AccountID | 1 | Doing this would place the creators levels in the followed tab |

## GLM_07

GLM_07 contains the levels you played in the last session

| Key | description |
|:----|:------------|
| levelID | accompanied with a 1 |

## GLM_08

GLM_08 are the states of search filters

| Key | Value |
|:----|:------|
| Diff0 | NA |
| Diff1 | Auto |
| Diff2 | Easy |
| Diff3 | Normal |
| Diff4 | Hard |
| Diff5 | Harder |
| Diff6 | Insane |
| Diff7 | Demon |
| Len0 | Tiny |
| Len1 | Short |
| Len2 | Medium |
| Len3 | Long |
| Len4 | XL |
| demon_filter | [Demon ID](/resources/server/level?id=level-structure) |
| uncompleted_filter | bool |
| completed_filter | bool |
| featured_filter | bool |
| song_filter | official SongID |
| original_filter | bool |
| twoP_filter | bool |
| enable_songFilter | bool |
| customsong_filter | songID |
| nostar_filter | bool |
| coin_filter | bool |
| follow_filter | bool |
| friend_filter | bool |
| epic_filter | bool |
| star_filter | bool |

## GLM_09

GLM_09 shows all search filters available

| Key | Value |
|:----|:------|
| Diff0 | NA |
| Diff1 | Auto |
| Diff2 | Easy |
| Diff3 | Normal |
| Diff4 | Hard |
| Diff5 | Harder |
| Diff6 | Insane |
| Diff7 | Demon |
| Len0 | Tiny |
| Len1 | Short |
| Len2 | Medium |
| Len3 | Long |
| Len4 | XL |
| demon_filter | [Demon ID](/resources/server/level?id=level-structure) |
| uncompleted_filter | bool |
| completed_filter | bool |
| featured_filter | bool |
| song_filter | official SongID |
| original_filter | bool |
| twoP_filter | bool |
| enable_songFilter | bool |
| customsong_filter | songID |
| nostar_filter | bool |
| coin_filter | bool |
| follow_filter | bool |
| friend_filter | bool |
| epic_filter | bool |
| star_filter | bool |

## GLM_10

GLM_10 contains every daily level you have ever had progress on

| Key | Description |
|:----|:------------|
| {timelyID} | A dictionary which contains the Encoder key for levels |
| kCEK 4 | The Encoder key which contains [level data](resources/client/level.md)

## GLM_11

GLM_11 is the current Daily ID

## GLM_12

GLM_12 contains likes given to a level

| key | Description |
|:----|:------------|
| `like_{LikeType}_{LevelID}_{like/dislike}_{ID}` | needs investigating more |

## GLM_13

GLM_13 Contains all the levelIDs for levels you have submitted a rating for

## GLM_14

GLM_14 Contains all the levelIDs of levels you have reported

## GLM_15

GLM_15 Contains all the levelIDs of Demons you have rated

## GLM_16

GLM_16 contains every Gauntlet level you have ever had progress on

| Key | Description |
|:----|:------------|
| {timelyID} | A dictionary which contains the Encoder key for levels |
| kCEK 4 | The Encoder key which contains [level data](resources/client/level.md)

## GLM_17

GLM_17 is the current WeeklyID

## GLM_18

GLM_18 is a dictionary of the Saved Levels folder for online levels

| Key | Value |
|:----|:------|
| `{folder ID}` | `{Folder Name}` |

## GLM_19

GLM_19 is a dictionary of the folders for local levels

| Key | Value |
|:----|:------|
| `{folder ID}` | `{Folder Name}` |
