# Geometry Dash References

The **Geometry Dash** servers are based around one main HTTP server, rather than primarily through secondary sources or establishing a direct REST api for usage. All endpoints are stored over the `/database` folder, rather than the base.

## Server/Database URL

```plain
http://www.boomlings.com/database
```

## Server Responses

Most server response are formatted in weird ways, not in more usual ways like **JSON**, or **XML**. Usually, they're formatted in a way that consists of `key:value`,  not really in a way that gives each key a name; but is more similar to an ID system. Most responses will use the splitters `:`, `|`, or `#`, the last two being mostly to split between multiple response strings, usually seen in filtering endpoint such at `getGJLevels` or `getGJUsers`.

### Example of a String

```plain
1:61154556:2:Chillin:5:1:6:12901137:8:10:9:20:10:3348:12:0:13:21:14:373:17::43:4:25::18:3:19:24962:42:0:45:29651:3:UmVtYWtlIG9mIG15IG9sZCAyLjAgbGV2ZWwgY2FsbGVkIENoaWxsIHhkIEp1c3QgYSBzaW1wbGUgYW5kIGNoaWxsIGxldmVsLCBlbmpveSA6KQ==:15:3:30:0:31:0:37:0:38:1:39:3:46:1:47:2:35:669275
```

### Audio Track

Part of levels and requests for them is a term known as `audio track`, or the id of the track of a song in the game, ranging from `1` to `22`.

|  ID  | Server ID |       Track Name       |
|------|-----------|:----------------------:|
| 1    | 0         | Stereo Madness         |
| 2    | 1         | Back on Track          |
| 3    | 2         | Polargeist             |
| 4    | 3         | Dry Out                |
| 5    | 4         | Base after Base        |
| 6    | 5         | Cant Let Go            |
| 7    | 6         | Jumper                 |
| 8    | 7         | Time Machine           |
| 9    | 8         | Cycles                 |
| 10   | 9         | xStep                  |
| 11   | 10        | Clutterfunk            |
| 12   | 11        | Theory of Everything   |
| 13   | 12        | Electroman Adventures  |
| 14   | 13        | Clubstep               |
| 15   | 14        | Electrodynamix         |
| 16   | 15        | Hexagon Force          |
| 17   | 16        | Blast Processing       |
| 18   | 17        | Theory of Everything 2 |
| 19   | 18        | Geometrical Dominator  |
| 20   | 19        | Deadlocked             |
| 21   | 20        | Fingerdash             |
| 1001 | -         | The Seven Seas         |
| 1002 | -         | Viking Arena           |
| 1003 | -         | Airborne Robots        |
| 2001 | -         | Payload                |
| 2002 | -         | Beast Mode             |
| 2003 | -         | Machina                |
| 2004 | -         | Years                  |
| 2005 | -         | Frontlines             |
| 2006 | -         | Space Pirates          |
| 2007 | -         | Striker                |
| 2008 | -         | Embers                 |
| 2009 | -         | Round 1                |
| 2010 | -         | Monster Dance Off      |
| 3001 | -         | The Challenge          |
| 4001 | -         | Press Start            |
| 4002 | -         | Nock Em                |
| 4003 | -         | Power Trip             |
