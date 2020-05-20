# Client Guideline String Resource

## Guideline String
The guideline string is the linearized string format of the guidelines of a level. It is contained within the [inner level string](inner-level-string.md). It is formatted as follows:

`{guideline}~{guideline}~{guideline}~...`, where `guideline` is formatted as:

`{timestamp}~{color_value}`, with `timestamp` being in seconds and both values being floats.

E.g.:

`0.5~0.8~0.7~0.9~1~1` represents the following guidelines:

- Guideline (`0.5~0.8`)
  - Timestamp: 0.5
  - Color value: 0.8 (orange)
- Guideline (`0.7~0.9`)
  - Timestamp: 0.7
  - Color value: 0.9 (yellow)
- Guideline (`1~1`)
  - Timestamp: 1
  - Color value: 1 (green)

## Color Values
The valid supported color values are the following:

| Value | Color  |
|:------|:-------|
| 0.8   | orange |
| 0.9   | yellow |
| 1.0   | green  |

***Unexpected Behavior Information***

- A color value of 0 will result in an orange guideline.
- Color values less than 0.8 will result in a transparent guideline.
- Color values above 0.8 that do not match the yellow or the green guideline color values will result in an orange guideline.

### Trivia
- A number of guidelines with color value 0.7 were found in Blast Processing, which are all transparent.
