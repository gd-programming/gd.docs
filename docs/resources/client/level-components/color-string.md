# Client Color String Resource

## Color String
The color string contains the information for the initial state of the colors being used in the level. Its raw representation is formatted as follows:

`{color}|{color}|...`, where `color` is formatted as:

`{property_key}_{property_value}_{property_key}_{property_value}_...`.

## Color Properties
The color entries have the following properties:

| Key | Name                | Type                                | Description                                |
|:----|:--------------------|:------------------------------------|:-------------------------------------------|
| 1   | FromColourRed       | **Integer**                         | the Red component of the color             |
| 2   | FromColourGreen     | **Integer**                         | the Green component of the color           |
| 3   | FromColourBlue      | **Integer**                         | the Blue component of the color            |
| 4   | PlayerColor         | **[Player Color](enumerations.md)** | the Player Color that the color is copying |
| 5   | Blending            | **Bool**                            | the Blending property of the color         |
| 6   | ColourChannelIndex  | **Integer**                         | the Color Channel ID of the color          |
| 7   | FromOpacity         | **Float**                           | the Opacity property of the color          |
| 8   | ToggleOpacity       | **Bool**                            | toggled if opacity and be changed          |
| 9   | InheritedColourChannelIndex | **Integer**                 | the Color Channel ID of the copied color   |
| 10  | HSV                 | **[HSV]()**                         | the HSV of the copied color                |
| 11  | ToColourRed         | **Integer**                         | the Red component that the colour changes to|
| 12  | ToColourGreen       | **Integer**                         | the Green component that the colour changes to|
| 13  | ToColourBlue        | **Integer**                         | the blue component that the colour changes to|
| 14  | DeltaTime           | **Float**                           | delta used in colour change                |
| 15  | ToOpacity           | **Float**                           | opacity that fromOpacity should change too |
| 16  | Duration            | **Float**                           | duration for From->To                      |
| 17  | CopyOpacity         | **Bool**                            | the Copy Opacity property of the color     |

***Undiscovered properties***

| Key | Type        | Proven Existence | Common Value |
|:----|:------------|:-----------------|:-------------|
| 18  | **bool**(?) | yes              | 0            |
