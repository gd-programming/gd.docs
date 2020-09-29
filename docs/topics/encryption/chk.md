# CHK

CHK is a common parameter in requests, which is intended to improve security.
CHK is sent in request often as `chk`.

CHK is generated like so:

1. Take arbitrary amount of values.
2. Combine them and add *salt* if there is one.
3. Apply [SHA-1](https://en.wikipedia.org/wiki/SHA-1) hashing to combined values and get its hexdigest.
4. Apply [XOR-Cipher](topics/encryption/xor.md) to the hexdigest with desired key.
5. [Base64](topics/encryption/base64.md) encode the result.

CHK generator can be implemented like this:

<!-- tabs:start -->

### **Python**

```py
import base64
import hashlib  # sha1() lives there


def generate_chk(values: [int, str] = [], key: str = "", salt: str = "") -> str:
    values.append(salt)

    string = ("").join(map(str, values))  # assure "str" type and connect values

    hashed = hashlib.sha1(string.encode()).hexdigest()
    xored = xor_cipher(hashed, key)  # we discuss this one in encryption/xor
    final = base64.urlsafe_b64encode(xored.encode()).decode()

    return final
```

<!-- tabs:end -->

XOR keys can be found [here](topics/encryption/xor.md?id=xor-keys).

Here is a list of CHK values and explanations on their generation:

## Download level

- LevelID
- Inc
- [RS](topics/encryption/id.md?id=rs)
- AccountID
- [UDID](topics/encryption/id.md?id=udid)
- [UUID](topics/encryption/id.md?id=uuid)

## Upload level

- seed2

seed2 is generated from level data:

<!-- tabs:start -->

### **Pseudocode**

```plain
seed2 = ""
space = length of levelString / 50

for i in range 50:
    seed2 += levelString[space * i]
   
seed2 += "xI25fpAapCQg"
sha1 encode seed2
xor encrypt seed2 with key 41274
```

### **Python**

```py
def generate_upload_seed(data: str, chars: int = 50) -> str:
    # GD currently uses 50 characters for level upload seed
    if len(data) < chars:
        return data  # not enough data to generate
    step = len(data) // chars
    return data[::step][:chars]
```

<!-- tabs:end -->

## Comment

- Username
- Comment Content
- LevelID
- Percentage
- Comment Type (0 = Level, 1 = User).

## Challenges

- Random Number

Random number consisting of *5* digits.

## Rewards

- Random Number

Random number consisting of *5* digits.

## Like

- Special (0 = Level, LevelID = Level Comment, CommentID = Other Comment)
- ItemID
- Like (0 = dislike, 1 = like)
- Type (1 = Level, 2 = Level Comment, 3 = Other Comment)
- [RS](topics/encryption/id.md?id=rs)
- AccountID
- [UDID](topics/encryption/id.md?id=udid)
- [UUID](topics/encryption/id.md?id=uuid)

## User Profile

- AccountID
- UserCoins
- Demons
- Stars
- Coins
- IconType
- Icon
- Diamonds
- CubeID
- ShipID
- BallID
- UFOID
- WaveID
- RobotID
- Glow (0 = disabled, 1 = enabled)
- SpiderID
- ExplosionID

## Level Leaderboard

- AccountID
- LevelID
- Percentage
- Jumps
- Attempts
- Seed

Seed can be generated like this:

<!-- tabs:start -->

### **Python**

```py
def generate_leaderboard_seed(
    jumps: int, percentage: int, seconds: int, has_played: bool = True
) -> int:

    return (
        1482 * (has_played + 1)
        + (jumps + 3991) * (percentage + 8354)
        + ((seconds + 4085) ** 2) - 50028039
    )
```

<!-- tabs:end -->

- Best Differences

For example, `0%` - `13%` - `100%` -> `(13 - 0), (100 - 13)` -> `13,87`

- Unknown (always 1)

- Coins
- TimelyID
- [RS](topics/encryption/id.md?id=rs)

## Salts

| Value        | Type              |
|--------------|-------------------|
| xI25fpAapCQg | Level             |
| xPT6iUrtws0J | Comment           |
| ysg6pUrtjn0J | Like or Rate      |
| xI35fsAapCRg | User Profile      |
| yPg6pUrtWn0J | Level Leaderboard |
