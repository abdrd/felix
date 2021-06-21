"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var File = /** @class */ (function () {
    function File(path, name) {
        this.todos = [];
        this.path = path;
        this.name = name;
    }
    File.prototype.setTodos = function (todos) {
        this.todos = todos;
    };
    return File;
}());
exports.default = File;
