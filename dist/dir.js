"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFoldersAndFiles = void 0;
var directory_tree_1 = __importDefault(require("directory-tree"));
// pretty self explanatory, i guess
var getAllFoldersAndFiles = function (path) {
    var tree = directory_tree_1.default(path);
    if (typeof tree.children !== "undefined") {
        return tree.children.filter(function (val) { return val.type === "directory" || "file"; });
    }
    return [];
};
exports.getAllFoldersAndFiles = getAllFoldersAndFiles;
