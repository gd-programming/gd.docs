# Client Inner Level String Resource

## Inner Level String
The inner level string consists of information about the starting state of the level and the objects it contains. It is encoded in [base64](). Its raw representation is formatted as follows:

`{level_start};{object_string}`, where

- `level_start` is the level start object,
- `object_string` is the [object string]().

Theoretically, the inner level string in its entirety is the object string, however the level start object is treated specially, unlike every other object, and doesn't even have an ID.

## Level Start Object
The level start object is still an object and formated exactly like a normal [level object](level-object.md), but has the following properties instead:

| Key  | Name                   | Type                                        | Description                                                                                                    |
|:-----|:-----------------------|:--------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| kA1  | AudioTrack             | **Integer**                                 | The audio track which the level uses |
| kA2  | Gamemode               | **[Gamemode](enumerations.md)**             | the gamemode the player starts with                                                                            |
| kA3  | Mini Mode              | **bool**                                    | determines whether the player starts off as mini Mode                                                          |
| kA4  | Speed                  | **[Speed](enumerations.md)**                | the speed of the level at the starts                                                                           |
| kA6  | Background Texture ID  | **integer**                                 | the ID of the background texture that is being used in the level<br/>(enumerated in the same order as appears) |
| kA7  | Ground Texture ID      | **integer**                                 | the ID of the ground texture that is being used in the level<br/>(enumerated in the same order as appears)     |
| kA8  | Dual Mode              | **bool**                                    | determines whether the player starts off in dual Mode                                                          |
| kA9  | Level/Start Pos Object | **bool**                                    | determines whether this object represents a Level Start or a Start Pos object (true for the latter)            |
| kA10 | 2-Player Mode          | **bool**                                    | determines whether 2-Player Mode is toggled on for this level                                                  |
| kA11 | Flip Gravity           | **bool**                                    | determines whether the player starts off in flipped Gravity                                                    |
| kA13 | Song Offset            | **float**                                   | the song offset in seconds from which the level begins                                                         |
| kA14 | Guidelines             | **[Guideline String](guideline-string.md)** | the editor song guidelines of the level                                                                        |
| kA15 | Fade In                | **bool**                                    | determines whether the song will fade in as soon as the level starts                                           |
| kA16 | Fade Out               | **bool**                                    | determines whether the song will fade in as soon as the level ends                                             |
| kA17 | Ground Line            | **integer**                                 | the ID of the ground line that is being used in the level                                                      |
| kA18 | Font                   | **integer**                                 | the ID of the font that is being used in the level                                                             |
| kA22 | Platformer Mode        | **Bool**                                    | If platformer Mode is toggled on or off (currently only available in the December 2019 2.2 leaks)              |
| kS38 | Colors                 | **[Color String](color-string.md)**         | the color channels that are being used in this level                                                           |
| kS39 | Color Page             | **integer**                                 | the color page which was last displayed in the color channel display window                                    |

***Pre-2.0 Keys***

The following keys were valid prior to 2.0 and are deprecated, since they are included in the new `kS38` key. They all represented a color channel that is now indexed through the respective color channel ID.

| Key  | Name         | Color Channel ID |
|:-----|:-------------|:-----------------|
| kS29 | BG Color     | 1000             |
| kS30 | Ground Color | 1001             |
| kS31 | Line Color   | 1002             |
| kS32 | Object Color | 1004             |
| kS33 | Color 1      | 1                |
| kS34 | Color 2      | 2                |
| kS35 | Color 3      | 3                |
| kS36 | Color 4      | 4                |
| kS37 | 3DL Color    | 1003             |

***Pre-1.9 Keys***

The following keys were valid prior to 1.9 and were deprecated as of 1.9, since they were included in the keys `kS29`-`kS33`. Each color, instead of using one key, used 3 keys to represent Red, Green, and Blue values, respectively. In 1.7 and 1.8, the game used a fourth key to determine if a color channel used a player color, and which player color it would use.

| Key(s)    | Name                | Key in 1.9 |
|:----------|:--------------------|:-----------|
| kS1-kS3   | BG Color            | kS29       |
| kS4-kS6   | Ground Color        | kS30       |
| kS7-kS9   | Line Color          | kS31       |
| kS10-kS12 | Object Color        | kS32       |
| kS13-kS15 | Obj-2 Color         | kS33       |
| kS16      | BG Player Color     | kS29       |
| kS17      | Ground Player Color | kS30       |
| kS18      | Line Player Color   | kS31       |
| kS19      | Object Player Color | kS32       |
| kS20      | Obj-2 Player Color  | kS33       |

Keys `kS16`-`kS20` used to determine the player color that was being used and their values were interpreted according to the following table:

| Value | Color          |
|:------|:---------------|
| 0     | Neither        |
| 1     | Player Color 1 |
| 2     | Player Color 2 |

### Start Pos Object
The Start Pos object has the same special properties the level start object has, with a few not working. `kA9` must be set to `1` in the case that the object is indeed a Start Pos.

Specifically, the only functional properties in a Start Pos object are the ones involving gameplay state, thus excluding visual-related ones (BG/ground textures, font, colors, etc.)

Confirmed properties that do not work in the Start Pos:

| Key  |
|:-----|
| kA6  |
| kA7  |
| kA10 |
| kA13 |
| kA14 |
| kA15 |
| kA16 |
| kA18 |
| kS*  |
