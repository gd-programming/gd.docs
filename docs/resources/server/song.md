# Server Song Resource

## Song

Songs in Geometry Dash are supplied through a partnership with a website called [Newgrounds](https://www.newgrounds.com/audio). To be used in community made levels, a song must pass **3** requirements

> - The Song must be scouted by another artist from newgrounds
> - The Song must be whitelisted either by Robtop or an [Elder Moderator](/topics/moderators.md)
> - The artist must enable external API use in their song settings

The songs can be downloaded and used via a private API that only RobTop has access to


A typical song server response is structured with a `key~|~value~|~key~|~value` pairing and is then split with a `:`

<!-- tabs:start -->

#### **Song Example**
```md
1~|~803223~|~2~|~Xtrullor - Arcana~|~3~|~2159~|~4~|~Xtrullor~|~5~|~8.81~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F803000%2F803223_Xtrullor---Arcana.mp3%3Ff1524940372~|~7~|~UCejLri1RVC7kj8ZVNX2a53g      
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

#### Song Structure

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | ID						  | **Integer**									 | The ID of the song on Newgrounds
| 2   | name					  | **String**									 | The name of the song
| 3   | artistID				  | **Integer**									 | Newgrounds ArtistID  
| 4   | artistName				  | **String**									 | The name of the artist who made the song
| 5   | size					  | **Integer**									 | Size of the song in MB, rounded to two decimal places
| 6   | videoID 			      | **String**									 | the Video ID for the songs YouTube Video
| 7   | youtubeURL				  | **String**									 | The URL of the newgrounds user's youtube channel
| 8   | isVerified				  | **Bool**									 | if the song artist is scouted on newgrounds
| 9   | songPriority              | **Integer**                                  | priority over the song list
| 10  | link					  | **String**									 | Link to the song's mp3

