# Server Restore Resource

## RestoreGJItems

`Restore` was a feature used in Geometry dash from versions `1.7 - 2.0` and it was used as an alternative to the [Account System](/topics/accounts.md) that is currently used as of 2.11

A typical Gauntlet Server response is structured with a `key:value:key:value` pairing  
*Official Levels behave a bit differently as you will find out further into his page*

> - Due to lack of resources about RestoreGJItems, most information has been lost to time.<br/>The only remaining archived response that we know about can be found [here](https://imgur.com/a/pPUu933)

### Restore Items Structure

| Key | Name/Value     | Type       |Description                           |
| --- | -------------- | ---------- | -------------------------------------|
| 1   | officalLevels  | **String** | Please refer to [Official Level Structure](/resources/server/restore?id=official-level-structure) |
| 2   | stars          | **Integer** | This is how many stars that should be given to your account  |
| 3   | demons         | **Integer** | This is how many demons that should be added to your account |
| 4   | jumps          | **Integer** | This is how many jumps you have made on your account of its lifetime|
| 5   | attempts       | **Integer** | This is how many attempts you have spent on levels on your accounts lifetime |
| 6   | onlineLevels   | **String** | These are the ID's of online levels you have beaten. seperated by `,` |

#### Official Level Structure

There are three sections in regards to the `Official Level State` from the restore endpoint. The data is sent as `{NormalCompleted},{PracticeComepleted},{SecretCoins}`

> - `{NormalCompleted}` is a `Bool` which denotes if you have completed the level in normal Mode<br/><br/>
> - `{PracticeComepleted}` is a `Bool` which denotes if you have completed the level in practice Mode<br/><br/>
> - `{SecretCoins}` is an `Integer` which includes the ammount of Secret Coins you collected during the completion of the official level

**<h4/>This structure is then iterated for each official level in the update and is split with a `;`**

