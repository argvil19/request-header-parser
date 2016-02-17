var http = require("http");
var port = process.env.PORT || 3000;
var uaparser = require("ua-parser-js");

http.createServer(function(req, res) {
    var response = {};
    var ua = uaparser(req.headers['user-agent']);
    response.ipaddress = req.headers['x-forwarded-for'];
    response.language = req.headers["accept-language"].substr(0, req.headers["accept-language"].indexOf(","))
    response.software = ua.browser.name + " " + ua.browser.version + ";" + ua.os.name + " " + ua.os.version;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
}).listen(port);