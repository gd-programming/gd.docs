# kCEK

kCEK are dictionaries that hold certain information about your game save. Each kCEK Type is identified by its integer Value `[4, 6, 7, 8, 9]`

## kCEK 4 Structure

kCEK 4 is the levels kCEK Value and contains all information from levels you have played

```XML
<k>kCEK</k><i>4</i> 
    <d> 
        {level structure} 
    </d>
```

the level structure can be found [here](resources/client/level.md)

## kCEK 6 Structure

kCEK 6 is the levels kCEK Value and contains all information from songs you have downloaded

```XML
<k>kCEK</k><i>6</i> 
    <d> 
        {song structure} 
    </d>
```
the song structure can be found [here](resources/server/song.md)

## kCEK 7 Structure

kCEK 7 is the levels kCEK Value and contains all information from quests that are currently active

```XML
<k>kCEK</k><i>7</i> 
    <d> 
        {quest structure} 
    </d>
```
the song structure can be found [here](resources/client/gamesave/quests.md)

## kCEK 8 and 9 Structure

Information about these keys are unknown

```XML

<k>kCEK</k><i>8</i> 
    <k>1</k><i>integer</i>
    <k>2</k><i>integer</i>
    <k3><d> 
        <k>_isArr</k><true>
        <k>k_0</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>giant integer</i>
            </d>
        <k>k_1</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>integer</i>
            </d>
        <k>k_2</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>integer</i>
            </d>
        <k>k_3</k>
            <d>
                <k>kCEK</k><i>9</i>
                <k>1</k><i>integer</i>
                <k>3</k><i>integer</i>
                <k>4</k><i>integer</i>
            </d>
        </d>
    </d>
```