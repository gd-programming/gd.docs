# LevelScore

GD creates a seed for levelScore to verify the integrity of the scores a user submits.

<!-- tabs:start -->

### **GetGJLevelScores211**
```py
def generate_leaderboard_seed(
    jumps: int = 0, percentage: int = 0, seconds: int = 0, has_played: bool = True
) -> int:
    return (
        1482 * (has_played + 1)
        + (jumps + 3991) * (percentage + 8354)
        + ((seconds + 4085) ** 2)
        - 50028039
    )
```

### **CCLocalLevels**

```py
def generate_leaderboard_seed(
    jumps: int = 0, percentage: int = 0, seconds: int = 0, has_played: bool = True
) -> int:
    return (
        (has_played + 1)
        + (jumps + 3991) * (percentage + 8354)
        + ((seconds + 4085) ** 2)
        - 50028039
    )
```

<!-- tabs:end -->