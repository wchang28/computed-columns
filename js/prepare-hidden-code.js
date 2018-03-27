"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var readline = require("readline");
process.stdout.write("let hiddenCode='");
var rs = fs.createReadStream(path.resolve(__dirname, "./hidden.js"), "utf8");
var rl = readline.createInterface({
    input: rs
});
rl.on("line", function (line) {
    //console.log(line);
    var s = "";
    for (var i = 0; i < line.length; i++) {
        var hex = line.charCodeAt(i).toString(16).toUpperCase();
        if (hex.length == 1) {
            hex = "000" + hex;
        }
        else if (hex.length == 2) {
            hex = "00" + hex;
        }
        else if (hex.length == 3) {
            hex = "0" + hex;
        }
        s += "\\u" + hex;
    }
    s += "\\n\\";
    console.log(s);
}).on("close", function () {
    console.log("';");
});
//# sourceMappingURL=prepare-hidden-code.js.map