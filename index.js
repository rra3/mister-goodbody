'use strict';

var Promise = require("bluebird");
var fs = require("fs");
var cheerio = require("cheerio");

Promise.promisifyAll(fs);

fs.readFileAsync("test/fixtures/whfoods.html", "utf8")
.then(function (html) {
  var $ = cheerio.load(html);
});


