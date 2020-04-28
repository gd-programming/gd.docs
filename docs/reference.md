# Geometry Dash References

The **Geometry Dash** servers are based around one main HTTP server, rather than primarily through secondary sources or establishing a direct REST api for usage. All endpoints are stored over the `/database` folder, rather than the base.

**Server/Database URL**
```
http://www.boomlings.com/database
```

## Server Responses

Most server repsonses are formatted in weird ways, not in more usual ways like **JSON**, or **XML**. Usually, they're formatted in a way that consists of `key:value`,  not really in a way that gives each key a name; but is more similar to an ID system. Most responses will use the splitters `:`, `|`, or `#`, the last two being mostly to split between multiple response strings, usually seen in filtering endpoing such at `getGJLevels` or `getGJUsers`.

**Example of a String**
```
1:61154556:2:Chillin:5:1:6:12901137:8:10:9:20:10:3348:12:0:13:21:14:373:17::43:4:25::18:3:19:24962:42:0:45:29651:3:UmVtYWtlIG9mIG15IG9sZCAyLjAgbGV2ZWwgY2FsbGVkIENoaWxsIHhkIEp1c3QgYSBzaW1wbGUgYW5kIGNoaWxsIGxldmVsLCBlbmpveSA6KQ==:15:3:30:0:31:0:37:0:38:1:39:3:46:1:47:2:35:669275
```