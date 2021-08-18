# Game Variables

Game Variables (gvs) are found inside of the [ValueKeeper](/resources/client/gamesave/valueKeeper.md) Dictionary and each gv value corresponds with a specific ingame setting

## GV Structure

| Key | Value|
| :-- |:-----------|
| gv_0001 | Follow PLayer (editor) |
| gv_0002 | play Music (editor) |
| gv_0003 | Swipe (editor) |
| gv_0004 | Free Move (editor) |
| gv_0005 | Delete filter (editor) |
| gv_0006 | Delete custom objectID (editor) |
| gv_0007 | Toggle rotate (editor) |
| gv_0008 | Toggle snap (editor) |
| gv_0009 | Ignore Damage (editor) |
| gv_0010 | flip2PlayerControls |
| gv_0011 | alwaysLimitControls |
| gv_0012 | showedCommentingRules |
| gv_0013 | increaseMaxUndoRedo |
| gv_0014 | disableExplosionShake |
| gv_0015 | flipPauseButton |
| gv_0016 | showedSongTOS |
| gv_0018 | noSongLimit |
| gv_0019 | songsInMemory |
| gv_0022 | higherAudioQuality |
| gv_0023 | smoothFix |
| gv_0024 | showCursor In-Game |
| gv_0025 | Windowed Mode |
| gv_0026 | autoRetry |
| gv_0027 | autoCheckpoints |
| gv_0028 | disableThumbstick |
| gv_0029 | showedOptionsText |
| gv_0030 | vsyncEnabled |
| gv_0031 | callGLFinish -> seems to be unused |
| gv_0032 | forceTimerEnabled -> seems to be unused |
| gv_0033 | ChangeSongPath |
| gv_0034 | GameCenterEnabled |
| gv_0036 | PreviewMode (editor) |
| gv_0037| showGround (editor) |
| gv_0038 | showGrid (editor) |
| gv_0039 | gridOnTop (editor) |
| gv_0040 | showPercentage |
| gv_0041 | showObjectInfo (editor) |
| gv_0042 | increaseMaxLevels |
| gv_0043 | effectLinesEnabled (editor) |
| gv_0044 | drawTriggerBoxes (editor) |
| gv_0045 | debugDraw (editor) |
| gv_0046 | hideUIOnTest (editor) |
| gv_0047 | showedProfileText |
| gv_0048 | viewedOwnProfile |
| gv_0049 | buttonsPerRow (editor) |
| gv_0050 | buttonRows (editor) |
| gv_0051 | showedNGMessage (editor) |
| gv_0052 | fastPracticeReset|
| gv_0053 | Free Games Popup |
| gv_0055 | checkIfServerOnline.php |
| gv_0056 | disableObjectAlert |
| gv_0057 | editorHoldToSwipe|
| gv_0058 | durationLines (editor) |
| gv_0059 | swipeCycleMode |
| gv_0060 | defaultMiniIcon|
| gv_0061 | switchSpiderTeleportColor |
| gv_0062 | switchDashFireColor |
| gv_0063 | showedUnverifiedCoinsMessage |
| gv_0064 | selectFilter (editor) |
| gv_0065 | enableMoveOptimization |
| gv_0066 | highCapacityMode |
| gv_0067 | highStartPosAccuracy |
| gv_0068 | quickCheckpointMode |
| gv_0069 | commentMode |
| gv_0070 | showedUnlistedLevelMessage |
| gv_0072 | disableGravityEffect |
| gv_0073| newCompletedFilter|
| gv_0074| showRestartButton|
| gv_0075| disableComments|
| gv_0076| disableAccountComments|
| gv_0077| featuredLevelsOnly |
| gv_0078| hideBackground (editor) |
| gv_0079| hideGridOnPlay (editor) |
| gv_0081| disableShakeEffects |
| gv_0082| disableHighObjectAlert|
| gv_0083 | disableSongAlert|
| gv_0084| manualOrder|
| gv_0088| smallCommentsMode|
| gv_0089| extendedInfoMode |
| gv_0090| autoloadComments |
| gv_0091| myLevels folder number |
| gv_0092| onlineLevels folder number |
| gv_0093| increaseLocalLevelsPerPage |
| gv_0094| moreCommentsMode |
| gv_0095| flippyUselessMode (Just Dont)|
| gv_0096| switchWaveTrailColor|
| gv_0097| enableLinkControls (editor) |
| gv_0098| levelLeaderboardType |
| gv_0099| showLeaderboardPercent |
| gv_0100| practiceDeathEffect|
| gv_0101| forceSmoothFix |
| gv_0102 | smoothFixInEditor |


### 2019 Leak GV's

| Key | Value|
| :-- |:-----------|
| gv_0103 | Layer Locking |
| gv_0104 | Record Order |
| gv_0105 | StartPos Playback |
| gv_0106 | Show Meltdown Promo |
| gv_0108 | Auto Low Detail |
| gv_0109 | Level Info Label |
| gv_0110 | Fast Editor Preview |
| gv_0113 | Flip Platformer Controls |
| gv_0115 | Show FPS |
| gv_0116 | Use Custom FPS |
| gv_0117 | Preview Particle |
| gv_0118 | Preview Animation |
| gv_0119 | Dont Save Level Data |


# Unlocked Game Variables

Unlocked Game Variables (ugv) are used to check if ingame events have been completed

## UGV Structure

| Key | Value|
| :-- |:-----------|
| ugv_1 | Unlocked the challenge |
| ugv_2 | Gubflub hint |
| ugv_3 | Gubflub hint 2 |
| ugv_4 | The Challenge completed |
| ugv_5 | Treasure Room unlocked |
| ugv_6 | Chamber of Time unlocked |
| ugv_7 | Chamber of Time Discovered |
| ugv_8 | shown Master Emblem |
| ugv_9 | GateKeeper Dialog |
| ugv_10 | Scratch Dialog |
| ugv_11 | Secret Shop unlocked |
| ugv_12 | Spoken to Demon Guardian |
| ugv_13 | Demon Freed |
| ugv_14 | Has Demon Key 1 |
| ugv_15 | Has Demon Key 2 |
| ugv_16 | Has Demon Key 3 |
| ugv_17 | Shop Keeper first dialog (500 orbs) |
| ugv_18 | online levels unlocked in GDW |
| ugv_19 | Demon Discovered in Demon Room |
| ugv_20 | Community shop unlocked |
| ugv_21 | PotBor dialog |
| ugv_22 | YouTube Chest unlocked |
| ugv_23 | FaceBook Chest unlocked |
| ugv_24 | Twitter Chest unlocked |

### 2019 Leak UGV's

| Key | Value|
| :-- |:-----------|
| ugv_25 | FireBird GateKeeper |
| ugv_26 | Twitch Chest Unlocked |
| ugv_27 | Discord Chest Unlocked |

### Undiscovered/unknown GV's

| GV_ID | Existance Proven | notes |
|:------|:-------|:------|
| 0017  | **False** | |
| 0020  | **False** | |
| 0021  | **False** | |
| 0035  | **False** | |
| 0054  | **False** ||
| 0071  | **False** ||
| 0080  | **False** ||
| 0085  | **False** ||
| 0086  | **False** ||
| 0087  | **False** ||
| 0112  | **True** | Used in `EditorUI` (**2019 Leak**) |
| 0114  | **True** | Used in `PlayerObject` (**2019 Leak**) |
| 0120  | **True** | Shown in RobTop's 2020 Twitch Streams |
