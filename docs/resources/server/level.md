# Server Level Resource

## Level

A level is a playable object in Geometry Dash, namely coming with data that explains on what it is, and the string that the client interprets, known as a [level string](/topics/levelstring_encoding_decoding).

### Level Object

Keys indicated with an asterisk (\*) are only returned from the downloadGJLevel22 endpoint.

#### Level Structure

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | Level ID                  | **number**                                   | The id of the level                                                      
| 2   | Level Name                | **string**                                   | The name of the level                                                    
| 3   | Description               | **string**                                   | The level description, encoded in [base64](/topics/encryption/base64.md) 
| 4*  | Level String              | **[level string](/topics/levelstring_encoding_decoding)**| All the data for the level                               
| 5   | Version                   | **number**                                   | The version of the level published                                       
| 6   | Player ID                 | **number**                                   | The player ID of the level author
| 8   | Difficulty Denominator    | **number**                                   | Returns 0 if the level is N/A, returns 10 if a difficulty is assigned. Historically used to be the amount of people who have voted on the difficulty.
| 9   | Difficulty Numerator      | **number**                                   | The nominator used for calculating the level difficulty. Divided by the denominator to get the difficulty icon. Nowadays just 0 = unrated, 10 = easy, 20 = normal, 30 = hard, 40 = harder, 50 = insane. Can be also used to determine the demon difficulty as a side-effect of the voting system. Historically used to be the sum of stars from all votes
| 10  | Downloads                 | **number**                                   | The amount of times the level has been downloaded                          
| 11  | Unknown                   | **unknown**                                  | Unknown purpose, the only observed returned values were either 0, an empty string or 1. Removed in the 2.1 update
| 12  | Official Song             | **number**                                   | The official song number used by the level, if applicable         
| 13  | Game Version              | **number** 			                   	     | The GD version the level was uploaded in. Versions 1.0 to 1.6 use version numbers 1 to 7 respectively. Version 10 is 1.7. Otherwise, divide the version number by ten to get the correct number. 
| 14  | Likes                     | **number** 			                   	     | The amount of likes the level received
| 15  | Length                    | **number** 			                   	     | A number from 0-4, where 0 is tiny and 4 is XL     
| 17  | Demon                     | **boolean** 				                 | If the level's difficulty is demon    
| 18  | Stars                     | **number** 				                     | The amount of stars rewarded for completing the level
| 19  | Featured Score            | **number** 	                                 | 0 if the level is not featured, otherwise a positive number. The higher it is, the higher the level appears on the featured levels list. 
| 25  | Auto                      | **boolean** 				                 | If the level's difficulty is auto
| 27* | Password                  | **encrypted string** 	                     | The password required to copy the level. It is XOR encrypted with a key of 26364
| 28* | Upload date               | **string** 				                     | The approximate date the level was uploaded on 
| 29* | Update date               | **string** 				                     | The approximate date the level was last updated on 
| 30  | Copied ID                 | **number** 				                     | The ID the of the original level (if the level was copied)   
| 31  | Two Player                | **boolean** 				                 | Whether the level uses two player mode
| 35  | Custom Song ID            | **number** 				                     | The ID of the custom Newgrounds song used in the level    
| 36  | Extra String              | **string**                                   | The extraString passed when uploading the level. Its use is currently unknown
| 37  | Coins                     | **number** 				                     | The number of user coins placed in the level      
| 38  | Verified Coins            | **boolean** 				                 | If the level's user coins are verified (silver)
| 39  | Stars Requested           | **number** 				                     | The star value requested for the level     
| 40* | Low Detail Mode           | **boolean** 				                 | If the level has a low detail checkbox    
| 41* | Daily Number              | **number** 				                     | Daily/weekly levels only. Returns which daily/weekly the level was (e.g. the 500th daily level). Subtract 100,000 if the level is weekly
| 42  | Epic                      | **boolean** 				                 | If the level has an epic rating    
| 43  | Demon Difficulty          | **number** 				                     | The difficulty of the demon rating. 3 = easy, 4 = medium, 0 = hard, 5 = insane, 6 = extreme. Can also be used to determine the level difficulty non-demons had before rating as a side-effect of the voting system.
| 45  | Objects                   | **number** 				                     | The amount of objects in the level, used to determine if the level is considered "large". It caps at 65535     
| 46  | Unknown                   | **number** 				                     | 
| 47  | Unknown                   | **number** 				                     | 
| 48  | Unknown                   | **unknown**                                  | Added in 2.1, seems to have been removed shortly after
