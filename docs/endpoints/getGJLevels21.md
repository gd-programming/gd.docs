# getGJLevels21.php

Gets a list of levels.

## Parameters

### Required Parameters

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**type** - Controls the fetch priority.   
and if this is left out it's most liked

| type | desc |
| ---- | ---- |
| 0 | most liked |
| 1 | most downloaded |
| 2 | default for the search button (also most liked) |
| 3 | trending |
| 4 | recent |
| 5 | user's levels (uses the player ID, **not the account ID,** in the `str` parameter to get which user) |
| 6 | featured |
| 7 | magic |
| 8 | moderator sent levels (also requires the `accountID` and the `gjp` of a GD moderator) |
| 10 | list of specific levels (this uses the `str` parameter as a comma separated list of level IDs), used in map packs |
| 11 | recently awarded |
| 12 | levels from people you follow |
| 13 | friends |
| 15 | most liked in GD World |
| 16 | hall of fame |
| 17 | also featured |
| 18 | unknown because it's always empty (maybe mod or robtop only?) |

**str** - Search string, required when `type` is 5 or 10

**diff** - Difficulty filter. A list of integers denoting the different difficulties. 

| diff | desc |
| ---- | ---- |
| -1 | N/A (doesn't work) |
| -2 | Demons (use the **demonFilter** parameter to denote which demon type to search) |
| 1 | Easy |
| 2 | Normal |
| 3 | Hard |
| 4 | Harder |
| 5 | Insane |

**len** - Length Filter.

| len | desc |
| --- | ---- |
| 0 | Tiny |
| 1 | Short |
| 2 | Medium |
| 3 | Long |
| 4 | XL |

**page** - Which page of levels you want to see

**total** - Current use is unknown, defaults to the amount of levels available, up to 9999, but leaving it out or as 0 works.

**uncompleted** - Uncompleted filter. 0 for off, 1 for on.

**onlyCompleted** - Completed filter. 0 for off, 1 for on.

**featured** - Featured filter. 0 for off, 1 for on.

**original** - Original filter. 0 for off, 1 for on.

**twoPlayer** - Two Player Mode filter. 0 for off, 1 for on.

**coins** - Coins filter. 0 for no coins, 1 for any amount of coins.

**epic** - Epic filter. 0 for off, 1 for on.

**followed** - Required if `type` is 12. A comma separated list of player IDs, **not account IDs** of the people you follow.

**demonFilter** - Denotes which difficulty of demon to search for if `diff` is -2. If left out it will search for all demons, otherwise it's 1-5 for Easy to Extreme, respectively.

**secret** - Wmfd2893gb7

## Response

Returns a list of [level objects](/resources/server/level) separated by pipes `|` and sorted by the parameters, a list of objects denoting the authors sorted by increasing player ID (format is `PLAYERID:USERNAME:ACCOUNTID`) which are also separated by pipes `|`, and a list of [song objects](/resources/server/song) sorted by increasing song ID and separated by `~:~`. The indexers for each are `:`, `:` and `~|~` respectively.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets the most recent epic-rated Hard Demons

data = {
    "secret": "Wmfd2893gb7",
    "type": 4,
    "diff": -2,
	"epic": 1,
    "demonFilter": 3
}

req = requests.post("http://boomlings.com/database/getGJLevels21.php", data=data)
print(req.text)
```

**Response**
```py
1:62282482:2:DEAD BEAT:5:1:6:28770186:8:10:9:30:10:94536:12:0:13:21:14:2990:17:1:43:0:25::18:10:19:24971:42:1:45:56373:3:YWZ0ZXIgdGhyZWUgbW9udGhzIG9mIGhhcmQgd29yayBpIGZpbmFsbHkgcHJlc2VudCB0byB5b3UgdGhlIGxvbmcgYXdhaXRlZCBzZXF1ZWwgdG8gbXVyZGVyIG1lbG9keQ==:15:3:30:60376208:31:0:37:1:38:1:39:10:46:1:47:2:35:541786|1:62028241:2:Eternelle Vehemence:5:14:6:4761912:8:10:9:30:10:89174:12:0:13:21:14:5187:17:1:43:0:25::18:10:19:24968:42:1:45:65535:3:c3VmZmVyLCB1bnRpbCBldGVybml0eSBlbmRzLg==:15:4:30:0:31:0:37:3:38:1:39:10:46:1:47:2:35:896821|1:60927712:2:PERIHELION:5:1:6:9456326:8:10:9:30:10:8864:12:0:13:21:14:725:17:1:43:0:25::18:10:19:24970:42:1:45:65535:3:VG9vayBmb3JldmVyIHRvIG1ha2UsICBidXQgaXQgaXMgZmluYWxseSBoZXJlLiBSZWxsIC0gU21pbnggLSBHYWx6byAtIFdoaXRlaGVhZCAtIFNwdTduaXggLSBXaWsgLSBLbm90cyAtIEh5cGVyZmxhbWU=:15:3:30:51261866:31:0:37:0:38:1:39:10:46:1:47:2:35:790560|1:59502709:2:Supreme:5:4:6:2595697:8:10:9:30:10:48776:12:0:13:21:14:2471:17:1:43:0:25::18:10:19:24956:42:1:45:65535:3:aW5zZXJ0ICQzNTAgVVNEIHRvIHBsYXkgW0J5IENyZXBlcyAmIEVuWm9yZV0gZml4ZWQgYnVuY2ggb2YgYnVncyBhcm91bmQgOTAlICwgYW5kIGFkZGVkIFVMRE0gd2hlbiB5b3UgYWN0aXZhdGUgTERNICwgdXBkYXRlcyBjb21pbmcgc29vbg==:15:3:30:58794967:31:0:37:2:38:1:39:10:46:1:47:2:35:754856|1:59413155:2:HASH:5:1:6:1424041:8:10:9:30:10:28010:12:0:13:21:14:1576:17:1:43:0:25::18:10:19:24953:42:1:45:52312:3:YSBsZXZlbCB3aXRoIG1hbnkgY29sb3Vycy4=:15:3:30:52863418:31:0:37:0:38:0:39:10:46:1:47:2:35:216300|1:59352979:2:RANYER:5:5:6:9441630:8:10:9:30:10:93328:12:0:13:21:14:3681:17:1:43:0:25::18:10:19:24949:42:1:45:65535:3:YW1hemluZyBjb2xsYWJvcmF0aW9uIC4uIEkgaG9wZSB5b3UgbGlrZSBpdCAuLi4gd2l0aCBhIGxvdCBvZiBkZWRpY2F0aW9uIHdlIGJyaW5nIHlvdSByYW55ZXIgOikgZ29vZCBsdWNrIGFuZCBlbmpveSBpdCArOTAwMDAgT0JKIDowIExETT8gOyk=:15:3:30:59193188:31:0:37:1:38:1:39:10:46:1:47:2:35:658059|1:59315849:2:Double Dash:5:5:6:3624826:8:10:9:30:10:102653:12:0:13:21:14:11269:17:1:43:0:25::18:10:19:24953:42:1:45:65535:3:IkR1YWwgZ2FtZW1vZGUgaXMgdGhlIGJlc3QgZ2FtZW1vZGUiIH4gSm9uYXRoYW5HRCB8IEEgY29sb3JmdWwgMiBtaW51dGVzIG9mIG9ubHkgZHVhbHMgKCsgcGxheWVyIGNvbG9ycykgfCBHTCwgSEYsIGRvbid0IGRpZSBhdCA5OSUgOCk=:15:4:30:0:31:0:37:0:38:0:39:10:46:1:47:2:35:872453|1:59309294:2:Archaic:5:6:6:13003836:8:10:9:30:10:33708:12:0:13:21:14:1700:17:1:43:0:25::18:10:19:24949:42:1:45:65535:3:QW1hemluZyBjb2xsYWIgd2l0aCBWbGFpbmUgYW5kIE1yY3lsZGUsIGdhbWVwbGF5IGJ5IEVuem9yZSBhbmQgR2FycC4gRW5qb3l5ISE=:15:3:30:59045071:31:0:37:0:38:0:39:10:46:1:47:2:35:791611|1:58994346:2:Agios:5:2:6:18682953:8:10:9:30:10:67315:12:0:13:21:14:2226:17:1:43:0:25::18:10:19:24940:42:1:45:65535:3:N3RoIE5veHR1cm5hbCBUZWFtIE1DLCBXZSB1c2UgYSBsaXR0bGUgbmljZSB0aGVtZSBpbiB0aGlzISEgIEhvcGUgeW91IGVuam95IG91ciB3b3JrLi4gIFtWZXJpZmllZCBieSBTaXJaYWlzc10=:15:3:30:58581054:31:0:37:0:38:0:39:10:46:1:47:2:35:728233|1:58932971:2:Divine Descendance:5:5:6:11876184:8:10:9:30:10:11239:12:0:13:21:14:882:17:1:43:0:25::18:10:19:24960:42:1:45:65535:3:VmVyaWZpZWQgYnkgaVRodW5kZXIxMiwgdmlkZW8gb24gaGlzIFlUIGNoYW5uZWw=:15:3:30:0:31:0:37:3:38:1:39:10:46:1:47:2:35:713127#1424041:flash:127035|2595697:CrispyCrepes:117663|3624826:Zoroa:44967|4761912:Vrymer:411964|9441630:CatronixGD:1462499|9456326:Galzo:1463681|11876184:TroxxP1:2638799|13003836:SirZaiss:3749813|18682953:TeamNoX:5594928|28770186:swwft:6434750#1~|~216300~|~2~|~Necromancy (drum n bass)~|~3~|~772~|~4~|~zirconmusic~|~5~|~6.15~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F216000%2F216300_04___Necromancy.mp3~|~7~|~~|~8~|~1~:~1~|~541786~|~2~|~NK - Fairydust~|~3~|~1895~|~4~|~Rukkus~|~5~|~7.37~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F541000%2F541786_NK---Fairydust.mp3~|~7~|~~|~8~|~1~:~1~|~658059~|~2~|~Pursuit~|~3~|~2787~|~4~|~BoomKitty~|~5~|~7.28~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F658000%2F658059_Pursuit.mp3~|~7~|~UCwHQ93ecuoQne93sgY-x8Nw~|~8~|~1~:~1~|~713127~|~2~|~Synergetic Enigma~|~3~|~1861~|~4~|~DanJohansen~|~5~|~10.21~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F713000%2F713127_Synergetic-Enigma.mp3~|~7~|~~|~8~|~1~:~1~|~728233~|~2~|~FWLR - Badass Bae~|~3~|~50638~|~4~|~FWLRmusic~|~5~|~7.75~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F728000%2F728233_FWLR---Badass-Bae.mp3%3Ff1486917017~|~7~|~~|~8~|~1~:~1~|~754856~|~2~|~[Complextro] Viscerality - Upgrade~|~3~|~48232~|~4~|~VisceralSounds~|~5~|~11.22~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F754000%2F754856_Complextro-Viscerality---U.mp3~|~7~|~~|~8~|~1~:~1~|~790560~|~2~|~Forgathering Firefly~|~3~|~47526~|~4~|~Codly~|~5~|~12.79~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F790000%2F790560_Forgathering-Firefly.mp3%3Ff1518710297~|~7~|~~|~8~|~1~:~1~|~791611~|~2~|~Viscerality - Bliss [Intervention EP]~|~3~|~48232~|~4~|~VisceralSounds~|~5~|~10.38~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F791000%2F791611_Viscerality---Bliss-Interv.mp3%3Ff1519159342~|~7~|~~|~8~|~1~:~1~|~872453~|~2~|~Shining Sprinter~|~3~|~1068~|~4~|~megawolf77~|~5~|~3.51~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F872000%2F872453_Shining-Sprinter.mp3%3Ff1562814299~|~7~|~~|~8~|~1~:~1~|~896821~|~2~|~Panda Eyes - Anybody Else~|~3~|~45754~|~4~|~PandaEyesOfficial~|~5~|~13.92~|~6~|~~|~10~|~https%3A%2F%2Faudio.ngfiles.com%2F896000%2F896821_Panda-Eyes---Anybody-Else.mp3%3Ff1575713545~|~7~|~~|~8~|~1#91:0:10#2a84bec46c4d1304c17b4c73252faf92be4dac24
```

<!-- tabs:end -->
