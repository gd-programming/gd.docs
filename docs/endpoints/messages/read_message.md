# Download Message

*Downloads a message, effectively reading it.*

## Endpoint

| method | endpoint                  |
|--------|---------------------------|
| `POST` | `downloadGJMessage20.php` |

## Parameters

| name             | description                                      |
|------------------|--------------------------------------------------|
| `accountID`      | The user's account ID.                           |
| `gjp`            | The user's [encoded password][passwords].        |
| `message`        | The ID of the message to read.                   |
| `secret`         | The [common secret][secrets].                    |
| `gameVersion`?   | The current [game version][versions].            |
| `binaryVersion`? | The current [binary version][versions].          |
| `gdw`?           | Whether the message is in *Geometry Dash World*. |

## Response

Returns a [message][messages].

## Example

### Code

```python
import requests

# with this code we are downloading the message with a given ID

data = {
    "accountID": 173831,      # DevExit's account ID
    "gjp": "********",        # this would be DevExit's encoded password
    "messageID": 54109536,    # message ID
    "secret": "Wmfd2893gb7",  # common secret
}

response = requests.post("http://boomlings.com/database/downloadGJMessage20.php", data=data)

print(response.text)
```

### Output

```console
6:DevExit:3:3935672:2:173831:1:54109536:4:WW91J3JlIGR1bWIgbG9s:8:1:9:0:5:TWhtIHllcCB5b3UncmUgcCBkdW1iIGxtYW8=:7:19 minutes
```

[secrets]: /resources/server/secrets
[versions]: /resources/server/versions
[passwords]: /resources/server/passwords

[messages]: /resources/server/messages
