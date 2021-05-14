# Level Colors
This document goes in depth on how colors, copy colors and player color work as base colors or in color/pulse triggers.

## Color classes
There are 3 color classes (not to be confused with the GD's classes). Every aspect in GD levels that use colors only take one of the classes. All of the properties that do not belong to the color class being used is ignored.

### BaseColor
This class contains a static color along with opacity and blending.

These are the properties that are important for a BaseColor:

| Name     | Type        | Description           |
|:---------|:------------|:----------------------|
| Red      | **integer** | The red component of the BaseColor. Goes from `0` to `255` |
| Green    | **integer** | The green component of the BaseColor. Goes from `0` to `255` |
| Blue     | **integer** | The blue component of the BaseColor. Goes from `0` to `255` |
| Opacity  | **float**   | The alpha component of the BaseColor. Goes from `0` to `1` |
| Blending | **bool**    | The blending property of the BaseColor |

**Note**: Blending causes the color to add its color properties by basically using the OpenGL blend mode `glBlendFunc(GL_SRC_ALPHA, GL_SRC_ALPHA)`

### PlayerColor
This class contains a static color refering to one of the player's icon color along with opacity and blending.

These are the properties that are important for a PlayerColor:

| Name         | Type        | Description           |
|:-------------|:------------|:----------------------|
| Player Color | **integer** | This determines which of the player's color is getting used. The actual values are not documented here yet. |
| Opacity      | **float**   | The alpha component of the PlayerColor. Goes from `0` to `1` |
| Blending     | **bool**    | The blending property of the PlayerColor |

### CopyColor
This class contains a dynamic color copied from another color channel. This color changes according to the current color of the channel that is being copied.

| Name            | Type        | Description           |
|:----------------|:------------|:----------------------|
| Copy Color      | **bool**    | A way to determine whenever this color class is used. More info below about determining |
| Copy Channel ID | **integer** | The color channel ID that the CopyColor is copying the color from |
| Copy Opacity    | **bool**    | This determines whenever CopyColor should also copy the opacity belonging to the color channel in `Copy Color ID` |
| Opacity         | **float**   | The alpha component of the Copy Color. If `Copy Opacity` is true. This property is ignored. |
| Blending        | **bool**    | The blending property of the CopyColor since it cannot be copied |
| Copy HSV        | **[HSV](resources/client/level-components/level-object.md?id=object-string)** | The HSV property that changes the color's tint depending on the value |

### Determining which class is used
Here is a simple JavaScript function that determines what color class the color object has:

```javascript
function getColorClass(color) {
    if (color.copy_color)
        return COPY_COLOR;
    
    if (color.player_color != PLAYER_COLOR_NONE)
        return PLAYER_COLOR;

    return BASE_COLOR;
}
```

## Color Channel ID's
Here are all of the different color id's:

| Interval  | Name              | Description           |
|:----------|:------------------|:----------------------|
| `1 - 999` | **Custom colors** | These are the colors that are avalible to the creator to use |
| `1000`    | **BG**            | This is the color of the background |
| `1001`    | **G1**            | This is the primary color of the ground |
| `1002`    | **LINE**          | This is the primary color of the ground |
| `1003`    | **3DL**           | This is the color of the 3D line objects |
| `1004`    | **OBJ**           | This is the color of alot of the white lines and boundaries of objects |
| `1005`    | **P1**            | This is the static color channel refering to the primary color of the player's icon |
| `1006`    | **P2**            | This is the static color channel refering to the secondary color of the player's icon |
| `1007`    | **LBG**           | This is the static color channel that is a lighter version of `BG`. How it exactly works it yet to be found |
| `1009`    | **G2**            | This is the primary color of the ground |
| `1010`    | **BLACK**         | This is the static color channel which is always `r: 0, g: 0, b: 0`. Used in saws that are black by default |

### Undiscovered color channel id's
`WHITE`: Static color that is always `r: 255, g: 255, b: 255`  
`LIGHTER`: A lighter version of the primary color in objects. Used in the white small blocks found in `build tab 2 on page 6`.