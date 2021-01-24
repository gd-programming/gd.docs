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
| 13 | Total Diamonds) |
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

## GS_14

The Diamond Rewards Collected from Challenges and Daily levels

| structure | type |Description |
|:----------|:------|:-----------|
|{TypeID}{challenge/dailyID} | int | The Number of Diamonds Earned | 

| Types | Description |
|:------|:------------|
| c | Challenges/quests |
| d | daily levels |


## GS_19

GS_19 Contains the reward data for the Treasure room chests you have opened

| key | Description |
|:----|:------|
| `<k>{ChestID}</k>` | reward Object |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |

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


## GS_25

GS_25 Contains the reward data for every weekly demon you have completed

| key | Description |
|:----|:------|
| `d100{number}` | The Timely ID of the weekly Demon you have beaten |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure) |