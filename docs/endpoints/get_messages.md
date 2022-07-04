# getGJMessages20.php

Gets a user's DMs.

## Parameters

### Required Parameters

**accountID** - The user's account ID

**gjp** - The user's [GJP](/topics/encryption/gjp.md)

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**page** - Which page of messages you want, starting at 0. Defaults to the first if left out.

**total** - Current use is unknown, defaults to the amount of message the user has, but leaving it as 0 works.

**getSent** - 0 for the messages the user has received, 1 for the messages they sent. If left out defaults to 0

## Response

A list of [message](/resources/server/message.md) objects separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code gets all the messages DevExit has received

data = {
    "accountID": 173831, # DevExit's account ID
    "gjp": "********", # This would be DevExit's password encoded with GJP encryption
    "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getGJMessages20.php", data=data)
print(req.text)
```

**Response**
```py
6:PasswordFinders:3:17787971:2:5317656:1:52029708:4:Z2FnZw==:8:1:9:0:7:8 minutes|6:denisukrrus:3:111481197:2:11283964:1:50272016:4:UmU6IHdoeQ==:8:1:9:0:7:1 month|6:denisukrrus:3:111481197:2:11283964:1:50246431:4:UmU6IHdoeQ==:8:1:9:0:7:2 months|6:denisukrrus:3:111481197:2:11283964:1:50164382:4:d2h5:8:1:9:0:7:2 months|6:denisukrrus:3:111481197:2:11283964:1:50080479:4:UmU6IGhlcmUgc29tZSB0ZXh0:8:1:9:0:7:2 months|6:denisukrrus:3:111481197:2:11283964:1:49776472:4:aGVyZSBzb21lIHRleHQ=:8:1:9:0:7:2 months|6:denisukrrus:3:111481197:2:11283964:1:49374506:4:c29tZSB0ZXh0:8:1:9:0:7:3 months|6:GDBotAI:3:118270198:2:11676872:1:48319722:4:UmU6IHRlc3Q=:8:1:9:0:7:4 months|6:GDBotAI:3:118270198:2:11676872:1:48319704:4:UmU6IHc=:8:1:9:0:7:4 months|6:GDBotAI:3:118270198:2:11676872:1:48319544:4:UmU6IGRqZGpqZWpldWR1cg==:8:1:9:0:7:4 months|6:poopybobby:3:14711367:2:4884369:1:47666534:4:bG1hbw==:8:1:9:0:7:6 months|6:poopybobby:3:14711367:2:4884369:1:40030444:4:UmU6IFBsZWFzZSBJIGFtIGJpZyBmYW4=:8:1:9:0:7:1 year|6:mbed:3:7381956:2:1403996:1:37193331:4:ZWF0IG1l:8:1:9:0:7:1 year|6:Thatdograscal:3:5785477:2:438738:1:36479601:4:ZQ==:8:1:9:0:7:2 years|6:Destrom:3:53436248:2:7943837:1:33937410:4:SGV5:8:1:9:0:7:2 years|6:Jmoney2638:3:43797799:2:7170197:1:33310194:4:VHJhZGU=:8:1:9:0:7:2 years|6:xxgaruxx:3:42742570:2:7101156:1:31781647:4:aGVsbG8=:8:1:9:0:7:2 years|6:Thekilou13:3:4123328:2:2261538:1:31729107:4:UmU6IEkgbmVlZCBoZWxwLg==:8:1:9:0:7:2 years|6:Thekilou13:3:4123328:2:2261538:1:31718964:4:SSBuZWVkIGhlbHAu:8:1:9:0:7:2 years|6:SpuffyGD:3:5224502:2:1562647:1:31667629:4:cmVzcG9uZA==:8:1:9:0:7:2 years|6:ItsAdvyStlyes:3:13149198:2:3432452:1:31241029:4:SGV5:8:1:9:0:7:2 years|6:kittenspit:3:8254313:2:5249664:1:30287396:4:UmU6IGJhbm5lZCA=:8:1:9:0:7:2 years|6:Krysolite:3:42833795:2:7400547:1:28621608:4:SG9sYS4uLi4uLi4gPSk=:8:1:9:0:7:2 years|6:deadk3v:3:44065476:2:7249929:1:28599619:4:bXkgZnJpZW5k:8:1:9:0:7:2 years|6:BramYT:3:5806701:2:450273:1:27957196:4:TmVjcm9wb2xpWA==:8:1:9:0:7:2 years|6:WhiteRecycling:3:10200743:2:1623259:1:26307526:4:UmU6IExvdyBEZXRhaWwgTW9kZSBHbGl0Y2g_:8:1:9:0:7:3 years|6:AnonIIExt:3:1869127:2:885411:1:25162374:4:UmU6IEknbSBjb25mdXNlZC4uLg==:8:1:9:0:7:3 years|6:Rahmun1122:3:42600801:2:7164807:1:25010114:4:b21mZw==:8:1:9:0:7:3 years|6:Rahmun1122:3:42600801:2:7164807:1:25000287:4:UmU6IExpa2UgQm90:8:1:9:0:7:3 years|6:Rahmun1122:3:42600801:2:7164807:1:25000254:4:UmU6IExpa2UgQm90:8:1:9:0:7:3 years|6:TruKaveKiller:3:11066105:2:2152020:1:23254724:4:UmU6IEhlIGRpZG4ndCBoYWNr:8:1:9:0:7:3 years|6:CreatorBluey:3:6235047:2:3611307:1:21180833:4:UmU6IHd1dA==:8:1:9:0:7:3 years|6:CreatorBluey:3:6235047:2:3611307:1:21144322:4:UmU6IHd1dA==:8:1:9:0:7:3 years|6:GB RubRub Lover:3:2422340:2:2320:1:19707464:4:VGhlIGxldmVsIFVkZSBtYWRl:8:1:9:0:7:3 years|6:Infernos666:3:19144134:2:5570820:1:19035973:4:ag==:8:1:9:0:7:3 years|6:gravefruit:3:20099347:2:5827112:1:18622677:4:UmU6IEZ1Y2tpbmcgSGFja2Vy:8:1:9:0:7:3 years|6:mannewil:3:7866980:2:1088921:1:18433123:4:Z2F5:8:1:9:0:7:3 years|6:ICN:3:30727064:2:6370227:1:17198774:4:aGk=:8:1:9:0:7:3 years|6:NytromityGames:3:18307996:2:5742004:1:16667453:4:UmU6IEZpbm5nZXJiYW5nIGJldGE=:8:1:9:0:7:3 years|6:Acidscarecrow:3:18696064:2:5463621:1:16473096:4:UmU6IGhhY2tlcg==:8:1:9:0:7:3 years|6:NytromityGames:3:18307996:2:5742004:1:16159044:4:UmU6IEZpbm5nZXJiYW5nIGJldGE=:8:1:9:0:7:3 years|6:Acidscarecrow:3:18696064:2:5463621:1:16033619:4:aGFja2Vy:8:1:9:0:7:3 years|6:anisk:3:3996991:2:90613:1:15924087:4:UmU6IFdoeS4uLg==:8:1:9:0:7:3 years|6:TadokiariGD:3:12275930:2:2953169:1:14435552:4:UmU6IEdyYWNpYXM=:8:1:9:0:7:3 years|6:GThom:3:18259928:2:5961642:1:14277244:4:UmU6IERvbid0:8:1:9:0:7:3 years|6:TadokiariGD:3:12275930:2:2953169:1:13447638:4:QW1pZ29z:8:1:9:0:7:3 years|6:TadokiariGD:3:12275930:2:2953169:1:13233338:4:bWllcmRhIGRlIG5pdmVs:8:1:9:0:7:3 years|6:kittenspit:3:8254313:2:5249664:1:13228700:4:cm9idHJvbGwuLi4=:8:1:9:0:7:3 years|6:kittenspit:3:8254313:2:5249664:1:13203838:4:YmFubmVkIA==:8:1:9:0:7:3 years|6:StarFeGD:3:9790502:2:1537139:1:13105832:4:Yg==:8:1:9:0:7:3 years#74:0:50
```

<!-- tabs:end -->