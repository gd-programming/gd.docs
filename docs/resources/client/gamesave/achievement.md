# Achievements

Geometry Dash has 266 achievements that you can aquire, 2 of them are exclusive to the Steam version of the game. You can find out how to get all the achievements [here](https://geometry-dash.fandom.com/wiki/Achievements).

keep in mind that adding the achievements into your save data manually will only show them as completed in game but won't give you the reward for the completion

## Achievement key structure

Inside CCGameManager.dat, every achievement you have progress on can be found in the `<k>reportedAchievements</k>` Dictionary. they are all organised like this
 ```xml
 <k>geometry.ach.[internal achievement name]</k><i>[percentage complete]</i><k>geometry.ach.[internal achievement name]</k><i>[percentage complete]</i>
 ```

## Internal Names

| Internal name | How it's acquired |
| :-------------| :-------------- |
| geometry.ach.level01b | Beat Stereo Madness in normal Mode |
| geometry.ach.level01a | Beat Stereo Madness in practice Mode |
| geometry.ach.level02b | Beat Back On Track in normal Mode |
| geometry.ach.level02a | Beat Back On Track in practice Mode |
| geometry.ach.level03b | Beat Polargeist in normal Mode |
| geometry.ach.level03a | Beat Polargeist in practice Mode |
| geometry.ach.level04b | Beat Dry Out in normal Mode |
| geometry.ach.level04a | Beat Dry Out in practice Mode |
| geometry.ach.level05b | Beat Base after Base in normal Mode |
| geometry.ach.level05a | Beat Base After Base in practice Mode |
| geometry.ach.level06b | Beat Cant Let Go in normal Mode |
| geometry.ach.level06a | Beat Cant Let Go in practice Mode |
| geometry.ach.level07b | Beat Jumper in normal Mode |
| geometry.ach.level07a | Beat Jumper in practice Mode |
| geometry.ach.level08b | Beat Time Machine in normal Mode |
| geometry.ach.level08a | Beat Time Machine in practice Mode |
| geometry.ach.level09b | Beat Cycles in normal Mode |
| geometry.ach.level09a | Beat Cycles in practice Mode |
| geometry.ach.level10b | Beat Xstep in normal Mode |
| geometry.ach.level10a | Beat Xstep in practice Mode |
| geometry.ach.level11b | Beat Clutterfunk in normal Mode |
| geometry.ach.level11a | Beat Clutterfunk in practice Mode |
| geometry.ach.level12b | Beat Theory Of Everything  in normal Mode |
| geometry.ach.level12a | Beat Theory Of Everything in practice Mode |
| geometry.ach.level13b | Beat Electroman Adventures in normal Mode |
| geometry.ach.level13a | Beat Electroman Adventures in practice Mode |
| geometry.ach.level14b | Beat Clubstep in normal Mode |
| geometry.ach.level14a | Beat Clubstep in practice Mode |
| geometry.ach.level15b | Beat Electrodynamix in normal Mode |
| geometry.ach.level15a | Beat Electrodynamix in practice Mode |
| geometry.ach.level16b | Beat Hexagon Force in normal Mode |
| geometry.ach.level16a | Beat Hexagon Forece in practice Mode |
| geometry.ach.level17b | Beat Blast Processing in normal Mode |
| geometry.ach.level17a | Beat Blast Processing in practice Mode |
| geometry.ach.level18b | Beat Theory Of Everything 2 in normal Mode |
| geometry.ach.level18a | Beat Theory Of Everything 2 in practice Mode |
| geometry.ach.level19b | Beat Geometrical Dominator in normal Mode |
| geometry.ach.level19a | Beat Geometrical Dominator in practice Mode |
| geometry.ach.level20b | Beat Deadlocked in normal Mode |
| geometry.ach.level20a | Beat Deadlocked in practice Mode |
| geometry.ach.level21b | Beat Fingerdash in normal Mode |
| geometry.ach.level21a | Beat Fingerdash in practice Mode |
| geometry.ach.steam01 | Beat Stereo Madness, Back On Track and Polargeist in normal mode (steam exlusive) |
| geometry.ach.steam02 | Beat Clubstep in normal mode (steam exlusive) |
| geometry.ach.demoncoin01 | Beat Clubstep in with all coins|
| geometry.ach.demoncoin02 | Beat Theory Of Everything 2 in with all coins|
| geometry.ach.demoncoin03 | Beat Deadlocked in with all coins|
| geometry.ach.mappacks01 | Complete 1 Map Pack |
| geometry.ach.mappacks02 | Complete 5 Map Packs |
| geometry.ach.mappacks03 | Complete 10 Map Packs |
| geometry.ach.mappacks04 | Complete 15 Map Packs |
| geometry.ach.mappacks05 | Complete 20 Map Packs |
| geometry.ach.mappacks06 | Complete 25 Map Packs |
| geometry.ach.mappacks07 | Complete 30 Map Packs |
| geometry.ach.mappacks08 | Complete 35 Map Packs |
| geometry.ach.mappacks09 | Complete 40 Map Packs |
| geometry.ach.mappacks10 | Complete 45 Map Packs |
| geometry.ach.custom01 | Complete 1 User Created Level in Normal Mode|   
| geometry.ach.custom02 | Complete 10 User Created Level in Normal Mode|
| geometry.ach.custom03 | Complete 50 User Created Level in Normal Mode|
| geometry.ach.custom04 | Complete 100 User Created Level in Normal Mode|
| geometry.ach.custom05 | Complete 200 User Created Level in Normal Mode|
| geometry.ach.custom06 | Complete 300 User Created Level in Normal Mode|
| geometry.ach.custom07 | Complete 500 User Created Level in Normal Mode|
| geometry.ach.custom08 | Complete 1,000 User Created Level in Normal Mode|
| geometry.ach.stars01 | Collect 100 stars|
| geometry.ach.stars02 | Collect 200 stars|
| geometry.ach.stars03 | Collect 300 stars|
| geometry.ach.stars04 | Collect 400 stars|
| geometry.ach.stars05 | Collect 500 stars|
| geometry.ach.stars06 | Collect 600 stars|
| geometry.ach.stars07 | Collect 700 stars|
| geometry.ach.stars08 | Collect 800 stars|
| geometry.ach.stars09 | Collect 900 stars|
| geometry.ach.stars10 | Collect 1,000 stars|
| geometry.ach.stars11 | Collect 1,500 stars|
| geometry.ach.stars12 | Collect 2,000 stars|
| geometry.ach.stars13 | Collect 2,500 stars|
| geometry.ach.stars14 | Collect 3,000 stars|
| geometry.ach.stars15 | Collect 3,500 stars|
| geometry.ach.stars16 | Collect 4,000 stars|
| geometry.ach.stars17 | Collect 4,500 stars|
| geometry.ach.stars18 | Collect 5,000 stars|
| geometry.ach.stars19 | Collect 5,500 stars|
| geometry.ach.stars20 | Collect 6,000 stars|
| geometry.ach.stars21 | Collect 6,500 stars|
| geometry.ach.stars22 | Collect 7,000 stars|
| geometry.ach.stars23 | Collect 7,500 stars|
| geometry.ach.stars24 | Collect 8,000 stars|
| geometry.ach.stars25 | Collect 9,000 stars|
| geometry.ach.stars26 | Collect 10,000 stars|
| geometry.ach.demon01 | Beat 1 Demon|
| geometry.ach.demon02 | Beat 2 Demons|
| geometry.ach.demon03 | Beat 3 Demons|
| geometry.ach.demon04 | Beat 4 Demons|
| geometry.ach.demon05 | Beat 5 Demons|
| geometry.ach.demon06 | Beat 10 Demons|
| geometry.ach.demon07 | Beat 15 Demons|
| geometry.ach.demon08 | Beat 20 Demons|
| geometry.ach.demon09 | Beat 30 Demons|
| geometry.ach.demon10 | Beat 40 Demons|
| geometry.ach.demon11 | Beat 50 Demons|
| geometry.ach.demon12 | Beat 60 Demons|
| geometry.ach.coins01 | Collect 5 Secret Coins|
| geometry.ach.coins02 | Collect 10 Secret Coins|
| geometry.ach.coins03 | Collect 15 Secret Coins|
| geometry.ach.coins04 | Collect 20 Secret Coins|
| geometry.ach.coins05 | Collect 25 Secret Coins|
| geometry.ach.coins06 | Collect 30 Secret Coins|
| geometry.ach.coins07 | Collect 35 Secret Coins|
| geometry.ach.coins08 | Collect 40 Secret Coins|
| geometry.ach.coins09 | Collect 45 Secret Coins|
| geometry.ach.coins10 | Collect 50 Secret Coins|
| geometry.ach.coins11 | Collect 55 Secret Coins|
| geometry.ach.coins12 | Collect 60 Secret Coins|
| geometry.ach.coins13 | Collect 65 Secret Coins|
| geometry.ach.coins14 | Collect 70 Secret Coins|
| geometry.ach.coins15 | Collect 75 Secret Coins|
| geometry.ach.coins16 | Collect 80 Secret Coins|
| geometry.ach.coins17 | Collect 85 Secret Coins|
| geometry.ach.coins18 | Collect 90 Secret Coins|
| geometry.ach.coins19 | Collect 95 Secret Coins|
| geometry.ach.coins20 | Collect 100 Secret Coins|
| geometry.ach.coins21 | Collect 105 Secret Coins|
| geometry.ach.coins22 | Collect 110 Secret Coins|
| geometry.ach.coins23 | Collect 115 Secret Coins|
| geometry.ach.coins24 | Collect 120 Secret Coins|
| geometry.ach.coins25 | Collect 130 Secret Coins|
| geometry.ach.usercoins01 | Collect 1 user Coin|
| geometry.ach.usercoins02 | Collect 10 user Coins|
| geometry.ach.usercoins03 | Collect 20 user Coins|
| geometry.ach.usercoins04 | Collect 30 user Coins|
| geometry.ach.usercoins05 | Collect 40 user Coins|
| geometry.ach.usercoins06 | Collect 50 user Coins|
| geometry.ach.usercoins07 | Collect 60 user Coins|
| geometry.ach.usercoins08 | Collect 70 user Coins|
| geometry.ach.usercoins09 | Collect 80 user Coins|
| geometry.ach.usercoins10 | Collect 90 user Coins|
| geometry.ach.usercoins11 | Collect 100 user Coins|
| geometry.ach.usercoins12 | Collect 110 user Coins|
| geometry.ach.usercoins13 | Collect 120 user Coins|
| geometry.ach.usercoins14 | Collect 130 user Coins|
| geometry.ach.usercoins15 | Collect 140 user Coins|
| geometry.ach.usercoins16 | Collect 150 user Coins|
| geometry.ach.usercoins17 | Collect 160 user Coins|
| geometry.ach.usercoins18 | Collect 170 user Coins|
| geometry.ach.usercoins19 | Collect 180 user Coins|
| geometry.ach.usercoins20 | Collect 190 user Coins|
| geometry.ach.usercoins21 | Collect 200 user Coins|
| geometry.ach.usercoins22 | Collect 225 user Coins|
| geometry.ach.usercoins23 | Collect 250 user Coins|
| geometry.ach.usercoins24 | Collect 300 user Coins|
| geometry.ach.usercoins25 | Collect 350 user Coins|
| geometry.ach.usercoins26 | Collect 425 user Coins|
| geometry.ach.usercoins27 | Collect 500 user Coins|
| geometry.ach.usercoins28 | Collect 600 user Coins|
| geometry.ach.usercoins29 | Collect 700 user Coins|
| geometry.ach.usercoins30 | Collect 800 user Coins|
| geometry.ach.usercoins31 | Collect 900 user Coins|
| geometry.ach.usercoins32 | Collect 1,000 user Coins|
| geometry.ach.diamonds01 | Collect 100 Diamonds|
| geometry.ach.diamonds02 | Collect 250 Diamonds|
| geometry.ach.diamonds03 | Collect 500 Diamonds|
| geometry.ach.diamonds04 | Collect 1,000 Diamonds|
| geometry.ach.diamonds05 | Collect 1,500 Diamonds|
| geometry.ach.diamonds06 | Collect 2,000 Diamonds|
| geometry.ach.diamonds07 | Collect 2,500 Diamonds|
| geometry.ach.diamonds08 | Collect 3,000 Diamonds|
| geometry.ach.diamonds09 | Collect 4,000 Diamonds|
| geometry.ach.diamonds10 | Collect 5,000 Diamonds|
| geometry.ach.shardFire01 | Collect 5 Fire Shards|
| geometry.ach.shardFire02 | Collect 15 Fire Shards|
| geometry.ach.shardFire03 | Collect 35 Fire Shards|
| geometry.ach.shardFire04 | Collect 65 Fire Shards|
| geometry.ach.shardFire05 | Collect 100 Fire Shards|
| geometry.ach.shardIce01 | Collect 5 Ice Shards|
| geometry.ach.shardIce02 | Collect 15 Ice Shards|
| geometry.ach.shardIce03 | Collect 35 Ice Shards|
| geometry.ach.shardIce04 | Collect 65 Ice Shards|
| geometry.ach.shardIce05 | Collect 100 Ice Shards|
| geometry.ach.shardPoison01 | Collect 5 Poison Shards|
| geometry.ach.shardPoison02 | Collect 15 Poison Shards|
| geometry.ach.shardPoison03 | Collect 35 Poison Shards|
| geometry.ach.shardPoison04 | Collect 65 Poison Shards|
| geometry.ach.shardPoison05 | Collect 100 Poison Shards|
| geometry.ach.shardShadow01 | Collect 5 Shadow Shards|
| geometry.ach.shardShadow02 | Collect 15 Shadow Shards|
| geometry.ach.shardShadow03 | Collect 35 Shadow Shards|
| geometry.ach.shardShadow04 | Collect 65 Shadow Shards|
| geometry.ach.shardShadow05 | Collect 100 Shadow Shards|
| geometry.ach.shardLava01 | Collect 5 Lava Shards|
| geometry.ach.shardLava02 | Collect 15 Lava Shards|
| geometry.ach.shardLava03 | Collect 35 Lava Shards|
| geometry.ach.shardLava04 | Collect 65 Lava Shards|
| geometry.ach.shardLava05 | Collect 100 Lava Shards|
| geometry.ach.shardBonus01 | Collect 5 of each Shard|
| geometry.ach.shardBonus02 | Collect 15 of each Shard|
| geometry.ach.shardBonusa03 | Collect 35 of each Shard|
| geometry.ach.shardBonus04 | Collect 65 of each Shard|
| geometry.ach.shardBonus05 | Collect 100 of each Shard|
| geometry.ach.followCreator | follow 1 Creator|
| geometry.ach.followCreator2 | follow 10 Creators|
| geometry.ach.friends01 | Befriend 1 user|
| geometry.ach.friends02 | Befriend 10 users|
| geometry.ach.youtube | subscribe to [RobTop](https://www.youtube.com/user/RobTopGames) on YouTube|
| geometry.ach.youtube | Follow  [RobTop](https://twitter.com/robtopgames) on Twitter|
| geometry.ach.youtube | Like [RobTop](https://www.facebook.com/geometrydash) on Facebook|
| geometry.ach.attempt01 | Do 100 Attempts |
| geometry.ach.attempt02 | Do 500 Attempts |
| geometry.ach.attempt03 | Do 2,000 Attempts |
| geometry.ach.attempt04 | Do 10,000 Attempts |
| geometry.ach.attempt05 | Do 20,000 Attempts |
| geometry.ach.jump01 | Jump 1,000 Times |
| geometry.ach.jump02 | Jump 10,000 Times |
| geometry.ach.jump03 | Jump 20,000 Times |
| geometry.ach.jump04 | Jump 50,000 Times |
| geometry.ach.jump05 | Jump 100,000 Times |
| geometry.ach.submit | Submit an online level |
| geometry.ach.rate | Click the supporter icon when it's locked |
| geometry.ach.rateDiff | Rate the stars of an online level |
| geometry.ach.rateDiff02 | Rate the stars of 100 online levels |
| geometry.ach.rateDiff02b | Rate the stars of 500 online levels |
| geometry.ach.rateDiff03 | Rate the stars of 1,000 online levels |
| geometry.ach.rateDiff04 | Rate the stars of 2,000 online levels |
| geometry.ach.like | Like or dislike an online level |
| geometry.ach.like02 | Like or dislike 100 online levels |
| geometry.ach.like02b | Like or dislike 500 online levels |
| geometry.ach.like03 | Like or dislike 1,000 online levels |
| geometry.ach.like04 | Like or dislike 2,000 online levels |
| geometry.ach.moreGames | Click the "More Games" button |
| geometry.ach.special01 | Die at over 95% on a main level |
| geometry.ach.creator01 | Get 100 likes on your level |
| geometry.ach.creator02 | Get a star rate on your level |
| geometry.ach.creator03 | Get 50 likes on your level |
| geometry.ach.secret01 | Destroy an icon on the main menu |
| geometry.ach.secret02 | Destroy 50 icons on the main menu |
| geometry.ach.secret02b | Destroy 100 icons on the main menu |
| geometry.ach.secret03 | Destroy 200 icons on the main menu |
| geometry.ach.secret03b | Destroy 500 icons on the main menu |
| geometry.ach.secret04 | Found the hidden gold coin by scrolling through the level page 3 times |
| geometry.ach.secret05 | Type 'lenny' into the 2.0 Vault |
| geometry.ach.secret06 | Type 'sparky' into the 2.0 Vault |
| geometry.ach.secret07 | Type 'spooky' into the 2.0 Vault |
| geometry.ach.secret08 | Type 'blockbite' into the 2.0 Vault |
| geometry.ach.secret09 | Type 'robotop' into the 2.0 Vault |
| geometry.ach.secret10 | Type 'ahead' into the 2.0 Vault |
| geometry.ach.secret11 | Destroy the 55th cube on the main menu |
| geometry.ach.secret12 | Destroy the 50th cube on the main menu |
| geometry.ach.secret13 | Type 'mule' into the 2.0 Vault |
| geometry.ach.secret14 | Type 'neverending' into the 2.0 Vault |
| geometry.ach.secret15 | Type 'gandalfpotter' into the 2.0 Vault |
| geometry.ach.secret16 | Consecutively type '8', '16', '30', '32', '46' and '84' into the 2.0 Vault |
| geometry.ach.secret17 | Type your username into the 2.0 Vault |
| geometry.ach.v2.secret01 | Type 'brainpower' into the Vault of Secrets |
| geometry.ach.v2.secret02 | Type 'cod3breaker' and the solution to the puzzle into the Vault of Secrets |
| geometry.ach.v2.secret03 | Solve the 'glubfub' puzzle |
| geometry.ach.v2.secret04 | Type 'octocube' into the Vault of Secrets |
| geometry.ach.v2.secret05 | Type your star count into the Vault of Secrets |
| geometry.ach.v2.secret06 | Type 'seven' into the Vault of Secrets |
| geometry.ach.v2.secret07 | Type 'gimmiethecolor' into the Vault of Secrets |
| geometry.ach.v2.secret08 | Type 'thechickenisonfire' into the Vault of Secrets |
| geometry.ach.v3.secret01 | Type 'darkness' into the Chamber of Time |
| geometry.ach.v3.secret02 | Type 'silence' into the Chamber of Time |
| geometry.ach.v3.secret03 | Type 'river' into the Chamber of Time |
| geometry.ach.v3.secret04 | Type 'hunger' into the Chamber of Time |
| geometry.ach.v3.secret05 | Type 'volcano' into the Chamber of Time |

## GD Meltdown Achievements
| Internal name | How it's acquired |
| :-------------| :-------------- |
| geometry.ach.mdlevel01b | Beat The Seven Seas in normal mode |
| geometry.ach.mdlevel02b | Beat Viking Arena in normal mode |
| geometry.ach.mdlevel03b | Beat Airborne Robots in normal mode |
| geometry.ach.mdcoin01 | Collect all 3 coins on The Seven Seas |
| geometry.ach.mdcoin02 | Collect all 3 coins on Viking Arena |
| geometry.ach.mdcoin03 | Collect all 3 coins on Airborne Robots |
| geometry.ach.mdrate | Click the icon with ID 71 when it's locked (positioned as 11th) |

## GD World Achievements
| Internal name | How it's acquired |
| :-------------| :-------------- |
| geometry.ach.world.level001b | Beat Payload in normal mode |
| geometry.ach.world.level002b | Beat Beast Mode in normal mode |
| geometry.ach.world.level003b | Beat Machina in normal mode |
| geometry.ach.world.level004b | Beat Years in normal mode |
| geometry.ach.world.level005b | Beat Frontlines in normal mode |
| geometry.ach.world.level006b | Beat Space Pirates in normal mode |
| geometry.ach.world.level007b | Beat Striker in normal mode |
| geometry.ach.world.level008b | Beat Embers in normal mode |
| geometry.ach.world.level009b | Beat Round 1 in normal mode |
| geometry.ach.world.level010b | Beat Monster Dance Off in normal mode |

## GD Subzero Achievements
| Internal name | How it's acquired |
| :-------------| :-------------- |
| geometry.ach.subzero.level001 | Beat Press Start in normal mode |
| geometry.ach.subzero.level002 | Beat Nock Em in normal mode |
| geometry.ach.subzero.level003 | Beat Power Trip in normal mode |
| geometry.ach.subzero.coins001 | Collect all 3 coins on Press Start|
| geometry.ach.subzero.coins002 | Collect all 3 coins on Nock Em |
| geometry.ach.subzero.coins003 | Collect all 3 coins on Power Trip |
