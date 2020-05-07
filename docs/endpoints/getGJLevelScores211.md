# getGJLevelScores211.php

Upload user level record.

## Parameters

**gameVersion** - The version of the game

**binaryVersion** - The binary verion of the game

**gdw** -- is geometry dash world

**accountID** - The ID of the account

**gjp** - The encoded password for the account

**levelID** - The ID of the level

**percent** - Current highscore

**secret** - Wmfd2893gb7

**type** - 0: friends, 1: top, 2: week

**s1** - attempts + 8354

**s2** - jumps + 3991

**s3** - seconds + 4085

**s4** - 1482 * (has_played + 1) + (jumps + 3991) * (percentage + 8354) + ((seconds + 4085) ^ 2) - 50028039  
**Warning: ** ```^``` isn't XOR, it's pow.

**Warning: ** ^ in here isn't XOR, in code is pow()

**s4** - is 1482 if jumps, percentage and seconds are 0

**s5** - random number (somewhere in range [1000, 10000])

**s6** - Best Differences encode by xor cipher (key "41274") and base64 encode

**s7** - random seed (rs)

**s8** - attempts

**s9** - coins + 5819

**s10** - timely ID

[**chk**](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/chk.md?id=level-leaderboard) - AccountID + LevelID + Percentage + Jumps + Attempts + Seed + Best Differences + 1 + Coins + TimelyID + rs + yPg6pUrtWn0J

Response

```
1:MetroZero:2:118396860:9:16:10:12:11:12:14:3:15:2:16:13587041:3:100:6:1:13:3:42:2 hours|1:exerity:2:4035517:9:14:10:23:11:3:14:0:15:2:16:95026:3:100:6:2:13:3:42:2 hours|1:ArToS2:2:10084043:9:35:10:41:11:12:14:0:15:2:16:2856566:3:100:6:3:13:3:42:2 hours|1:stalkermaster:2:16942521:9:14:10:7:11:3:14:6:15:2:16:5029315:3:100:6:4:13:3:42:2 hours|1:Himawari:2:124738131:9:123:10:12:11:3:14:0:15:2:16:12217818:3:100:6:5:13:3:42:2 hours|1:KaloNoodles:2:40936086:9:102:10:12:11:16:14:0:15:2:16:7415370:3:100:6:6:13:3:42:2 hours|1:tornado923:2:13658530:9:97:10:3:11:16:14:0:15:0:16:5853247:3:100:6:7:13:3:42:2 hours|1:HaveSomeSoup:2:39574573:9:40:10:41:11:12:14:0:15:2:16:7340643:3:100:6:8:13:3:42:2 hours|1:mbed:2:7381956:9:110:10:3:11:12:14:0:15:0:16:1403996:3:100:6:9:13:3:42:2 hours|1:Neo2006:2:54043189:9:100:10:6:11:12:14:0:15:2:16:7749480:3:100:6:10:13:3:42:2 hours|1:Alex M:2:9774198:9:129:10:11:11:5:14:0:15:2:16:1636292:3:100:6:11:13:3:42:2 hours|1:Presta:2:5807651:9:8:10:12:11:12:14:0:15:0:16:540196:3:100:6:12:13:3:42:2 hours|1:BurgerLord69420:2:116467363:9:28:10:33:11:12:14:0:15:2:16:11482412:3:100:6:13:13:3:42:2 hours|1:Aquaaz:2:40142810:9:10:10:23:11:1:14:6:15:2:16:7206244:3:100:6:14:13:3:42:2 hours|1:Lucasgamer628:2:96825904:9:11:10:11:11:17:14:1:15:2:16:11154079:3:100:6:15:13:3:42:2 hours|1:ultramegastar:2:119998967:9:1:10:12:11:0:14:0:15:2:16:11867664:3:100:6:16:13:3:42:2 hours|1:CarlanchoxD:2:45290570:9:25:10:5:11:3:14:0:15:0:16:7258221:3:100:6:17:13:3:42:2 hours|1:lucasj1098:2:85317376:9:98:10:9:11:9:14:0:15:0:16:9373003:3:100:6:18:13:3:42:2 hours|1:TheNewLobitto:2:130746419:9:127:10:12:11:3:14:0:15:2:16:13535279:3:100:6:19:13:3:42:2 hours|1:NOVAlroy00:2:109002111:9:16:10:3:11:12:14:6:15:2:16:11248679:3:100:6:20:13:3:42:2 hours|1:DeathHogz:2:1396933:9:57:10:37:11:12:14:0:15:2:16:104119:3:100:6:21:13:3:42:2 hours|1:TotallyJinx:2:110089604:9:28:10:12:11:15:14:0:15:0:16:11569635:3:100:6:22:13:3:42:2 hours|1:DUGDK:2:99251741:9:140:10:12:11:12:14:0:15:0:16:13356296:3:100:6:23:13:3:42:2 hours|1:Johner:2:13672403:9:59:10:11:11:18:14:0:15:2:16:3419351:3:100:6:24:13:3:42:2 hours|1:FretMarl:2:127343090:9:98:10:25:11:12:14:0:15:0:16:13334091:3:100:6:25:13:3:42:2 hours
```
