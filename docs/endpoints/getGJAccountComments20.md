# getGJAccountComments20.php

Gets a user's account comments.

## Parameters

### Required Parameters

**accountID** - The ID of the account whose comments you're getting

**page** - Which page of comments you want to see

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**total** - Current use is unknown, defaults to the amount of comments the user has, but leaving it as 0 works.

## Response

Returns a list of [comment objects](/resources/server/comment.md) separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code returns DevExit's account comments.

data = {
    "accountID": 173831, # DevExit's account ID
    "page": 0,
    "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getGJAccountComments20.php", data=data)
print(req.text)
```

**Response**
```py
2~NTAwMCBzdGFycyE=~4~9~9~2 months~6~1756926|2~Qmxvb2RiYXRoIEdHISEh~4~19~9~6 months~6~1745624|2~QWxsZWdpYW5jZSAxMDAl~4~2~9~6 months~6~1744292|2~SUNEWCAxMDAlIDop~4~1~9~6 months~6~1743608|2~T2ggeWVhaCBDYXRhIGFuZCBUVVAgMTAwJQ==~4~1~9~7 months~6~1742661|2~Mi4xMSBpcyBvdXQgOik=~4~43~9~2 years~6~1295890|2~SSBsaWtlIGhvdyBzb21lb25lIGRpc2xpa2UgYm90dGVkIG1vc3Qgb2YgbXkgY29tbWVudHMgOikgU2hvd3MgdGhhdCBJJ20uLi5mQW1PdVM=~4~16~9~2 years~6~1279970|2~TmVjcm9wb2xpeCBpbiAyMTYgYXR0IGluIHByYWN0aWNl~4~14~9~2 years~6~1264265|2~IkhpIEx1bmEi~4~15~9~3 years~6~1246506|2~TyB3YWl0IG15IDUwdGggZGVtb24gd2FzIGdvaW5nIHRvIGJlIEJ1Y2sgRm9yY2UsIG5vdCByZWFsbHkgY2VsZWJyYXRvcnkuLi4=~4~7~9~3 years~6~1238082#67:0:10
```

<!-- tabs:end -->