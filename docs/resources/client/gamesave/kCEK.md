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

`GJRewardItem` is a dictionary which contains `GJRewardObject` which is another dictionary

```XML

<k>kCEK</k><i>8</i> 
    <k>1</k><i>integer</i>
    <k>2</k><i>integer</i>
    <k3><d> 
        <k>_isArr</k><true>
        <k>k_{List Index}</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>giant integer</i>
            </d>
        <k>k_{List Index}</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>integer</i>
            </d>
        <k>k_{List Index}</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>integer</i>
            </d>
        <k>k_{List Index}</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>integer</i>
            </d>
        </d>
    </d>
```