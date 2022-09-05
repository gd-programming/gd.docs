# Vault Codes

In *Geometry Dash* there are three different vaults you can access: [The Vault](#the-vault),
[Vault of Secrets](#vault-of-secrets) and [Chamber of Time](#chamber-of-time).

Each vault has a number of codes that you can enter to unlock icons and colors.

## Encoding

[The Vault](#the-vault): Codes are in plain text (not encoded).

[Vault of Secrets](#vault-of-secrets) and [Chamber of Time](#chamber-of-time): `ask2fpcaqCQ2`
is added to the code, then [robtop encoding][robtop_encoding] is applied.

## The Vault

| code                                  | reward |
|---------------------------------------|--------|
| `spooky`                              | cube   |
| `lenny`                               | cube   |
| `{name}`\*                            | cube   |
| `mule`                                | ship   |
| `blockbite`                           | UFO    |
| `neverending`                         | UFO    |
| `ahead`                               | wave   |
| `8`, `16`, `30`, `32`, `46`, `84`\*\* | wave   |
| `robotop`                             | robot  |
| `gandalfpotter`                       | trail  |
| `sparky`                              | coin   |

\* `name` is the in-game name of the player.

\*\* Consecutively enter one code at a time.

## Vault of Secrets

| code                 | reward          |
|----------------------|-----------------|
| `{stars}`\*          | cube            |
| `cod3breaker`\*\*    | cube            |
| `brainpower`         | cube            |
| `octocube`           | cube            |
| `seven`              | cube            |
| `thechickenisonfire` | secondary color |
| `gimmethecolor`      | primary color   |
| `glubflub`           | coin            |

\* `stars` is the in-game count of stars the player has.

\*\* You will be given a sequence of numbers. You need to find difference between each
overlapping pair of numbers, combining the results into the final code.
For example, for sequence `1, 2, 4, 8, 16, 32` the differences are `1, 2, 4, 8, 16`,
therefore the final code is `124816`.

## Chamber of Time

| code       | reward          |
|------------|-----------------|
| `silence`  | cube            |
| `hunger`   | cube            |
| `darkness` | cube            |
| `volcano`  | wave            |
| `river`    | secondary color |

[robtop_encoding]: /topics/encoding/robtop
