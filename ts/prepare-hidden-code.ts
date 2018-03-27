import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

process.stdout.write("let hiddenCode='");

let rs = fs.createReadStream(path.resolve(__dirname, "./hidden.js"), "utf8");

let rl = readline.createInterface({
    input: rs
});

rl.on("line", (line: string) => {
    //console.log(line);
    let s = "";
    for (let i=0; i < line.length; i++) {
        let hex = line.charCodeAt(i).toString(16).toUpperCase();
        if (hex.length == 1) {
            hex = "000" + hex;
        } else if (hex.length == 2) {
            hex = "00" + hex;
        } else if (hex.length == 3) {
            hex = "0" + hex;
        }
        s += "\\u" + hex;
    }
    s += "\\n\\";
    console.log(s);
}).on("close", () => {
    console.log("';");
})