export enum FormatType {
    text = "text",
    html = "html",
}

export type Config = {
    printVersion: boolean
    printHelp: boolean
    root: string
    outputPath: string
    format: FormatType
}
