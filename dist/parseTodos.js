"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTodos = void 0;
var fs_1 = require("fs");
var Todo_1 = __importDefault(require("./Todo"));
var parseTodos = function (file) {
    var todoRegex = /(?<=\/\/\s?)(TODO|todo)(?= \w+)[\sA-Za-z0-9].+/g;
    var fileContent = fs_1.readFileSync(file.path, "utf-8");
    var matches = fileContent.match(todoRegex);
    matches === null || matches === void 0 ? void 0 : matches.forEach(function (match) {
        var todo = new Todo_1.default(match);
        file.todos.push(todo);
    });
    return file;
};
exports.parseTodos = parseTodos;
