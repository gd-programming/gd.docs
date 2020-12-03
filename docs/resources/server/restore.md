# Server Restore Resource

#### RestoreGJItems

RestoreGJItems was one of the endpoints used from up to 2.0, it was used to restore stats by using a users udid. as of 2.1, it is unused

#### Restore Items Structure

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1   | Offical Levels	   | **number** | Each level is split into 3 sections: normalMode,PracticeMode,coins. if the level has been beaten, the values will be set to 1. if someone had beaten Stereo Madness in normal mode with 3 coins with no practice, the response will be 1,0,3. each level is devided with a ;
| 2   | Stars       | **number** | This is how many stars that should be given to your account
| 3   | Demons	   | **number** | This is how many demons that should be added to your account
| 4   | Jumps	   | **number** | This is how many jumps you have made on your account of its lifetime
| 5   | attempts	   | **number** | This is how many attempts you have spent on levels on your accounts lifetime
| 6   | Online levels | **number** | These are the ID's of online levels you have beaten. seperated by ,
