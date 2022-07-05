# Block User

*Blocks a given user.*

## Endpoint

| method | endpoint            |
|--------|---------------------|
| `POST` | `blockGJUser20.php` |

## Parameters

| name              | description                                          |
|-------------------|------------------------------------------------------|
| `accountID`       | The blocking person's account ID.                    |
| `gjp`             | The blocking person's [encoded password][passwords]. |
| `targetAccountID` | The account ID of the person being blocked.          |
| `secret`          | The [common secret][secrets].                        |
| `gameVersion`?    | The current [game version][versions].                |
| `binaryVersion`?  | The current [binary version][versions].              |
| `gdw`?            | Whether the users are in *Geometry Dash World*.      |

## Response

Always returns `1`, regardless of whether the target account exists or not.

## Example

### Code

```python
import requests

# with this code, DevExit is blocking RobTop

data = {
    "accountID": 173831,      # DevExit's account ID
    "gjp": "********",        # this would be DevExit's encoded password
    "targetAccountID": 71,    # Robtop's account ID
    "secret": "Wmfd2893gb7",  # common secret
}

response = requests.post("http://boomlings.com/database/blockGJUser20.php", data=data)

print(response.text)
```

### Output

```console
1
```

[passwords]: /resources/server/passwords
[secrets]: /resources/server/secrets
[versions]: /resources/server/versions
