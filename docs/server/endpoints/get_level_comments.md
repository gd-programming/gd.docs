# getGJComments21.php

Gets a level's comments.

## Parameters

### Required Parameters

**levelID** - The ID of the account whose comments you're getting

**page** - Which page of comments you want to see

**secret** - Wmfd2893gb7

### Optional Parameters

**gameVersion** - 21

**binaryVersion** - 35

**gdw** - 0

**mode** - Set to 0 for most recent, and 1 for most liked

**total** - Current use is unknown, defaults to the amount of comments the user has, but leaving it as 0 works.

## Response

Returns a list of [comment objects](/resources/server/comment.md) separated by a pipe `|`.

## Example

<!-- tabs:start -->

### **Python**

```py
import requests

# This code returns the comments on VSC by Bo.

data = {
    "levelID": 60805571,
    "page": 0,
    "secret": "Wmfd2893gb7"
}

req = requests.post("http://boomlings.com/database/getGJComments21.php", data=data)
print(req.text)
```

**Response**
```py
2~ODk4IHRvIGp1c3QgYmVhdCBpbiBwcmFjdGlzZSBtb2RlIGdnIQ==~3~133533914~4~0~7~0~10~0~9~2 minutes~6~31468976:1~depolo~9~41~10~25~11~10~14~1~15~0~16~13735168|2~bm8gY2xpcGVy~3~128127333~4~0~7~0~10~3~9~7 minutes~6~31468705:1~ghjking~9~35~10~15~11~5~14~3~15~2~16~13391416|2~d29yc3QgbGV2ZWwgaW4gdGhlIGdhbWU=~3~19792712~4~0~7~0~10~0~9~11 minutes~6~31468489:1~neondash223~9~44~10~3~11~15~14~1~15~0~16~7609353|2~SGFja2Vy~3~114829268~4~2~7~0~10~0~9~7 hours~6~31448450:1~ThomyTamato~9~35~10~16~11~12~14~4~15~0~16~13280260|2~Z2cgMSBhdHQgKEkgaGFja2VkIGFzIGEgam9rZSk=~3~57842991~4~-4~7~1~10~100~9~8 hours~6~31445587:1~redhotgamerrhg~9~11~10~11~11~5~14~0~15~0~16~8031689|2~aSBjYW50IA==~3~120037785~4~0~7~0~10~10~9~9 hours~6~31441402:1~spot1fy~9~17~10~40~11~41~14~6~15~0~16~11870350|2~cmlwIG1vYmlsZQ==~3~93559688~4~1~7~0~10~0~9~10 hours~6~31437014:1~RandomNameGMD~9~30~10~1~11~12~14~0~15~2~16~10079340|2~Z2cgRVogMiBhdHRlbXB0cyBvbiBtb2JpbGUgWEQ=~3~93957318~4~-4~7~1~10~100~9~10 hours~6~31435874:1~MixtureGD2~9~36~10~40~11~40~14~2~15~2~16~13427406|2~diBCbyB1c2VkIG5vc3Bpa2Ugc28gdGVjaG5pY2FsbHkgbm8=~3~119607081~4~-4~7~1~10~0~9~12 hours~6~31427765:1~DailyChatMoment~9~1~10~12~11~12~14~4~15~2~16~13696752|2~SSBhbSBCbyBJIHBhc3NlZCBpdCB3aXRoIG5vY2xpcCA6RA==~3~130487134~4~-5~7~1~10~100~9~13 hours~6~31421248:1~FernanDash488~9~22~10~9~11~11~14~1~15~0~16~13526460#5705:0:10
```

<!-- tabs:end -->