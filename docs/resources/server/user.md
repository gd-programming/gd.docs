# Server User Resource

## Users

Each player of Geometry Dash has their own profile which includes various different elements such as in-game stats, icons and even socials.

A typical user server response is structured with a `key:value:key:value` pairing and is then split with a `|`

<!-- tabs:start -->

#### **User Example Response**
```md
1:TheWylieMaster:2:84696119:13:67:17:176:10:4:11:16:3:1725:46:2991:4:33:8:0:18:0:19:0:50:0:20:../watch?v=dQw4w9WgXcQ:21:31:22:10:23:30:24:1:25:35:26:23:28:1:43:11:48:1:30:0:16:9276649:31:0:44:TheWylieMaster:45::49:0:38:0:39:0:40:0:41:1:29:1
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1 | userName | **String** | The name of player |
| 2 | userID | **Integer** | The ID of player |
| 3 | stars | **Integer** | The count of stars player have |
| 4 | demons | **Integer** | The count of demons player have |
| 6 | ranking | **Integer** | the global leaderboard position of the player |
| 7 | accountHighlight | **Integer** | The accountID of the player. Is used for highlighting the player on the leaderboards |
| 8 | creatorpoints | **Integer** | The count of creatorpoints player have |
| 9 | iconID | **Integer** | maybe... [link](https://github.com/gd-programming/gddocs/pull/16/files#r417926661) |
| 10 | playerColor | **Integer** | First color of the player use |
| 11 | playerColor2 | **Integer** | Second color of the player use |
| 13 | secretCoins | **Integer** | The count of coins player have |
| 14 | iconType | **Integer** | The iconType of the player use |
| 15 | special | **Integer** | The special number of the player use |
| 16 | accountID | **Integer** | The accountid of this player |
| 17 | usercoins | **Integer** | The count of usercoins player have |
| 18 | messageState | **Integer** | 0: All, 1: Only friends, 2: None |
| 19 | friendsState | **Integer** | 0: All, 1: None |
| 20 | youTube | **String** | The youtubeurl of player |
| 21 | accIcon | **Integer** | The icon number of the player use |
| 22 | accShip | **Integer** | The ship number of the player use |
| 23 | accBall | **Integer** | The ball number of the player use |
| 24 | accBird | **Integer** | The bird number of the player use |
| 25 | accDart(wave) | **Integer** | The dart(wave) number of the player use |
| 26 | accRobot | **Integer** | The robot number of the player use |
| 27 | accStreak | **Integer** | The streak of the user |
| 28 | accGlow | **Integer** | The glow number of the player use |
| 29 | isRegistered | **Integer** | if an account is registered or not |
| 30 | globalRank | **Integer** | The global rank of this player |
| 31 | friendstate | **Integer** | 0: None, 1: already is friend, 3: send request to target, but target haven't accept, 4: target send request, but haven't accept 
| 38 | messages | **Integer** | How many new messages the user has (shown in-game as a notification) | <!-- there are a bunch of keys before here but they are exclusive to friend requests so i didnt add them here -->
| 39 | friendRequests | **Integer** | How many new friend requests the user has (shown in-game as a notificaiton) |
| 40 | newFriends | **Integer** | How many new Friends the user has (shown in-game as a notificaiton) |
| 41 | NewFriendRequest | **Bool** | appears on userlist endpoint to show if the friend request is new |
| 42 | age | **String** | the time since you submitted a levelScore |
| 43 | accSpider | **Integer** | The spider number of the player use |
| 44 | twitter| **String** | The twitter of player |
| 45 | twitch | **String** | The twitch of player |
| 46 | diamonds | **Integer** | The count of diamonds player have |
| 48 | accExplosion | **Integer** | The explosion number of the player use |
| 49 | modlevel | **Integer** | 0: None, 1: Normal Mod(yellow), 2: Elder Mod(orange) |
| 50 | commentHistoryState | **Integer** | 0: All, 1: Only friends, 2: None |

### Trivia

- Setting Key `29` to `0` stops most aspects of your profile from loading

- Key `27` is impossible to recieve from the server as there is no way for the server to know what the player's `streak` is

