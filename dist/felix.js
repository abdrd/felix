#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var range_1 = require("./range");
var fs_1 = require("fs");
var Felix = function () {
    var args = process.argv.slice(2, process.argv.length);
    var PROGRAM_CONFIG = {
        printVersion: false,
        printHelp: false,
        root: ".",
    };
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        switch (arg) {
            case "-h":
            case "--help":
                PROGRAM_CONFIG.printHelp = true;
                break;
            case "-v":
            case "--version":
                PROGRAM_CONFIG.printVersion = true;
                break;
            case "-p":
            case "--path":
                // get the path
                PROGRAM_CONFIG.root = process.argv.slice(process.argv.indexOf(arg), process.argv.indexOf(arg) + 2)[1];
                break;
        }
    }
    if (PROGRAM_CONFIG.printHelp)
        console.log(constants_1.USAGE);
    if (PROGRAM_CONFIG.printVersion)
        console.log(constants_1.VERSION);
    var results = range_1.rangeAllFiles(PROGRAM_CONFIG.root);
    // output todos
    var output = [];
    for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
        var result = results_1[_a];
        if (result.todos.length > 0) {
            output.push("\n" + result.path + "\n" + result.todos.map(function (todo) { return "\t" + todo.text; }).join("\n"));
        }
    }
    // create the TODO file 
    fs_1.writeFileSync(constants_1.OUTPUT_FILE_NAME, "");
    // ouput to the TODO file
    for (var _b = 0, output_1 = output; _b < output_1.length; _b++) {
        var out = output_1[_b];
        fs_1.appendFileSync(constants_1.OUTPUT_FILE_NAME, out);
    }
};
Felix();
