# Server Friend Request Resource

## Friend Request

One of the features in Geometry Dash is the friend system which allows players to add each other as a friend. It is part of a poorly developped social System in which players can send messages to each other.

The Server Response returns a [User String](/resources/server/user) in a response which is structured with a `key:value:key:value` pairing. Each Friend Request String is then split with a `|`

<!-- tabs:start -->

#### **Friend Request Example**
```md
1:TheWylieMaster:2:84696119:9:9:10:5:11:3:14:1:15:0:16:9276649:32:45272143:35:aGVsbG8=:41:1:37:1 week        
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

#### Friend Request Structure

**Note:** We will use "other user" to describe the user on the other side of the friend request, be it the receiving end or the sending end.

| Key | Name/Value                | Type                                         | Description                                                              
|-----|---------------------------|----------------------------------------------|--------------------------------------------------------------------------
| 1   | userName	          | **String**					 | The username of the other user
| 2   | playerID		  | **Integer**					 | The player ID of the other user. **This is different than the account ID**
| 9   | icon			  | **Integer**					 | Which icon the other user is using, starting with 1 as the first icon
| 10  | playerColor		  | **Integer**					 | The other user's primary player color, presumably ordered cronologically from left to right per update
| 11  | playerColor2		  | **Integer**					 | The other user's secondary player color, presumably ordered cronologically from left to right per update
| 14  | iconType		  | **Integer**					 | The other user's icon type indexing an array of `icon, ship, ball, ufo, wave, robot, spider`
| 15  | glow			  | **Integer**					 | Either 0 or 2, might be related to glow
| 16  | accountID		  | **Integer**					 | The other user's account ID. **This is different than the player ID**
| 32  | friendRequestID		  | **Integer**					 | An ID unique to each friend request. (I'm not 100% certain on this)
| 35  | message			  | **String**					 | The friend requests's message, encoded in [base64](/topics/encryption/base64.md)
| 37  | age			  | **String** 					 | How long ago the friend request was sent (e.g. "2 months")
| 41  | isBlocked		  | **Bool**					 | if you have blocked the user

### Trivia

- By sending yourself a friend request through 3rd party tools, you can actually block yourself. Doing so doesn't have any serious consequences as you can see in this [video by Cvolton](https://www.youtube.com/watch?v=R18tKYFrIqE)