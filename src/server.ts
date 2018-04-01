import http = require("http");

const hostname: string = "127.0.0.1";
const port: number = 8081;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    let result = {
        name: "foo",
        date: {
            year: 2001,
            month: 12,
            day: 3
        },
    };
    res.write(JSON.stringify(result));
    res.end();
}).listen(port, hostname, () => {
    console.log("Server is running @ " + hostname + ":" + port);
});
