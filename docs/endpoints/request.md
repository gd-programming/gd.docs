# Request

The **Geometry Dash** servers are based around one main HTTP server, rather than primarily through secondary sources or establishing a direct REST api for usage. All endpoints are stored over the `/database` folder, rather than the base.

## Server/Database URL

```plain
http://www.boomlings.com/database/
```

## Requests

Geometry Dash uses *POST* requests. The data is in the body field of the request. The body of a request is always structured in this way:

```plain
param1=value1&param2=value2&param3...
```

Though many modern languages implement constructing data from mappings.

## Server Responses

Most server response are formatted in weird ways, not in more usual ways like **JSON**, or **XML**. Usually, they're formatted in a way that consists of `key:value`,  not really in a way that gives each key a name; but is more similar to an ID system. Most responses will use the splitters `:`, `|`, or `#`, the last two being mostly to split between multiple response strings, usually seen in filtering endpoint such at `getGJLevels` or `getGJUsers`.

### Example of a String

```plain
1:61154556:2:Chillin:5:1:6:12901137:8:10:9:20:10:3348:12:0:13:21:14:373:17::43:4:25::18:3:19:24962:42:0:45:29651:3:UmVtYWtlIG9mIG15IG9sZCAyLjAgbGV2ZWwgY2FsbGVkIENoaWxsIHhkIEp1c3QgYSBzaW1wbGUgYW5kIGNoaWxsIGxldmVsLCBlbmpveSA6KQ==:15:3:30:0:31:0:37:0:38:1:39:3:46:1:47:2:35:669275
```

## Examples

<!-- tabs:start -->

### **php**

```php
<?php
// sets the target url
$url = "http://boomlings.com/database/[insert target file]";

// makes the post string
$str = "something=value&somethingElse=otherValue";

// turns the post string into an array
parse_str($str, $post);

// makes a curl request on your url using the post values
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

// requests the output
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);

// closes the request
curl_close($ch);

// outputs the site responce
echo $result
?>
```

### **python**

```py
import requests

# sets the target url
url = "http://www.boomlings.com/database/[insert target file]"

# creates data to send
data = {
    "something": "value", "somethingElse": "otherValue"
}

# sends request and reads the result
result = requests.post(url, data).text

# outputs the site response
print(result)
```

### **python_async**

```py
import asyncio

import aiohttp  # 3rd party, can be installed from pypi.org

# sets the target url
url = "http://www.boomlings.com/database/[insert target file]"

# creates data to send
data = {
    "something": "value", "somethingElse": "otherValue"
}


# creates a coroutine to handle request
async def main() -> None:
    # creates session to send request with
    async with aiohttp.ClientSession() as session:
        # sends a request and returns the response
        async with session.post(url, data=data) as response:
            # reads response
            result = await response.text()
            # outputs result
            print(result)


# creates EventLoop to run coroutine with
loop = asyncio.get_event_loop()
# runs main() coroutine
loop.run_until_complete(main())
```

### **java**

```java
import java.io.*;
import java.net.*;

// calls the main class and method
class Main {
  public static void main(String[] args) throws Exception {
    
    // sets the target url
    URL url = new URL("http://www.boomlings.com/database/[insert target file]");
    
    // makes the post string
    String postData = "something=value&somethingElse=otherValue";

    // turns the post data into a byte array
    byte[] postDataBytes = postData.getBytes("UTF-8");

    // makes the request header
    HttpURLConnection conn = (HttpURLConnection)url.openConnection();
    conn.setRequestMethod("POST");
    conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
    conn.setRequestProperty("Content-Length", String.valueOf(postDataBytes.length));
    
    // requests the output
    conn.setDoOutput(true);
    conn.getOutputStream().write(postDataBytes);

    // reads the output
    Reader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));

    // constructs and prints the output
    for (int c; (c = in.read()) >= 0;)
        System.out.print((char)c);
    }
}
```

### **node.js**

```node.js
const request = require("request");

// sets the target url
let url = "http://www.boomlings.com/database/[insert target file]";

// creates data to send
let data = {
    something: "value", somethingElse: "otherValue"
};

// sends a request
request.post(url, {form: data}, function(error, response, body) {
    // handles the response, in our case - print response body
    console.log(body);
});
```

### **rust**

```rust
use reqwest;

// use the tokio runtime
#[tokio::main]
async fn main() -> reqwest::Result<()> {
    // set the url
    let uri = "http://www.boomlings.com/database/[insert target file]";
    
    // create post values
    let data = [
        ("something", "value"), 
        ("somethingElse", "otherValue")
    ];
    
    // send the request 
    let req = reqwest::Client::new()
        .post(uri)
        .form(&data)
        .send()
        .await?;
    
    // read the response
    println!("{}", req.text().await?);
    
    Ok(())
}
```

<!-- tabs:end -->
