# Delete Level

*Deletes a level.*

## Endpoint

| method | endpoint                  |
|--------|---------------------------|
| `POST` | `deleteGJLevelUser20.php` |

## Parameters

| name             | description                                        |
|------------------|----------------------------------------------------|
| `accountID`      | The level creator's account ID.                    |
| `gjp`            | The level creator's [encoded password][passwords]. |
| `levelID`        | The ID of the level being deleted.                 |
| `secret`         | The [common secret][secrets].                      |
| `gameVersion`?   | The current [game version][versions].              |
| `binaryVersion`? | The current [binary version][versions].            |
| `gdw`?           | Whether the level is in *Geometry Dash World*.     |

## Response

Returns `1` if deleted or `-1` if failed or the level does not exist.

## Example

### Code

```python
import requests

# with this code, DevExit is deleting one of her levels

data = {
    "accountID": 173831,      # DevExit's account ID
    "gjp": "********",        # this would be DevExit's encoded password
    "levelID": 62689548,      # level ID
    "secret": "Wmfv2898gc9",  # common secret
}

response = requests.post("http://boomlings.com/database/deleteGJLevelUser20.php", data=data)

print(response.text)
```

### Output

```console
1
```

[passwords]: /resources/server/passwords
[secrets]: /resources/server/secrets
[versions]: /resources/server/versions
