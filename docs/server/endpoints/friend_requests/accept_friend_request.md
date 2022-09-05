# Accept Friend Request

*Accepts an incoming friend request.*

## Endpoint

| method | endpoint                      |
|--------|-------------------------------|
| `POST` | `acceptGJFriendRequest20.php` |

## Parameters

| name              | description                                                          |
|-------------------|----------------------------------------------------------------------|
| `accountID`       | Account ID of the user to accept the friend request from.            |
| `gjp`             | The [encoded password][passwords] of the user accepting the request. |
| `targetAccountID` | Account ID of the user who sent the friend request.                  |
| `requestID`       | ID of the friend request to accept.                                  |
| `secret`          | The [common secret][secrets].                                        |
| `gameVersion`?    | The current [game version][versions].                                |
| `binaryVersion`?  | The current [binary version][versions].                              |
| `gdw`?            | Whether the level is in *Geometry Dash World*.                       |

## Response

Always returns `1`, regardless of whether the friend request exists or not.

## Example

### Code

```python
import requests

# with this code, DevExit is accepting a friend request from PasswordFinders

data = {
    "accountID": 173831,         # DevExit's account ID
    "gjp": "********",           # This would be DevExit's encoded password
    "targetAccountID": 5317656,  # PasswordFinders' account ID
    "requestID": 43248797,       # request ID
    "secret": "Wmfd2893gb7",     # common secret
}

response = requests.post("http://boomlings.com/database/acceptGJFriendRequest20.php", data=data)

print(response.text)
```

### Output

```console
1
```

[passwords]: /server/topics/passwords
[secrets]: /server/topics/secrets
[versions]: /server/topics/versions
