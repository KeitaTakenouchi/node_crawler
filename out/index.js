"use strict";
exports.__esModule = true;
var Crawler = require("crawler");
var crawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        }
        else {
            var $_1 = res.$;
            console.log($_1("title").text());
            var str = $_1("table").find("tr").find("td").each(function () {
                var i = this.parent.children.indexOf(this);
                console.log(i + " : " + $_1(this).text());
            });
        }
        done();
    }
});
crawler.queue('http://handaijudo.sakura.ne.jp/cgi-bin/calender/sche6.cgi');
//# sourceMappingURL=index.js.map