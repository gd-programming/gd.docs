# getGJRewards.php

Gets the rewards from the chests.

## Parameters

### Required Parameters

**udid** - A unique identifier for the user's device, can be replaced with anything

**secret** - Wmfd2893gb7

**chk** - 5 random chars appended to the beginning of a random number [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**accountID** - Account ID of the user

**gjp** - The user's [GJP](/topics/encryption/gjp.md)

**uuid** - Seemingly a random number also used for identifying someone

**rewardType** - 0 for fetching time left to wait for each chest, 1 for getting small chest and 2 for getting large chest. Defaults to 0 if left out

**r1** - A random 3-5 digit number

**r2** - A random 3-5 digit number

## Response

A list of attributes of the Rewards, separated by colons `:` as follows:
- A random string of 5 characters
- User's player ID
- The number used for the `chk`
- `udid`
- User's account ID
- Small chest time remaining
- Small chest's rewards in a comma separated list
	- Orbs
	- Diamonds
	- Shards (0 is Fire, 1 is Ice, 2 is Poison, 3 is Shadow, and 4 is Lava)
	- Key (If it's not 0, give a key)
- Large chest time remaining
- Large chest's rewards in a comma separated list
- Maybe the amount of rewards claimed?
- `rewardType`

This list is then [XOR](/topics/encryption/xor.md)'d and [URL-Safe Base64](/topics/encryption/base64.md) encoded. Then it is separated with its hash by a pipe `|`. It also has a random string of 5 characters appended to the front.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

data = {
	"accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "udid": "605BE9FD-300E-49EA-A45C-B272EE64D3E0",
    "secret": "Wmfd2893gb7",
    "chk": f"{''.join(random.choice('1234567890qwertyuiopaqsdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM') for i in range(5))}{base64.b64encode(xor_cipher(str(random.randint(10000, 1000000)), '59182').encode()).decode()}",
    "rewardType": 1
}

req = requests.post("http://boomlings.com/database/getGJRewards.php", data=data)
print(req.text)
```

**Response**
```py
DA96FcVVmQnEPCggLBwMOAwIGDAAGDgsPcBFbU1sZQU1GFXtiGFpQS1QCAwIKCQsDDwsHDAQPDQEUAxkJHQgIBA4DDAgCDQcMAg8LAQgeAxUFFAIPDAILCAQ=|3f5f0ad92a601380e7eea113c223be94ff75304d
```

<!-- tabs:end -->