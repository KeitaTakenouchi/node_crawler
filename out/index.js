"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crawler = require("crawler");
const U = require("url");
let visited = [];
function visit(url) {
    visited.push(url);
    crawler.queue(url);
}
function isVisited(url) {
    return visited.indexOf(url) > 0;
}
let crawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        try {
            if (error) {
                console.log(error);
            }
            else {
                const $ = res.$;
                console.log($("title").text() + " | " + res.request.uri.href);
                $("a").each((i, elem) => {
                    let url = $(elem).attr("href");
                    let base = res.request.uri.href;
                    let path = new U.URL(url, base);
                    let ref = path.href;
                    if (!isVisited(ref)) {
                        visit(path.href);
                    }
                });
            }
        }
        catch (error) {
            console.log("ERROR!");
        }
        finally {
            done();
        }
    }
});
crawler.queue("http://handaijudo.sakura.ne.jp/result.html");
//# sourceMappingURL=index.js.map