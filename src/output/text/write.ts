import { appendFileSync, writeFileSync } from "fs"
import { OUTPUT_FILE_NAME, OUTPUT_PATH_ERROR } from "../../constants"
import { produceFormattedResults } from "../format"

export const produceTextOutput = (root: string, outputPath: string) => {
    try {
        process.chdir(outputPath)
    } catch (e) {
        console.log(OUTPUT_PATH_ERROR)
    }

    // create the TODO file
    writeFileSync(OUTPUT_FILE_NAME, "")

    const output = produceFormattedResults(root)

    // ouput to the TODO file
    for (const out of output) {
        appendFileSync(OUTPUT_FILE_NAME, out)
    }
}
