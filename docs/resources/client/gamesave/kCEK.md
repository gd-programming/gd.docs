# kCEK

kCEK are dictionaries that hold certain information about your game save. Each kCEK Type is identified by its integer Value `[4, 6, 7, 8, 9]`

## kCEK 4 Structure

kCEK 4/GJGameLevel is a dictionary that contains information about every level you have played

```XML
<k>kCEK</k><i>4</i> 
    <d> 
        {level structure} 
    </d>
```

the level structure can be found [here](resources/client/level.md)

## kCEK 6 Structure

kCEK 6/SongInfoObject is a dictionary that contains song info of all downloaded songs

```XML
<k>kCEK</k><i>6</i> 
    <d> 
        {song structure} 
    </d>
```
the song structure can be found [here](resources/server/song.md)

## kCEK 7 Structure

kCEK 7/GJChallengeItem is a dictionary that contains the status of each active quest

```XML
<k>kCEK</k><i>7</i> 
    <d> 
        {quest structure} 
    </d>
```
the song structure can be found [here](resources/client/gamesave/quests.md)

## kCEK 8 and 9 Structure

`GJRewardItem` is a dictionary which contains `GJRewardObject` which is another dictionary (WIP)

| key | encoder Key | use/description |
|:----|:------------|:------------|
| 1 | 8 | Unknown |
| 2 | 8 | The reward type? (investigate) |
| 3 | 8 | GJRewardObject |
| 1 | 9 | item type (investigate) |
| 2 | 9 | Unknown |
| 3 | 9 | reward amount |
| 4 | 9 | Unknown |

## Example

```XML
    <d>
        <k>kCEK</k><i>8</i>
        <k>2</k><i>3</i>
        <k>3</k>
        <d>
            <k>_isArr</k><t />
    <!--k_{number} are new RewardItems items-->
            <k>k_0</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>8</i>
                <k>3</k><i>20</i>
                <k>4</k><i>558814120</i>
            </d>
            <k>k_1</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>7</i>
                <k>3</k><i>500</i>
                <k>4</k><i>520297600</i>
            </d>
            <k>k_2</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>6</i>
                <k>3</k><i>1</i>
            </d>
            <k>k_3</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>3</i>
                <k>3</k><i>2</i>
                <k>4</k><i>7667757</i>
            </d>
        </d>
    </d>
```