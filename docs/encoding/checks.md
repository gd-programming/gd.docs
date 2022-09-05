# Checks

Check is a common parameter in requests, which is intended to "improve security".
It is often sent in request as `chk`.

Check is generated like so:

1. Take an arbitrary amount of values.
2. Combine them and add *salt* if there is one.
3. Apply [SHA-1][sha1] hashing to combined values and get its hexadecimal digest.
4. Apply [XOR Cipher][xor_cipher] to the digest with the desired key.
5. [Base64][base64] encode the result.

## Code

The generator can be implemented like this:

```python
from hashlib import sha1 as standard_sha1
from typing import Iterable

EMPTY = str()

concat = EMPTY.join

DEFAULT_ENCODING = "utf-8"
DEFAULT_ERRORS = "strict"


def sha1_string(
    string: str, salt: str = EMPTY, encoding: str = DEFAULT_ENCODING, errors: str = DEFAULT_ERRORS
) -> str:
    return standard_sha1((data + salt).encode(encoding, errors)).hexdigest()


def generate_check(
    values: Iterable[str],
    key: str,
    salt: str = EMPTY,
    encoding: str = DEFAULT_ENCODING,
    errors: str = DEFAULT_ERRORS,
) -> str:
    string = concat(values)

    hashed = sha1_string(string, encoding, errors)

    xored = cyclic_xor_string(hashed, key, encoding, errors)

    encoded = encode_base64_string_url_safe(xored, encoding, errors)

    return encoded
```

[XOR][xor] keys can be found [here][xor_keys].

Here is a summary of *Check* values and explanations on their generation:

## [Get Level][get_level]

| name        | description
|-------------|-----------------------------------------------|
| `levelID`   | ID of the level to download.                  |
| `inc`       | Unknown functionality. Set to `1`.            |
| `rs`        | [Random String][random_string].               |
| `accountID` | Account ID of the user downloading the level. |
| `udid`      | [UDID][udid] of the user.                     |
| `uuid`      | [UUID][uuid] of the user.                     |

## [Upload Level][upload_level]

| name    | description                                                     |
|---------|-----------------------------------------------------------------|
| `seed2` | See [generating upload seed][upload_seed] for more information. |

## [Post Comment][post_comment]

| name       | description                                                         |
|------------|---------------------------------------------------------------------|
| `userName` | Name of the user commenting.                                        |
| `comment`  | The content of the comment.                                         |
| `levelID`  | The ID of the level containing the comment (`0` for user comments). |
| `percent`  | The percentage on the level (`0` for user comments).                |
| `cType`    | The comment type (`0` for level comments, `1` for user comments).   |

## [Get Quests][get_quests]

| name  | description                                                                                   |
|-------|-----------------------------------------------------------------------------------------------|
| `chk` | To generate: [random string][random_string] of length `5` + [encoded random integer][robtop]. |

## [Get Chests][get_chests]

| name  | description                                                                                   |
|-------|-----------------------------------------------------------------------------------------------|
| `chk` | To generate: [random string][random_string] of length `5` + [encoded random integer][robtop]. |

## [Like Item][like_item]

| name        | description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| `special`   | Special value. `0` for levels, `levelID` for level comments, `commentID` for user comments. |
| `itemID`    | ID of the level comment, level or user comment.                                             |
| `like`      | Whether to like the item.                                                                   |
| `rs`        | [Random String][random_string].                                                             |
| `accountID` | Account ID of the user (dis)liking an item.                                                 |
| `udid`      | [UDID][udid] of the user.                                                                   |
| `uuid`      | [UUID][uuid] of the user.                                                                   |

## [Update Profile][update_profile]

| name           | description                          |
|----------------|--------------------------------------|
| `accountID`    | The account ID of the user updating. |
| `userCoins`    | The user coins count.                |
| `demons`       | The demons beaten count.             |
| `stars`        | The stars count.                     |
| `coins`        | The secret coins count.              |
| `iconType`     | The icon type.                       |
| `icon`         | ID of the icon.                      |
| `diamonds`     | The diamonds count.                  |
| `accIcon`      | ID of the cube selected.             |
| `accShip`      | ID of the ship selected.             |
| `accBall`      | ID of the ball selected.             |
| `accBird`      | ID of the UFO selected.              |
| `accDart`      | ID of the wave selected.             |
| `accRobot`     | ID of the robot selected.            |
| `glow`         | Whether to enable glow.              |
| `accSpider`    | ID of the spider selected.           |
| `accExplosion` | ID of the explosion selected.        |

## [Level Leaderboard][get_level_leaderboard]

| name          | description                                                               |
|---------------|---------------------------------------------------------------------------|
| `accountID`   | The account ID of the user requesting.                                    |
| `levelID`     | ID of the level to find leaderboard for.                                  |
| `percent`     | The record percentage on the level.                                       |
| `jumps`       | The total count of jumps on the level.                                    |
| `attempts`    | The total count of attempts spent.                                        |
| `seed`        | See [generating leaderboard seed][leaderboard_seed] for more information. |
| `differences` | Personal best differences, e.g `0 -> 13 -> 100 => 13,87`.                 |
| `unknown`     | Unknown functionality. Set to `1`.                                        |
| `coins`       | The coins count on the level.                                             |
| `timelyID`    | The timely ID of the level (`0` if not timely).                           |
| `seed`        | [Random String][random_string].                                           |

## Salts

| salt           | usage             |
|----------------|-------------------|
| `xI25fpAapCQg` | Level             |
| `xPT6iUrtws0J` | Comment           |
| `ysg6pUrtjn0J` | Like or Rate      |
| `xI35fsAapCRg` | User              |
| `yPg6pUrtWn0J` | Level Leaderboard |

[sha1]: https://en.wikipedia.org/wiki/SHA-1

[base64]: /encoding/base64
[xor_cipher]: /encoding/xor#xor-cipher
[xor]: /encoding/xor
[xor_keys]: /encoding/xor#xor-keys
[random_string]: /encoding/ids.md#random-string
[udid]: /encoding/ids#udid
[uuid]: /encoding/ids#uuid
[upload_seed]: /encoding/seeds#upload-seed
[leaderboard_seed]: /encoding/seeds#leaderboard-seed

[upload_level]: /server/endpoints/levels/upload_level
[get_level]: /server/endpoints/levels/get_level
[post_comment]: /server/endpoints/comments/post_comment
[get_quests]: /server/endpoints/quests/get_quests
[get_chests]: /server/endpoints/chests/get_chests
[like_item]: /server/endpoints/likes/like_item
[update_profile]: /server/endpoints/users/update_profile
[get_level_leaderboard]: /server/endpoints/levels/get_level_leaderboard
