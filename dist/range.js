"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rangeAllFiles = void 0;
var dir_1 = require("./dir");
var parseTodos_1 = require("./parseTodos");
var File_1 = __importDefault(require("./File"));
/**
 * recursively traverse through all the files in the project
 * and return them with all of their todos as an array of files.
 */
var result = [];
var rangeAllFiles = function (startingPath) {
    var items = dir_1.getAllFoldersAndFiles(startingPath);
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        switch (item.type) {
            case "file":
                var f = parseTodos_1.parseTodos(new File_1.default(item.path, item.name));
                result.push(f);
            case "directory":
                exports.rangeAllFiles(item.path);
        }
    }
    return result;
};
exports.rangeAllFiles = rangeAllFiles;
