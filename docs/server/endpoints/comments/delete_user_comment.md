# Delete User Comment

*Deletes a user comment.*

## Endpoint

| method | endpoint                   |
|--------|----------------------------|
| `POST` | `deleteGJAccComment20.php` |

## Parameters

| name             | description                                                         |
|------------------|---------------------------------------------------------------------|
| `accountID`      | The account ID of the user deleting the comment.                    |
| `gjp`            | The [encoded password][passwords] of the user deleting the comment. |
| `commentID`      | The ID of the comment being deleted.                                |
| `secret`         | The [common secret][secrets].                                       |
| `gameVersion`?   | The current [game version][versions].                               |
| `binaryVersion`? | The current [binary version][versions].                             |
| `gdw`?           | Whether the comment is in *Geometry Dash World*.                    |

## Response

`1` if the comment was deleted, `-1` if there was an error.

## Example

### Code

```py
import requests

# with this code, DevExit is deleting one of her comments

data = {
    "accountID": 173831,      # DevExit's account ID
    "gjp": "********",        # this would be DevExit's encoded password
    "commentID": 1772717,     # comment ID
    "secret": "Wmfd2893gb7",  # common secret
}

response = requests.post('http://boomlings.com/database/deleteGJAccComment20.php', data=data)

print(response.text)
```

### Output

```console
1
```

[passwords]: /server/topics/passwords
[secrets]: /server/topics/secrets
[versions]: /server/topics/versions
