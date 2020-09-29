# Server Song Resource

## Song

A song is a resource from newgrounds that people can sync their levels to, and information about them is sent to the client upon request.

#### Song Structure

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | ID						  | **number**									 | The ID of the song on Newgrounds
| 2   | Name					  | **string**									 | The name of the song
| 3   | Unknown					  | **number**									 | Unknown
| 4   | Artist Name				  | **string**									 | The name of the artist who made the song
| 5   | Size					  | **number**									 | Size of the song in MB, rounded to two decimal places
| 6   | Unknown					  | **unknown**									 | Always empty
| 7   | Youtube URL				  | **string**									 | The URL of the newgrounds user's youtube channel
| 8   | Unknown					  | **number**									 | Either 0 or 1. Not sure what it denotes
| 10  | Link					  | **string**									 | Link to the song's mp3