"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

let customLogger;
function setCustomLogger (logger) {
    customLogger = logger;
}
exports.setCustomLogger = setCustomLogger;
function log (message, severity = "info") {
    function defaultLogger () {
        let prefix = "";
        if (severity !== "info") {
            prefix = `[${severity.toUpperCase()}] `;
        }
        console.log(`${prefix}${message}`);
    }
    (customLogger || defaultLogger)(message, severity);
}
exports.log = log;
