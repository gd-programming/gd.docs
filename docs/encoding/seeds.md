# Seeds

## Upload Seed

```python
from typing import AnyStr as AnyString

COUNT = 50


def generate_upload_seed(data: AnyString, count: int = COUNT) -> AnyString:
    length = len(data)

    if length < count:
        return data  # not enough data

    step = length // count

    return data[::step][:count]
```

## Leaderboard Seed

```python
HAS_PLAYED_MULTIPLY = 1482
JUMPS_ADD = 3991
PERCENTAGE_ADD = 8354
SECONDS_ADD = 4085

SUBTRACT = JUMPS_ADD * PERCENTAGE_ADD + SECONDS_ADD * SECONDS_ADD


def generate_leaderboard_seed(
    jumps: int, percentage: int, seconds: int, has_played: bool = True
) -> int:
    return (
        HAS_PLAYED_MULTIPLY * (has_played + 1)
        + (jumps + JUMPS_ADD) * (percentage + PERCENTAGE_ADD)
        + pow((seconds + SECONDS_ADD), 2) - SUBTRACT
    )
```
