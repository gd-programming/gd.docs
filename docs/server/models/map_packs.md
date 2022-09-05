# Server Map Pack Resource

#### Map Pack

A map pack is a series of 3 levels handpicked by Robtop. They preceded Gauntlets and can be seen as the predecessor to them. Upon completion, Map Packs can reward up to `10` stars and `2` secret coins.

A typical map pack server response is structured with a `key:value:key:value` pairing and is then split with a `|`

<!-- tabs:start -->

### **Map Pack Example**
```md
1:59:2:Cyclone Pack:3:1566116,946020,1100161:4:8:5:1:6:5:7:255,75,255:8:255,75,255|1:60:2:Colossus Pack:3:1350389,1215630,1724579:4:8:5:1:6:5:7:100,255,175:8:100,255,175|1:61:2:Diamond Pack:3:1267316,1670283,1205277:4:8:5:1:6:5:7:255,255,255:8:255,255,255|1:11:2:Chaos Pack:3:329929,188909,340602:4:9:5:1:6:5:7:255,125,0:8:255,125,0|1:44:2:Magma Pack:3:882417,884256,551979:4:9:5:1:6:5:7:255,100,50:8:255,100,50|1:62:2:Paradox Pack:3:1447246,1132530,1683722:4:9:5:1:6:5:7:50,255,75:8:50,255,75|1:63:2:Funky Pack:3:1728550,1799065,1311773:4:9:5:1:6:5:7:50,175,255:8:50,175,255|1:19:2:Remix Pack 4:3:341613,358750,369294:4:10:5:2:6:6:7:255,255,0:8:255,255,0|1:20:2:Demon Pack 1:3:70059,10109,135561:4:10:5:2:6:6:7:255,0,125:8:255,0,125|1:21:2:Demon Pack 2:3:57730,308891,102765:4:10:5:2:6:6:7:255,0,0:8:255,0,0#65:40:10#79c437d2cf75d2edf36a5094e0cc650c54440ba3
```
<!-- tabs:end -->

Each `key` is tied to a component within the client and the `value` sets data for the specific component.  
A list of all known keys can be found in the table below

### Map Pack Structure

| Key | Name/Value | Type | Description |
| --- | ---------- | ---- | ----------- |
| 1   | packID	   | **Integer** | the ID for the specified Map Pack
| 2   | packName   | **String** | Name of the map pack
| 3   | levels	   | **String** | List of level IDs separated by a `,`
| 4   | stars	   | **Integer** | How many stars the map pack should give
| 5   | coins	   | **Integer** | How many coins the map pack should give
| 6   | [difficulty](enumerations.md) | **Integer** | Difficulty ranging from `0->10`
| 7   | textColor | **String** | RGB color for the title text separated by `,`
| 8   | barColor  | **String** | RGB color for the completion bar separated by `,`


### Trivia

- Map packs use the same response parser as gauntlets

- Although Map Packs only show a hard demon in-game, they can actually display each demon difficulty by using a specific value in key `6`

#### Difficulty possible values

| Value | Difficulty |
|:------|:-----------|
| 0 |  auto | 
| 1 |  easy | 
| 2 |  normal | 
| 3 |  hard | 
| 4 |  harder | 
| 5 |  insane | 
| 6 |  hard demon | 
| 7 |  easy demon | 
| 8 |  medium demon | 
| 9 |  insane demon | 
| 10 |  extreme demon | 

