# Client Level Object Resource

## Level Object
A level object is an object within a Geometry Dash level, containing data about its behavior.

### Object String
The object string is contained within the [inner level string](). It is formatted as follows:

`{object};{object};{object};...`, where `object` is formatted as:

`{propertyKey},{propertyValue},{propertyKey},{propertyValue},...`.

E.g.:

`1,1,2,15,3,15,21,3,24,7;1,1,2,15,3,15,20,5,25,-1;` represents the following objects:

- Standard Block
  - ID: 1 (`1,1`)
  - X: 15 (`2,15`)
  - Y: 15 (`3,15`)
  - Main Color ID: 3 (`21,3`)
  - Z Layer: 7 (`24,7`)
- Standard Block
  - ID: 1 (`1,1`)
  - X: 15 (`2,15`)
  - Y: 15 (`3,15`)
  - Editor Layer 1: 5 (`20,5`)
  - Z Order: -1 (B3) (`25,-1`)

Notice that every single objects contains at least 3 properties, `1`, `2`, `3`, which represent the object ID, X position and Y position respectively. Even in the case that the objects' X and Y positions are 0, the keys are not omitted. <!-- TODO: Verify -->

Property keys reflect the keys found in the following table, whereas property values are formatted as follows

| Type                | Formatting                                                                                  |
|:--------------------|:--------------------------------------------------------------------------------------------|
| **integer**         | decimal numerical value string (e.g. `421`)                                                 |
| **bool**            | `1` if true, `0` if false                                                                   |
| **float**           | decimal numerical value string, using `.` as the decimal point separator (e.g. `12.41`)     |
| **any enumeration** | same as **integer**                                                                         |
| **integer array**   | all values are separated by `.` (e.g. `1.42.51.23` for `{ 1, 42, 51, 23 }`)                 |
| **[HSV]()**         | `{h}a{s}a{v}a{s_checked}a{v_checked}`, where each name reflects the respective HSV property |
| **string**          | raw string without quotation marks (e.g. `ExampleString`)                                   |

### Level Object Data
**Level Object Structure**

