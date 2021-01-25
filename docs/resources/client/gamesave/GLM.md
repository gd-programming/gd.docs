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

| key | description |
|:----|:------------|
|     | i need to collect a sample i forgot xd            | 

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