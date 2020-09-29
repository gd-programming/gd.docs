# Server Map Pack Resource

#### Map Pack

A map pack is a series of 3 levels, although it can go higher, handpicked by Robtop. They preceded Gauntlets and can be seen as the predecessor to them. They reward star coins and stars as opposed to user coins or any other form of currency.

#### Map Pack Structure

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1   | Unknown	   | **number** | These have to be correct to load the map packs. Maybe it's a map pack ID?
| 2   | Name       | **string** | Name of the map pack
| 3   | Levels	   | **string** | List of level IDs separated by a comma
| 4   | Stars	   | **number** | How many stars the map pack should give
| 5   | Coins	   | **number** | How many coins the map pack should give
| 6   | Difficulty | **number** | Difficulty from 1-6, denoting Easy-Demon respectively
| 7   | Text Color | **string** | RGB color for the title text separated by ,
| 8   | Bar Color  | **string** | RGB color for the completion bar separated by ,