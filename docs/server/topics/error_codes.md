# Error Codes

Geometry Dash servers usually send an error code denoting an error either on the servers'
or the client's side.

## General Error Codes

| code | name              |
|------|-------------------|
| `-1` | General (Generic) |
| `-2` | No Result / Taken |

## Specific Error Codes

### [Register][register]

| code  | name               | description                                       |
|-------|--------------------|---------------------------------------------------|
| `-2`  | Name Taken         | The name is taken.                                |
| `-3`  | Email Used         | The email is already used.                        |
| `-4`  | Invalid Name       | The name is invalid.                              |
| `-5`  | Invalid Password   | The password is invalid.                          |
| `-6`  | Invalid Email      | The email is invalid.                             |
| `-7`  | Password Mismatch  | The passwords do not match.                       |
| `-8`  | Password Too Short | The password is too short (minimum 6 characters). |
| `-9`  | Name Too Short     | The name is too short (minimum 3 characters).     |
| `-99` | Email Mismatch     | The emails do not match.                          |

### [Login][login]

| code  | name                        | description                                            |
|-------|-----------------------------|--------------------------------------------------------|
| `-8`  | Password Too Short          | The password is less than 6 characters long.           |
| `-9`  | Name Too Short              | The name is less than 3 characters long.               |
| `-10` | Linked to Different Account | Already logged into a different account.               |
| `-11` | Login Failed                | Login credentials are incorrect.                       |
| `-12` | Account Disabled            | The account has been disabled.                         |
| `-13` | Linked to Different Steam   | One account is allowed per one steam account (unused). |

### [Save][save]

| code | name                 | description                               |
|------|----------------------|-------------------------------------------|
| `-2` | Login Failed         | Login credentials are wrong.              |
| `-4` | Request Too Large    | Request to the server is too large.       |
| `-5` | Bad Login Info       | Invalid login information was provided.   |
| `-6` | Something Went Wrong | Something went wrong on the servers' end. |

### [Suggest Level][suggest_level]

| code | name                | description                            |
|------|---------------------|----------------------------------------|
| `-2` | Missing Permissions | Missing permissions to suggest levels. |

### [Comment Level][comment_level]

| code                        | name                  | description                                   |
|-----------------------------|-----------------------|-----------------------------------------------|
| `-10`                       | Permanent Comment Ban | Permanently banned from commenting on levels. |
| `temp_{timeout}_{reason}`\* | Temporary Comment Ban | Temporarily banned from commenting on levels. |

\* `timeout` is the remaining duration of the ban in seconds, `reason` is the reason for getting banned.

[register]: /server/endpoints/accounts/register
[login]: /server/endpoints/accounts/login
[save]: /server/endpoints/accounts/save
[suggest_level]: /server/endpoints/levels/suggest_level
[comment_level]: /server/endpoints/levels/comment_level
