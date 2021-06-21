#FELIX
### A command-line tool to gather all your todos in a single file
***

*Felix* traverses through files and parses your TODO comments.

##USAGE
***
felix                                   -> parse todos in the current directory
felix [-p, --path <relative-path>]      -> parse todos in the specified path
felix [-v, --version]                   -> get the version number
felix [-h, --help]                      -> get help

*Felix* can parse code with C-like syntax. (// for comments)

Valid todo comments:
* //todo <comment>
* // todo <comment>
* //TODO <comment>
* // TODO <comment>