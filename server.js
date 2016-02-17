var http = require("http");
var port = process.env.PORT || 3000;

http.createServer(function(req, res) {
    var response = {};
    response.ipaddress = req.headers['x-forwarded-for'];
    response.language = req.headers["accept-language"];
    response.software = req.headers['user-agent'];
    res.setHeader("Content-Type", "application/json");
    console.log(req.headers);
    res.end(JSON.stringify(response));
}).listen(port);