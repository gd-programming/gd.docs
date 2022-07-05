# Download Level

*Downloads a level and related information.*

## Parameters

| name             | description                                                                           |
|------------------|---------------------------------------------------------------------------------------|
| `levelID`        | The ID of the level to download. See [special level IDs][special_level_ids] for more. |
| `secret`         | The [common secret][secrets].                                                         |
| `gameVersion`?   | The current [game version][versions].                                                 |
| `binaryVersion`? | The current [binary version][versions].                                               |
| `gdw`?           | Whether the level is in *Geometry Dash World*.                                        |
| `accountID`?     | The account ID of the user downloading the level.                                     |
| `gjp`?           | The [encoded password][passwords] of the user downloading the level.                  |
| `udid`?          | The [UDID][udid] of the user who is downloading the level.                            |
| `uuid`?          | The [UUID][uuid] of the downloading the level.                                        |
| `inc`?           | Unknown functionality. Set to `1`.                                                    |
| `extras`?        | Unknown functionality. Set to `0`.                                                    |
| `rs`?            | Random string. See [here][random_string].                                             |
| `chk`?           | Check. See [here][download_level].                                                    |

## Response

Returns a [level][levels].

## Example

### Code

```python
import requests

# with this code we are getting the level Test by DevExit

data = {
    "levelID": 62687277,      # level ID
    "secret": "Wmfd2893gb7",  # common secret
}

response = requests.post("http://boomlings.com/database/downloadGJLevel22.php", data=data)

print(response.text)
```

### Output

```console
1:62687277:2:Test:3:QSB0ZXN0IGxldmVsIGZvciB0aGUgR0QgRG9jcyE=:4:H4sIAAAAAAAAC6WQwQ3DIAxFF3IlfxsIUU6ZIQP8AbJChy_GPSZqpF7-A4yfDOfhXcCiNMIqnVYrgYQl8rDwBTZCVbkQRI3oVHbiDU6F2jMF_lesl4q4kw2PJMbovxLBQxTpM3-I6q0oHmXjzx7N0240cu5w0UBNtESRkble8uSLHjh8nTubmYJZ2MvMrEITEN0gEJMxlLiMZ28frmj:5:1:6:3935672:8:0:9:0:10:1:12:0:13:21:14:0:17::43:0:25::18:0:19:0:42:0:45:1:15:0:30:55610687:31:0:28:1 hour:29:1 hour:35:546561:36::37:0:38:0:39:50:46::47::40::27:AQcHBwEL#1bae6491cc87c72326abcbc0a7afaee139aa7088#f17c5a61f4ba1c7512081132459ddfaaa7c6f716
```

[special_level_ids]: /resources/server/special_level_ids
[secrets]: /resources/server/secrets
[versions]: /resources/server/versions
[passwords]: /resources/server/passwords

[levels]: /resources/server/levels

[udid]: /topics/encoding/ids#udid
[uuid]: /topics/encoding/ids#uuid
[random_string]: /topics/encoding/ids#random-string
[download_level]: /topics/encoding/checks#download-level
