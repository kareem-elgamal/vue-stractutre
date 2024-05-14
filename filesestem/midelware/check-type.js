import { storeCode, layoutCode, componentCode, routerCode } from "../types/example-forms.js"
import { handelTypeOfFile } from "../methods/write-file.js"
/**
  * chech of type of module .
  * @param path - The path for file with file name.ext .
  * @param type  - type of file is (component | page | store | route) 
  * @param fileName  - name of directory
  */
export function createVueFile(path, type, fileName) {
    if (type == "component") {
        handelTypeOfFile(path, type, componentCode, fileName)
    } else if ((type == "layout")) {
        handelTypeOfFile(path, type, layoutCode, fileName)
    } else if ((type == "store")) {
        handelTypeOfFile(path, type, storeCode, fileName)
    } else if ((type == "route")) {
        handelTypeOfFile(path, type, routerCode, fileName)
    }
    // }
    // 
}