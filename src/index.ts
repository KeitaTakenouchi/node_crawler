import Crawler = require("crawler");

let crawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            console.log($("title").text());
            let str = $("table").find("tr").find("td").each(
                function () {
                    let i = this.parent.children.indexOf(this);
                    console.log(i + " : " + $(this).text());
                }
            );
        }
        done();
    }
});

// Queue just one URL, with default callback
crawler.queue('http://handaijudo.sakura.ne.jp/cgi-bin/calender/sche6.cgi');


