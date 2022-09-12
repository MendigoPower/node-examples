const express = require("express");
const fs = require("fs");

const app = express();

const server = http.createServer((request, response) => {
    console.log("request received");
    fs.readFile("users.json", "utf-8", (err, data) = >
    if (err) throw err;
    if(request.method === "GET") {
        server.get("/users.json", logger, (req, res) => {
            
        res.send("users.json")
    })
    })
})

server.get("//", logger, (request, response) => {
        fs.readFile("index.html", "utf8", (error, data) => {
          if (error) {
            console.log("error on read file", error);
          } else {
            console.log("content file", data);
            response.writeHead(200, { "content-type": "text/html" });
            response.write(data);
            res.send();
          }
        });
      }
)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
