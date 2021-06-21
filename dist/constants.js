"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USAGE = exports.OUTPUT_FILE_NAME = exports.VERSION = exports.PROGRAM = void 0;
var chalk_1 = __importDefault(require("chalk"));
exports.PROGRAM = "felix";
exports.VERSION = process.env.FELIX_VERSION || "1.0.0";
exports.OUTPUT_FILE_NAME = "TODO";
exports.USAGE = chalk_1.default.yellow.bgMagenta.bold("\n                                                                           \n        USAGE:                                                             \n            felix  -p | --path <relative-path>                             \n            -v      --version   -> get felix version                       \n            -h      --help      -> get help                                \n                                                                           ");
