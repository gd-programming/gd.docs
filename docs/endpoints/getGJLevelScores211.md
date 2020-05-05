# getGJLevelScores211.php

## Parameters

**gameVersion** - The version of the game

**binaryVersion** - The binary verion of the game

**gdw** -- is geometry dash world

**accountID** -The encoded password for the account

**gjp** - The password encoded of the account

**levelID** - The ID of the level

**percent** - Current highscore

**secret** - Wmfd2893gb7

**type** - 0: friends, 1: top, 2: week

**s1** - attempts + 8354

**s2** - jumps + 3991

**s3** - seconds + 4085

**s4** - 1482 * 2 + (jumps + 3991) * (percentage + 8354) + ((seconds + 4085) ^ 2) - 50028039

**s4** - is 1482 if jumps, percentage and seconds are 0

**s5** - random number (somewhere in range [1000, 10000])

**s6** - unknown

**s7** - random seed (rs)

**s8** - attempts

**s9** - coins + 5819

**s10** - timely ID

[**chk**](https://github.com/gd-programming/gddocs/blob/master/docs/topics/encryption/chk.md) - AccountID + LevelID + Percentage + Jumps + Attempts + Seed + Best Differences + 1 + Coins + TimelyID + rs + yPg6pUrtWn0J
