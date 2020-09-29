# testSong.php

Gets whitelist/artist info about a song. **THIS IS A GET REQUEST.**

## Parameters

### Required Parameters

**songID** - The ID of the song on newgrounds

## Response

A human-readable response stating who the artist is, whether they're whitelisted and scouted, the song name, and whether they allow external API use

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

songID = 787311

req = requests.post(f'http://boomlings.com/database/testSong.php?songID={songID}')
print(req.text)
```

**Response**
```html
Artist: DePianoman</br>Artist is NOT Whitelisted.</br>Artist is Scouted.</br></br>Song: Newbie - Space</br>External API allowed.
```

**Human-Readable Response**
```
Artist: DePianoman
Artist is NOT Whitelisted.
Artist is Scouted.

Song: Newbie - Space
External API allowed.
```

<!-- tabs:end -->