| Key | Name/Value                           | Type                                            | Description                                                                        |
|:----|:-------------------------------------|:------------------------------------------------|:-----------------------------------------------------------------------------------|
| 1   | Object ID                            | **integer**                                     | the ID of the object                                                               |
| 2   | X Position                           | **float**                                       | the X position of the object                                                       |
| 3   | Y Position                           | **float**                                       | the Y position of the object                                                       |
| 4   | Flipped Horizontally                 | **bool**                                        | whether the object is horizontally flipped                                         |
| 5   | Flipped Vertically                   | **bool**                                        | whether the object is vertically flipped                                           |
| 6   | Rotation                             | **float**                                       | the rotation of the objects in degrees, CW is positive, top is 0                   |
| 7   | Red                                  | **integer**                                     | the Red component of the color in a trigger                                        |
| 8   | Green                                | **integer**                                     | the Green component of the color in a trigger                                      |
| 9   | Blue                                 | **integer**                                     | the Blue component of the color in a trigger                                       |
| 10  | Duration                             | **float**                                       | the duration of an effect in a trigger                                             |
| 11  | Touch Triggered                      | **bool**                                        | the Touch Triggered property of a trigger                                          |
| 12  | Secret Coin ID                       | **integer**                                     | the ID of a Secret Coin                                                            |
| 13  | Special Object Checked               | **bool**                                        | the checked property of some special objects (gamemode, speed, dual portals, etc.) |
| 14  | Tint Ground                          | **bool**                                        | the Tint Ground property of the BG Color trigger                                   |
| 15  | Player Color 1                       | **bool**                                        | the Player Color 1 property of any Color trigger                                   |
| 16  | Player Color 2                       | **bool**                                        | the Player Color 2 property of any Color trigger                                   |
| 17  | Blending                             | **bool**                                        | the Blending property of any Color trigger                                         |
| 19  | 1.9 Color Channel ID                 | **integer**                                     | the legacy Color Channel ID property used in 1.9 levels. If set to a valid value, both the Main and Secondary Color Channel ID properties will be ignored. |
| 20  | Editor Layer 1                       | **integer**                                     | the Editor Layer 1 property of the object                                          |
| 21  | Main Color Channel ID                | **integer**                                     | the Main Color Channel ID property of the object                                   |
| 22  | Secondary Color Channel ID           | **integer**                                     | the Secondary Color Channel ID property of the object                              |
| 23  | Target Color ID                      | **integer**                                     | the Target Color ID property in an interactive object                              |
| 24  | Z Layer                              | **integer**                                     | the Z Layer of the object                                                          |
| 25  | Z Order                              | **integer**                                     | the Z Order of the object                                                          |
| 28  | Offset X                             | **integer**                                     | the Offset X property of the Move trigger                                          |
| 29  | Offset Y                             | **integer**                                     | the Offset Y property of the Move trigger                                          |
| 30  | Easing                               | **[Easing](enumerations.md)**                   | the Easing type of the effect of a trigger                                         |
| 31  | Text                                 | **string**                                      | the text of the text object in [base64]()                                          |
| 32  | Scaling                              | **float**                                       | the scaling of the object                                                          |
| 33  | Single Group ID                      | **integer**                                     | a group ID given to the object                                                      |
| 34  | Group Parent                         | **bool**                                        | the Group Parent property of the object                                            |
| 35  | Opacity                              | **float**                                       | the opacity value of a trigger                                                     |
| 41  | Main Color HSV Enabled               | **bool**                                        | whether the HSV mode is enabled for the Main Color of the object                   |
| 42  | Secondary Color HSV Enabled          | **bool**                                        | whether the HSV mode is enabled for the Secondary Color of the object              |
| 43  | Main Color HSV                       | **[HSV]()**                                     | the HSV adjustment values of the Main Color of the object                          |
| 44  | Secondary Color HSV                  | **[HSV]()**                                     | the HSV adjustment values of the Secondary Color of the object                     |
| 45  | Fade In                              | **float**                                       | the Fade In property of the Pulse trigger                                          |
| 46  | Hold                                 | **float**                                       | the Hold property of the Pulse trigger                                             |
| 47  | Fade Out                             | **float**                                       | the Fade Out property of the Pulse trigger                                         |
| 48  | Pulse Mode                           | **[Pulse Mode](enumerations.md)**               | the Pulse Mode property of the Pulse trigger                                       |
| 49  | Copied Color HSV                     | **[HSV]()**                                     | the HSV adjustment values of the Copied Color property of a trigger                |
| 50  | Copied Color ID                      | **integer**                                     | the Copied Color Channel ID in a trigger                                           |
| 51  | Target Group ID                      | **integer**                                     | the Target Group ID in a trigger                                                   |
| 52  | Pulse Target Type                    | **[Pulse Target Type](enumerations.md)**        | the Target Type property of the Pulse trigger                                      |
| 54  | Yellow Teleportation Portal Y Offset | **float**                                       | the Y offset of the yellow from the blue teleportation portal                      |
| 55  | Teleport Portal Ease                 | **bool**                                                 | The Smooth Ease property within Teleport Portals                          |
| 56  | Activate Group                       | **bool**                                        | the Activate Group property of the trigger                                         |
| 57  | Group IDs                            | **integer array**                               | the group IDs of the object                                                        |
| 58  | Lock To Player X                     | **bool**                                        | the Lock To Player X property of the Move trigger                                  |
| 59  | Lock To Player Y                     | **bool**                                        | the Lock To Player Y property of the Move trigger                                  |
| 60  | Copy Opacity                         | **bool**                                        | the Copy Opacity property of a trigger                                             |
| 61  | Editor Layer 2                       | **integer**                                     | the Editor Layer 2 of an object                                                    |
| 62  | Spawn Triggered                      | **bool**                                        | the Spawn Triggered property of a trigger                                          |
| 63  | Spawn Delay                          | **float**                                       | the Spawn Delay property of the Spawn trigger                                      |
| 64  | Don't Fade                           | **bool**                                        | the Don't Fade property of the object                                              |
| 65  | Main Only                            | **bool**                                        | the Main Only property of the Pulse trigger                                        |
| 66  | Detail Only                          | **bool**                                        | the Detail Only property of the Pulse trigger                                      |
| 67  | Don't Enter                          | **bool**                                        | the Don't Enter property of the object                                             |
| 68  | Degrees                              | **integer**                                     | the Degrees property of the Rotate trigger                                         |
| 69  | Times 360                            | **integer**                                     | the Times 360 property of the Rotate trigger                                       |
| 70  | Lock Object Rotation                 | **bool**                                        | the Lock Object Rotation property of the Rotate trigger                            |
| 71  | Secondary Group ID                   | **integer**                                     | the Secondary (Follow, Target Pos, Center) Group ID property of some triggers      |
| 72  | X Mod                                | **float**                                       | the X Mod property of the Follow trigger                                           |
| 73  | Y Mod                                | **float**                                       | the Y Mod property of the Follow trigger                                           |
| 75  | Strength                             | **float**                                       | the Strength property of the Shake trigger                                         |
| 76  | Animation ID                         | **integer**                                     | the Animation ID property of the Animate trigger                                   |
| 77  | Count                                | **integer**                                     | the Count property of the Pickup trigger or the Pickup Item                        |
| 78  | Subtract Count                       | **bool**                                        | the Subtract Count property of the Pickup trigger or the Pickup Item               |
| 79  | Pickup Mode                          | **[Pickup Item Mode](enumerations.md)**         | the Pickup Mode property of the Pickup Item                                        |
| 80  | Item/Block ID                        | **integer**                                     | the Item/Block ID property of an object                                            |
| 81  | Hold Mode                            | **bool**                                        | the Hold Mode property of the Touch trigger                                        |
| 82  | Toggle Mode                          | **[Touch Toggle Mode](enumerations.md)**        | the Toggle Mode property of the Touch trigger                                      |
| 84  | Interval                             | **float**                                       | the Interval property of the Shake trigger                                         |
| 85  | Easing Rate                          | **float**                                       | the Easing Rate property of a trigger                                              |
| 86  | Exclusive                            | **bool**                                        | the Exclusive property of a Pulse trigger                                          |
| 87  | Multi-Trigger                        | **bool**                                        | the Multi-Trigger property of a trigger                                            |
| 88  | Comparison                           | **[Instant Count Comparison](enumerations.md)** | the Comparison property of the Instant Count trigger                               |
| 89  | Dual Mode                            | **bool**                                        | the Dual Mode property of the Touch trigger                                        |
| 90  | Speed                                | **float**                                       | the Speed property of the Follow Player Y trigger                                  |
| 91  | Follow Delay                         | **float**                                       | the Follow Delay property of the Follow Player Y trigger                           |
| 92  | Y Offset                             | **float**                                       | the Y Offset property of the Follow Player Y trigger                               |
| 93  | Trigger On Exit                      | **bool**                                        | the Trigger On Exit property of the Collision trigger                              |
| 94  | Dynamic Block                        | **bool**                                        | the Dynamic Block property of the Collision block                                  |
| 95  | Block B ID                           | **integer**                                     | the Block B ID property of the Collision trigger                                   |
| 96  | Disable Glow                         | **bool**                                        | the Disable Glow property of the object                                            |
| 97  | Custom Rotation Speed                | **float**                                       | the Custom Rotation Speed property of the rotating object in degrees per second    |
| 98  | Disable Rotation                     | **bool**                                        | the Disable Rotation property of the rotating object                               |
| 99  | Multi Activate (Orbs)                      | **bool**                                        | the Multi Activate property of Orbs                                   |
| 100 | Enable Use Target                    | **bool**                                        | the Enable Use Target property of the Move trigger                                 |
| 101 | Target Pos Coordinates               | **[Target Pos Coordinates](enumerations.md)**   | the Target Pos Coordinates property of the Move trigger                            |
| 102 | Editor Disable                       | **bool**                                        | the Editor Disable property of the Spawn trigger                                   |
| 103 | High Detail                          | **bool**                                        | the High Detail property of the object                                             |
| 104 | Multi Activate (Triggers)                         | **bool**                                        | The Multi Activate Property of Triggers                                          |
| 105 | Max Speed                            | **float**                                       | the Max Speed property of the Follow Player Y trigger                              |
| 106 | Randomize Start                      | **bool**                                        | the Randomize Start property of the animated object                                |
| 107 | Animation Speed                      | **float**                                       | the Animation Speed property of the animated object                                |
| 108 | Linked Group ID                      | **integer**                                     | the Linked Group ID property of the object                                         |

***Undiscovered Existing Features***

The following features are discovered in current local save files, however their purpose is undisclosed.

| Key | Type        | Info                                                                                               |
|:----|:------------|:---------------------------------------------------------------------------------------------------|
| 36  | **bool**    | suspected to be handling whether an object's X position is locked and unaffected by a Move trigger |
| 74  | **bool**(?) | only found in the Follow Player Y trigger                                                          |

***Potentially Discarded Features***

The following key ranges are potentially discarded features, whose appearance in earlier versions of the game is unknown and untested.
<table>
  <tr>
    <th>Key Start</th>
    <th>Key End</th>
  </tr>
  <tr>
    <td align="center" colspan="2">18</td>
  </tr>
  <tr>
    <td align="center">26</td>
    <td align="center">27</td>
  </tr>
  <tr>
    <td align="center">37</td>
    <td align="center">40</td>
  </tr>
  <tr>
    <td align="center" colspan="2">53</td>
  </tr>
  <tr>
    <td align="center" colspan="2">83</td>
  </tr>
</table>
