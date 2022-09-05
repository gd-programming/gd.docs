# getGJFriendRequests20.php

Gets a user's friend requests.

## Parameters

### Required Parameters

**accountID** - The account ID of the person whose friend requests you're trying to get

**gjp** - The user's [GJP](/topics/encryption/gjp.md)

**getSent** - 0 for friend requests the user retrieved, and 1 for friend requests the user has sent

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**page** - The page of friend requests you want. Defaults to 0 if not sent

**total** - Current use is unknown, defaults to the amount of friend requests the user has, but leaving it as 0 works.

## Response

A list of [friend request objects](/resources/server/friendrequest.md) separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets all the friend requests DevExit has sent

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "getSent": 1,
    "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getGJFriendRequests20.php", data=data)
print(req.text)
```

**Response**
```py
1:XShadowWizardX:2:10670782:9:115:10:12:11:7:14:0:15:2:16:1919857:32:40482513:35:b3dv:41:1:37:3 months|1:HyperSoul:2:8417870:9:37:10:35:11:12:14:0:15:2:16:1217980:32:16160788:35:V2h5IGRpZCB5b3UgdW5mcmllbmQgbWUgOzM7:41:1:37:3 years|1:foreverbound95:2:15015378:9:1:10:0:11:3:14:0:15:0:16:4273678:32:13187274:35:SGksIFhE:41:1:37:3 years|1:Zhen M:2:19294285:9:1:10:0:11:3:14:0:15:0:16:5610849:32:13077932:35:ZWNrcyBkZWUgcnVicnVi:41:1:37:3 years|1:xSpectrum:2:12078249:9:22:10:15:11:12:14:0:15:2:16:2786272:32:11605585:35:OzM7LyBZb3UgbWFrZSBndWQgbGV2ZWxzIFw7MzsgSEFQUFkgTkVXIFlFQVJT:41:1:37:3 years|1:Michicun:2:9389282:9:46:10:16:11:12:14:0:15:2:16:2655938:32:10263453:35:Ok8gWW91IGNvbW1lbnRlZCBvbiBteSBsZXZlbCBYRA==:41:1:37:3 years|1:Findexi:2:995430:9:127:10:6:11:3:14:0:15:2:16:22264:32:9633972:35:TXkgZnJpZW5kIGhhcyAxIG1vcmUgc3RhciB0aGFuIHlvdQ==:41:1:37:3 years|1:lSuwako:2:11304810:9:3:10:3:11:12:14:6:15:2:16:215104:32:9621020:35:R0cgT04gMTMgQU5EIFlPVSBDT01NRU5URUQgT04gTVkgTEVWRUw=:41:1:37:3 years|1:Xaro:2:3032783:9:32:10:8:11:6:14:2:15:2:16:14233:32:7255586:35:UEx6IDszOyBJJ2xsIGdpdmUgeW91IG9uZSBvZiBteSBuZWlnaGJvcidzIGNvcmdpcyEgQ29yZ2lEZXJw:41:1:37:4 years|1:KaotikJumper:2:2676052:9:110:10:12:11:12:14:0:15:0:16:129311:32:3612380:35:REVBVEggQ09SUklET1IgQ09NUExFVEUhIChwcmFjdGljZSkgS2FwcGE=:41:1:37:4 years|1:D4rkGryf:2:4053881:9:87:10:21:11:40:14:0:15:2:16:270562:32:3125311:35:SGo=:41::37:4 years|1:TrueChaos:2:464435:9:60:10:9:11:15:14:0:15:2:16:100961:32:994096:35::41:1:37:4 years|1:DiMaViKuLov26:2:4993756:9:1:10:12:11:15:14:0:15:2:16:225521:32:944653:35:aW5zZXJ0bGVubnloZXJl:41:1:37:4 years|1:Krexon:2:3488114:9:28:10:12:11:16:14:0:15:2:16:1716100:32:397053:35:Ty5PIHBseiwgSSBMT1ZFIFVSIExWTFMhISEh:41:1:37:4 years|1:TheZekenator:2:3497675:9:1:10:0:11:3:14:0:15:0:16:1028719:32:372035:35:RGVtb24gQ29sbGFiIDop:41::37:4 years|1:Z3lLink:2:114346:9:30:10:3:11:12:14:0:15:0:16:677:32:191941:35::41:1:37:4 years|1:Experience D:2:9618:9:120:10:35:11:3:14:0:15:2:16:9917:32:191927:35::41:1:37:4 years|1:ZenthicAlpha:2:214216:9:108:10:12:11:3:14:0:15:2:16:638:32:191899:35:UGx6IEknZCBsaWtlIHRvIGZyaWVuZCBwbHogOkQ=:41:1:37:4 years#:0:20
```

~~Please don't hurt me I was 12/13 at the time when I sent most of those friend requests~~

<!-- tabs:end -->