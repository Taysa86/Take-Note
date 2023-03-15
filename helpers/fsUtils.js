const fs = require("fs");
const util = require("util");

// Promise for fs.readFile
const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content,null,4), (err) =>
        err ? console.error(err) : console.info(`\nData writtien to ${destination}`)
        );

// read and append functions
const readAndAppend = (content,file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = Json.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
}       


module.exports = { readFromFile, writeToFile, readAndAppend }