# GS Value

GS values contain Information regarding certain aspects of the game

## GS Value structure

| key | value |
|:----|:------|
| 1 | Jumps |
| 2 | Attempts |
| 3 | Total Completed Official Levels |
| 4 | Total Completed Online Levels |
| 5 | Completed Demons |
| 6 | Total Stars |
| 7 | Total Compelted MapPacks |
| 8 | Secret Coins Collected |
| 9 | Destroyed Players on the menu |
| 10 | Total Liked/Disliked levels |
| 11 | Total Rated Levels |
| 12 | Secret Coins collected |
| 13 | Total Diamonds |
| 14 | current orbs |
| 15 | Completed Daily Levels |
| 16 | Fire Shards |
| 17 | Ice Shards |
| 18 | Poison Shards |
| 19 | Shadow Shards |
| 20 | Lava Shards |
| 21 | Bonus Shards |
| 22 | Total Orbs Collected |
| Unique_{LevelID}_{Coins Collected} | The Coins Collected on the Official Levels

## GS_completed

all completed levels

| Key | Value |
|:----|:------|
| `n_{levelID}`| beaten in normal Mode |
| `c_{levelID}` | Completed level|
| `d_{levelID}` completed daily
| `g_{levelID}` completed gauntlet
| `star_{levelID}` | Collected Stars|
| `dstar_{levelID}` | Collected Stars for daily|
| `gstar_{levelID}` | Collected Stars for gauntlet |
| `demon_{levelID}` | Collected Demon |
| `ddemon_{levelID}` | Collected Demon for weekly|
| `gdemon_{levelID}` | Collected Demon for gauntlet|

## GS_3

GS_3 contains info about all levels you have collected unverified coins for

| Structure |
|:----------|
|`{levelID}_{coins collected}`|

## GS_4

GS_4 contains info about all levels you have collected verified coins for

| Structure |
|:----------|
|`{levelID}_{coins collected}`|

## GS_5

GS_5 contains info about all the MapPacks you have beaten

| Structure |
|:----------|
|`<k>pack_{packID}</k><s>{stars Rewarded}</s>`|

## GS_6

GS_6 contains all the Purchased Icons on your account

| Structure |
|:----------|
|`<k>{ListingID}</k><s>{Price}</s>`|

## GS_7

GS_7 is the Highscore attempt of levels

| Structure |
|:----------|
|`<k>{levelID}</k><s>{percentage}</s>`|

## GS_8

Unused

## GS_9

GS_9 provides info about how many stars downloaded levels give to you

| Structure |
|:----------|
|`<k>{levelID}</k><s>{rewardedStars}</s>`|

## GS_10

GS_10 Contains the high score of All Official Levels you have played

| Structure |
|:----------|
|`<k>{ID}</k><s>{percentage}</s>`|

## GS_11

GS_11 Contains the reward data for the Timely Chests you have opened

| key | Description |
|:----|:------|
| `<k>{ChestType}_{ChestID}</k>` | reward Object |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |

### Chest Types

| ID | type |
|:---|:-----|
| 1 | 4 hour chest |
| 2 | 24 hour chest |

## GS_12

GS_12 Contains the currently active [Quests](/resources/client/gamesave/quests)

## GS_14

The Diamond Rewards Collected from Challenges and Daily levels

| structure | type |Description |
|:----------|:------|:-----------|
|`{TypeID}{challenge/dailyID}` | int | The Number of Diamonds Earned | 

### TypeID's

| Types | Description |
|:------|:------------|
| c | Challenges/quests |
| d | daily levels |

## GS_15

GS_15 Contains the upcoming [Quests](/resources/client/gamesave/quests)

## GS_16

GS_16 contains the High Scores for daily and weekly demons

| Structure |
|:----------|
|`<k>{TimelyID}</k><s>{percentage}</s>`|

## GS_17

GS_17 contains the Stars rewarded for daily and weekly demons

| Structure |
|:----------|
|`<k>{TimelyID}</k><s>{Stars}</s>`|

## GS_18

GS_18 contains the High Scores for Gauntlet Levels

| Structure |
|:----------|
|`<k>{levelID}</k><s>{percentage}</s>`|

## GS_19

GS_19 Contains the reward data for the Treasure room chests you have opened

| key | Description |
|:----|:------|
| `<k>{ChestID}</k>` | reward Object |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |

## GS_20

GS_20 seems to be the total amount of Demon Keys you have had over your accounts lifespan

## GS_21

GS_21 Contains the reward data for the gauntlets you have completed

| key | Description |
|:----|:------|
| `g_{GauntletID}` | the gauntlet number |
| `000{ChestID}` | ChestIDs for Reward Chests |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |

### Chest IDs

| ID | how to get |
|:----|:------|
| 0001 | Beat the Challenge |
| 0002 | Release the Demon Guardian |
| 0003 | Chamber of Time Chest|
| 0004 | Treasure Room 50 key Chest|
| 0005 | Treasure Room 100 Key Chest|
| 0006 | Treasure Room 200 Key Chest|
| 0007 | YouTube Chest |
| 0008 | Twitter Chest |
| 0009 | Facebook Chest |


## GS_22

GS_22 Contains reward data for all of the ad chests from Geometry Dash world

| Key | Value |
|:----|:------|
| `{unix Timestamp}` | orbs |

## GS_23

GS_23 contains the High Scores for daily and weekly demons

| Structure |
|:----------|
|`<k>{TimelyID}</k><s>{percentage}</s>`|

## GS_24

GS_24 contains the High Scores for Gauntlet Levels

| Structure |
|:----------|
|`<k>{levelID}</k><s>{percentage}</s>`|

## GS_25

GS_25 Contains the reward data for every weekly demon you have completed

| key | Description |
|:----|:------|
| `d100{number}` | The Timely ID of the weekly Demon you have beaten |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |