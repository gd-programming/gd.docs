# Status Codes

## Server

Events over the Geometry Dash servers usually send an error code denoting that the server either had an error, or you sent an invalid request.

#### Server Status Codes

| Code |       Name                                                       |                                     Description                                                                 |
|------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| -1   | Invalid Request                                                  | A parameter in your [HTTP request](/endpoints/request.md) to the server was invalid.                            |
| -2   | [Common](/topics/status_codes?id=endpoint-specific-status-codes) | This status code is commonly used in multiple endpoints either for `taken` things, or theres none of something. |


#### Endpoint-specific Status Codes

These are Status Codes that are used in more than one place.

| Code |       Name      |        Endpoint       |                                     Description                                                                 |
|------|-----------------|-----------------------|-----------------------------------------------------------------------------------------------------------------|
| -2   | Taken Username  | registerGJAccount.php | The username provided has been taken.                                                                           |