# Delete Message

*Deletes a message between two users.*

## Endpoint

| method | endpoint                 |
|--------|--------------------------|
| `POST` | `deleteGJMessages20.php` |

## Parameters

| name             | description                                                         |
|------------------|---------------------------------------------------------------------|
| `accountID`      | The account ID of the user who is deleting the message.             |
| `gjp`            | The [encoded password][passwords] of the user deleting the message. |
| `messageID`      | The ID of the message being deleted.                                |
| `secret`         | The [common secret][secrets].                                       |
| `isSender`?      | Whether the user is the sender.                                     |
| `gameVersion`?   | The current [game version][versions].                               |
| `binaryVersion`? | The current [binary version][versions].                             |
| `gdw`?           | Whether the message is in *Geometry Dash World*.                    |

## Response

Always returns `1`, regardless of whether the message was deleted or not.

## Example

### Code

```python
import requests

# with this code, DevExit is deleting one of her recievied messages

data = {
    "accountID": 173831,      # DevExit's account ID
    "gjp": "********",        # this would be DevExit's encoded password
    "messageID": 3141592,     # message ID
    "secret": "Wmfd2893gb7",  # common secret
}

response = requests.post("http://boomlings.com/database/deleteGJMessages20.php", data=data)

print(response.text)
```

### Output

```console
1
```

[passwords]: /resources/server/passwords
[secrets]: /resources/server/secrets
[versions]: /resources/server/versions
