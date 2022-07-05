# Delete Friend Request

*Deletes a friend request.*

## Endpoint

| method | endpoint                       |
|--------|--------------------------------|
| `POST` | `deleteGJFriendRequests20.php` |

## Parameters

| name              | description
|-------------------|-----------------------------------------------------------------------------------|
| `accountID`       | The account ID of the user who is deleting the friend request.                    |
| `gjp`             | The [encoded password][passwords] of the user who is deleting the friend request. |
| `targetAccountID` | The account ID of the person whose friend request is being deleted.               |
| `isSender`        | `1` if the user who deleted the friend request is the sender, otherwise `0`.      |
| `secret`          | The [common secret][secrets].                                                     |
| `gameVersion`?    | The current [game version][versions].                                             |
| `binaryVersion`?  | The current [binary version][versions].                                           |
| `gdw`?            | Whether the friend request is in *Geometry Dash World*.                           |

## Response

Always returns `1`, regardless of whether the request exists or not.

## Example

### Code

```python
import requests

# With this code, DevExit is deleting a friend request to the person with ID 314159

data = {
        "accountID": 173831,        # DevExit's account ID
        "gjp": "********",          # this would be DevExit's encoded password
        "targetAccountID": 314159,  # person's account ID
        "isSender": 1,              # DevExit sent the friend request, so this is 1
        "secret": "Wmfd2893gb7",    # common secret
}

response = requests.post("http://boomlings.com/database/deleteGJFriendRequests20.php", data=data)

print(response.text)
```

### Output

```console
1
```

[passwords]: /resources/server/passwords
[secrets]: /resources/server/secrets
[versions]: /resources/server/versions