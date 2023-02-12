# submitGJUserInfo.php

Submits level completion data for use in restoreGJItems.php

## Parameters

### Required Parameters

**udid** - A unique identifier for the user's device, can be replaced with anything

**accountID** - The user's account ID

**levelsInfo** - A list of online levels you have completed from newest to oldest, in the format `1,[levelID],2,[attempts],3,[jumps],4,[levelSize]` and separated by semicolons `;`:

- `[levelID]`: the ID of the completed level
- `[attempts]`: the amount of attempts it took to complete
- `[jumps]`: the amount of clicks it took to complete across all attempts
- `[levelSize]`: length of compressed levelString (key 4)

**secret** - Wmfd2893gb7

## Response

-1 if parameters are incorrect, otherwise a 500 error code

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"udid": "605BE9FD-300E-49EA-A45C-B272EE64D3E0",
  "accountID": 23590959,
  "levelsInfo": "1,132,2,3,3,29,4,1704;1,128,2,1,3,25,4,1004",
  "secret": "Wmfd2893gb7"
}

req = requests.post('http://www.boomlings.com/database/submitGJUserInfo.php', data=data)
print(req.status_code)
```

**Response**
```py
500
```

<!-- tabs:end -->
