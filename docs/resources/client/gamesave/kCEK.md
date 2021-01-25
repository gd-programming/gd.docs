# kCEK

kCEK are dictionaries that hold certain information about your game save. Each kCEK Type is identified by its integer Value `[4, 6, 7, 8, 9]`

## kCEK 4 Structure

`GJGameLevel` is a dictionary that contains information about every level you have played

| key | Value |
|:----|:------|
| kCEK 4 | [level data](resources/client/level.md) |


## kCEK 6 Structure

`SongInfoObject` is a dictionary that contains song info of all downloaded songs

| key | Value |
|:----|:------|
| kCEK 6 | [Song Data](resources/server/song.md) |


## kCEK 7 Structure

`GJChallengeItem` is a dictionary that contains the status of each active quest

| key | Value |
|:----|:------|
| kCEK 7 | [Challenge Data](resources/client/gamesave/quests.md)


## kCEK 8 and 9 Structure

`GJRewardItem` is a dictionary which contains `GJRewardObject` 

| key | encoder Key | use/description |
|:----|:------------|:------------|
| 1 | 8 | Depends on the [GS_Value](/resources/client/gamesave/GS_Value) it is inside of |
| 2 | 8 | Depends on the [GS_Value](/resources/client/gamesave/GS_Value) it is inside of |
| 3 | 8 | GJRewardObject |
| 1 | 9 | item type |
| 2 | 9 | likely Custom Item ID |
| 3 | 9 | reward amount |
| 4 | 9 | unknown |

### ItemIDs

| key | value |
|:----|:------|
| 1 | Fire Shard |
| 2 | Ice Shard |
| 3 | Poison Shard |
| 4 | Shadow Shard |
| 5 | Lava Shard |
| 6 | Demon Key |
| 7 | Orbs |
| 8 | Diamonds |
| 9 | Custom Object (shares the same ID for Demon guardian key, icons and colours) |
