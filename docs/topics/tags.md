# Tags

Throughout Geometry Dash there are various interfaces in which the player an see specialised text. Specialised text is created using a custom tag which Robtop has created. As of Geometry Dash 2.11, there are 3 different types of tags.

> - `<c_>` tags assign a specific colour depending on the letter you give you give it. All `<c_>` tags must be closed with `</c>` otherwise the game will crash.<br/><br/>
> - `<d_>` tags manipulate the delay before a piece of text is sent within a dialog box. The speed you can set is within a range of `000` to `999` ms.<br/><br/>
> - `<i>` tags are the simplest tags out of everything and all they do is make text appear immediately. `<i>` tags must be closed with `</i>` otherwise the game will crash.

## \<c_> Tags

There are `9` different colour tags that are usable in Geometry Dash. below is a table of them all

**Note:** The `\` in the examples are **not** a part of a tag! It has been placed there to show the colour of the tag with the game still showing the tag as plain text.   

| tag | Colour | Hex Code |
|:----|:-------|:---------|
| `<co>` | ![Orange](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/orange.png) | `0xFFA54B` |
| `<cy>` | ![Yellow](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/yellow.png) |  `0xFFFF48`
| `<cg>` | ![Green](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/green.png) | `0x40E348` |
| `<cj>` | ![Light Blue](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/lightBlue.png) | `0x32C8FF` |
| `<cb>` | ![Blue](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/blue.png) | `0x4A52E1` |
| `<cp>` | ![Purple](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/purple.png) | `0xFF00FF`
| `<cl>` | ![Very Light Blue](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/veryLightBlue.png) | `0x60ABEF` |
| `<cr>` | ![Red](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/red.png) | `0xFFA548` |
| `<c{anything}>` | ![dark Red](https://raw.githubusercontent.com/Wyliemaster/gddocs/client/assets/examples/tags/any.png) | `0xFF0000` |

## \<d_> Tags

`<d_>` tags are used to create a delay before a specific string in dialog boxes. The game detects a `Delay Tag` if the string contains a `<d` and then it reads the next `3` characters and converts them into an `Integer` which then delays the string from being written depending on the number what was written. An example can be found [here](https://github.com/Wyliemaster/gddocs/blob/client/assets/examples/tags/D%20tag%20example.mp4?raw=true)

## \<i> Tags

`<i>` tags are the complete opposite to `Delay Tags` as they display text instantly rather than after a delay. `<i>` tags also require a closing tag which is `</i>` so the game does not crash when parsing the string. An example of an `<i>` tag can be found [here](https://github.com/Wyliemaster/gddocs/blob/client/assets/examples/tags/I%20tags%20example.mp4?raw=true)