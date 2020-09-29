# Server Message Resource

#### Message

A message is a message tf what else do I need to say lmao.

#### Message Structure

**Note:** We will use "other user" to describe the user on the other side of the message, be it the receiving end or the sending end.

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1   | Message ID | **number** | The message ID
| 2   | Account ID | **number** | The other user's account ID
| 3   | Player ID  | **number** | The other user's player ID
| 4   | Title      | **string** | The title encoded in [Base64](/topics/encryption/base64.md)
| 6   | Username   | **string** | The other user's username
| 7   | Age		   | **string** | How long ago the message was sent (e.g. "2 months")
| 8	  | Read	   | **number** | 0 if the message hasn't been read, 1 if it has
| 9	  | Sender	   | **number** | 0 if the user is receiving the message, 1 if they sent it