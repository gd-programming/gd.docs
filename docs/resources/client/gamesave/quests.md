# Client Quest Resources

## Quests

After you click on the quest button when playing Geometry Dash, information about the quest is saved into your CCGameManager files so you can complete the quests offline.

## Quest Key structure

| Key | Name/Value                     | type |Description                                                      |
| :-- | :----------------------------- |:-----|:--------------------------------------------------------------- |
| 1   | Quest Type                     | [quest](enumerations.md) |This is used to diffrenciate the type of quest needs to be completed: 1 = Orbs, 2 = Coins, 3 = Stars |
| 2   | Progress                       | integer | How many of the required stats have been gained since you started the quest|
| 3   | Goal                           | integer | How many of the required stats you need to gain to complete the quest|
| 4   | Reward                         | integer | How many diamonds earned upon completion of the quest|
| 5   | time left                      | integer | How much time is left until new quests appear |
| 6   | isActive                       | Bool    | Set to True if the challenge is active |
| 7   | Quest Name                     | String  | The quest name |
| 8   | Position                       | [Quest Position](enumerations.md) | where abouts on screen the quest should be: 1 = top, 2 = middle, 3 = bottom|