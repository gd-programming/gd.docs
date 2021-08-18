# getTop1000.php

[getTop1000.php](http://boomlings.com/database/getTop1000.php) is one of the very few endpoints found on the servers that can be accessed via a [GET request](https://www.w3schools.com/tags/ref_httpmethods.asp). The purpose of this endpoint is to gather the top 1000 star grinders to be used on the star leaderboards.

## Parameters

This endpoint does not require any parameters

## Example

```py
import requests

req = requests.get("http://boomlings.com/database/getTop1000.php")
print(req.text)

```

## Response Structure

The structure for this endpoint is fairly simple - Using only a single key with 3 pieces of data assigned to the key with a `,` to seperate them. Each player is seperated by a newline `(<br>)` making it easy to parse.

Below is a small snippet of the response

    1: Smiffy777, 167677, 1413859
    2: Gormuck, 161467, 1775477
    3: Steekmen, 158704, 4310927
    4: Superchat, 157872, 1098021
    5: Cool, 157561, 4825

The Values for each segment are:

| Structure |
|:----------|
|`<Leaderboard Position>: <Player UserName>, <Player Star Count>, <Player AccountID>`|
