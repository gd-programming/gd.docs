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
