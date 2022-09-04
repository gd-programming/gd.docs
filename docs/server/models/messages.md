# Server Message Resource

## Message

Messages are a feature in Geometry dash where you can send messages to other players online if they have their messages open. There are two fields you can control within a message: `Subject` and `Message`

> `Subject` can be viewed in a list in the messages menu - without any external tools, the `Subject` field only supports 35 characters

> `Message` can be viewed only if you download the message by clicking on the `view` button in the messages menu - without any external tools, the `Messages` field only supports 200 characters

A typical message server response is structured with a `key:value:key:value` pairing and is then split with a `|`
<!-- tabs:start -->

#### **Message Example Response**
```md
6:DevExit:3:3935672:2:173831:1:54109536:4:WW91J3JlIGR1bWIgbG9s:8:1:9:0:5:TWhtIHllcCB5b3UncmUgcCBkdW1iIGxtYW8=:7:19 minutes
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

### Message Structure

**Note:** We will use "other user" to describe the user on the other side of the message, be it the receiving end or the sending end.

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1   | messageID  | **Integer** | The message ID
| 2   | accountID  | **Integer** | The other user's account ID
| 3   | playerID   | **Integer** | The other user's player ID
| 4   | title      | **String** | The title encoded in [Base64](/topics/encryption/base64.md)
| 5   | messageContent | **String** | The message which has been [Xor'd](/topics/encryption/xor.md) with a key of `14251` and then encoded in [base64](/topics/encryption/base64.md)
| 6   | userName   | **String** | The other user's username
| 7   | age		   | **String** | How long ago the message was sent (e.g. "2 months")
| 8	  | read	   | **Bool** | 0 if the message hasn't been read, 1 if it has
| 9	  | sender	   | **Bool** | 0 if the user is receiving the message, 1 if they sent it

### Trivia

- The current message system has a bug in which replying to a message will fail. This is because the client does not have any checks to see if the other user has their messages open when replying so if you send a reply to a user who has their messages closed, the request will return the error code `-1` resulting in it failing

- Due to an oversight, you are able to block yourself if you send yourself a message. [Cvolton](https://github.com/Cvolton) explains this oversight in one of his [videos](https://www.youtube.com/watch?v=R18tKYFrIqE)