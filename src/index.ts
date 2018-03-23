import Crawler = require("crawler");
import U = require("url");

let visited: Array<string> = [];

function visit(url: string): void {
    visited.push(url);
    crawler.queue(url);
}

function isVisited(url: string): boolean {
    return visited.indexOf(url) > 0;
}

let crawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        try {
            if (error) {
                console.log(error);
            } else {
                const $ = res.$;
                console.log($("title").text() + " | " + res.request.uri.href);
                $("a").each((i, elem) => {
                    let url = $(elem).attr("href");
                    let base = res.request.uri.href;
                    let path: URL = new U.URL(url, base);

                    let ref = path.href;
                    if (!isVisited(ref)) {
                        visit(path.href);
                    }
                });
            }
        } catch (error) {
            console.log("ERROR!");
        }
        finally {
            done();
        }
    }
});

crawler.queue("https://github.com/Microsoft/TypeScript/pulls");
