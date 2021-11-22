const request = require("./requestStockAPI");


const port = 80 //http = 80, ssh = 22
const express = require("express");
const app = express();



app.listen(port, () => {
    console.log(`web server running on port ${port}`);
});


app.get("/", (req, resp) => {
    resp.send("hello world");
    // resp.render()
})