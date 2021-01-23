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
| 13 | (investigate) |
| 14 | (investigate) |
| 15 | Completed Daily Levels |
| 16 | (investigate) |
| 17 | (investigate) |
| 18 | (investigate) |
| 19 | (investigate) |
| 20 | (investigate) |
| 21 | (investigate) |
| 22 | Total Orbs Collected |
| Unique_{LevelID}_{Coins Collected} | The Coins Collected on the Official Levels


## GS_25

GS_25 Contains the reward data for every weekly demon you have completed

| key | Description |
|:----|:------|
| `d100{number}` | The Timely ID of the weekly Demon you have beaten |
| `k_{number}` | RewardItems -> the number corresponds to how many RewardItems the player will recieve |
| `kCEK` | The [encoder keys](/resources/client/gamesave/kCEK?id=kcek-8-and-9-structure)