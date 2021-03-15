# Status Codes

## Server

Events over the Geometry Dash servers usually send an error code denoting that the server either had an error, or you sent an invalid request.

### Server Status Codes

| Code |                Name                                              |                                   Description                                       |
|------|------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| -1   | Invalid Request                                                  | A parameter in your [HTTP request](/endpoints/request.md) to the server was invalid.|
| -2   | [Common](/topics/status_codes?id=endpoint-specific-status-codes) | This status code is commonly used in multiple endpoints either for `taken` things, or theres none of something. |

### Endpoint-specific Status Codes

#### registerGJAccount

| Code | Name | Description |
|:-----|:-----|:------------|
| `-2` | Taken UserName | If the username you are trying to register with is taken |
| `-3` | Email is in use | If an account with that already email exists |
| `-4` | Username is invalid | If the username is invalid |
| `-5` | Password is invalid | If the password is invalid |
| `-6` | Email is invalid | If the email is invalid |
| `-7` | Passwords do not match | If the passwords don't match |
| `-8` | Too short. Minimum 6 characters | If the password is less than 6 characters long |
| `-9` | Too short. Minimum 3 characters | If the name is less than 3 characters long |
| `-99` | Emails do not match | if emails do not match |

#### loginGJAccount

| Code | Name | Description |
|:-----|:-----|:------------|
| `-8` | Too short. Minimum 6 characters | If the password is less than 6 characters long |
| `-9` | Too short. Minimum 3 characters | If the name is less than 3 characters long |
| `-10`| Already linked to a different account | If you are already logged into a different account (refresh login) |
| `-11`| Login Failed | Your login credentials are incorrect |
| `-12`| Account Disabled | Your account has been disabled |
| `-13`| Account already linked to a steam account | An unused error code which supposedly only allowed a single account per steam account |

#### syncGJAccount/backupGJAccount

| Code | Name | Description |
|:-----|:-----|:------------|
| `-2`   | Login Failed | Your login credentials were wrong and you need to log back in |
| `-4`   | Request is too large | Your request to the server was too large |
| `-5`   | Bad login info | Invalid login info was provided  |
| `-6`   | Something went wrong | Something went wrong on the servers' end |


#### suggestGJStars/rateGJDemon

| Code | Name | Description |
|:-----|:-----|:------------|
| `-2` | Not a Moderator | If you try to send a level despite not being a moderator |

#### uploadGJComment/uploadGJAccComment

| Code | Name | Description |
|:-----|:-----|:------------|
| `-10` | Permanent comment ban | If Robtop has deemed you worthy of a permanent comment ban |
| `temp_{time}_{reason}` | Temporary Comment Ban | If you have recieved a temporary ban from Robtop or an [Elder Moderator](/topics/moderators.md)

| Key | description |
|:----|:------------|
| `{time}` | The duration of your ban left in seconds |
| `{reason}` | The reason behind your ban |
