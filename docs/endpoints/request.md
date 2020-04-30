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

### **PHP**

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
echo $result;
?>
```

### **Python**

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

### **Java**

```java
/*
 * Using Reactor Netty HTTP client
 * https://github.com/reactor/reactor-netty
 */

import static io.netty.buffer.Unpooled.wrappedBuffer;
import static java.nio.charset.StandardCharsets.UTF_8;

import io.netty.buffer.ByteBuf;
import io.netty.handler.codec.http.HttpResponseStatus;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;

public class Main {

    public static void main(String[] args) {
        // Creates data to send
        ByteBuf data = wrappedBuffer(UTF_8.encode("something=value&somethingElse=otherValue"));

        // Creates HTTP client
        HttpClient client = HttpClient.create()
                .baseUrl("www.boomlings.com/database")
                .headers(h -> {
                    h.add("Content-Type", "application/x-www-form-urlencoded");
                    h.add("Content-Length", data.readableBytes());
                });

        String response = client.post()       // Creates the POST request
                .uri("/[insert target file]") // Sets the target URL
                .send(Mono.just(data))        // Sends the data
                .responseSingle((responseHeader, responseBody) -> {
                    if (responseHeader.status().equals(HttpResponseStatus.OK)) {
                        // If 200 OK returns response body as string
                        return responseBody.asString().defaultIfEmpty("");
                    } else {
                        // If not 200 OK throws an exception
                        return Mono.error(new RuntimeException(responseHeader.status().toString()));
                    }
                })
                .block(); // awaits response

        System.out.println(response); // prints response body
    }

}

```

### **NodeJS**

```js
const http = require("http");
const queryString = require("query-string");

// sets the target url
const target = "/database/[insert target file]";

// creates data to send
const data = queryString.stringify({
    something: "value",
    somethingElse: "otherValue"
});

// sends a request
http.request({
    host: "boomlings.com",
    path: target,
    port: 80
    method: "POST"
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(data)
    }
}, (res) => {
    let output = "";

    res.on("data", (chunk) => output += chunk);

    res.on("end", () => console.log(output));
}).write(data);
```

### **Rust**

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
