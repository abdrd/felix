# FELIX

### A command-line tool to gather all your todos in a single file

[![NPM](https://nodei.co/npm/felixx.png)](https://npmjs.org/package/felixx)

---

_Felix_ traverses through files and parses your TODO comments.

## USAGE

| command                             | description                          |
|-------------------------------------|--------------------------------------|
| felix                               | parse todos in the current directory |
| felix -p, --path <relative-path>    | parse todos in the specified path    |
| felix -v, --version                 | get the version number               |
| felix -h, --help                    | get help                             |
| felix -op, --output <relative-path> | output to the specified path         |


_Felix_ can parse C-like comments and Python comments.

-   Case-insensitive
-   Any number of spaces between // (or #) and TODO (or todo).
