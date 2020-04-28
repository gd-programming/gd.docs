# Server Level Resource

## Level

A level is a playable object in Geometry Dash, namely coming with data that explains on what it is, and the string that the client interprets, known as a [level string](#).

### Level Object

#### Level Structure

| Key | Name/Value    | Type                                         | Description                                                              |
|-----|---------------|----------------------------------------------|--------------------------------------------------------------------------|
| 1   | Level ID      | **number**                                   | the id of the level                                                      |
| 2   | Level Name    | **string**                                   | the name of the level                                                    |
| 3   | Lescription   | **string**                                   | the level description, encoded in [base64](/topics/encryption/base64.md) |
| 4   | Level String  | **[level string]()**                         | the level string, or the playable level                                  |
| 5   | Level Version | **number**                                   | the version of the level published                                       |
| 6   | User ID       | **[user](/resources/user.md).id**            | the id of the level publisher                                            |
| 9   | Stars         | **number**                                   | the stars the level is worth                                             |
| 10  | Downloads     | **number**                                   | the amount of times the level's been downloaded                          |
| 12  | Audio Track   | **[Audio Track](/reference?id=audio-track)** | the audio track the levels used with (if any)                            |
