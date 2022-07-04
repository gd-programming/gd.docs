# Delete Level Comment

*Deletes a level comment.*

## Endpoint

The current endpoint is `deleteGJComment20.php`.

## Parameters

| name             | description                                                                |
|------------------|----------------------------------------------------------------------------|
| `accountID`      | The account ID of the user who is deleting the comment.                    |
| `gjp`            | The [encoded password][passwords] of the user who is deleting the comment. |
| `commentID`      | ID of the comment.                                                         |
| `levelID`        | ID of the level the comment is on.                                         |
| `secret`         | The [common secret][secrets].                                              |
| `gameVersion`?   | The current [game version][versions]                                       |
| `binaryVersion`? | The current [binary version][versions]                                     |
| `gdw`?           | Whether the level comment is in *Geometry Dash World*.                     |

## Response

Returns `1` if deleted, `-1` if failed.

## Example

### Code

```python
import requests

# with this code, DevExit is deleting the comment on a level

data = {
        "accountID": 173831,      # DevExit's account ID
        "gjp": "********",        # this would be DevExit's encoded password
        "commentID": 31415926,    # comment ID
        "levelID": 54953085,      # ID of the level the comment is on
        "secret": "Wmfd2893gb7",  # common secret
}

response = requests.post("http://boomlings.com/database/deleteGJComment20.php", data=data)

print(response.text)
```

### Output

```console
1
```
