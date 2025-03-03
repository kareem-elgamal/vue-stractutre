import { storeCode, layoutCode, componentCode, routerCode, PageCode, i18nCode, i18nConf, routeConfigCode, protectRouter } from "../types/example-forms.js"
import { handelTypeOfFile } from "../methods/write-file.js"
/**
  * chech of type of module .
  * @param path - The path for file with file name.ext .
  * @param type  - type of file is (component | page | store | route) 
  * @param fileName  - name of module  
  * @param mudules  - not required it has all current module  
  */
export function createVueFile(path, type, fileName, mudules) {
    switch (type) {
        case "component":
            handelTypeOfFile(path, type, componentCode, fileName);
            break;
        case "page":
            handelTypeOfFile(path, type, PageCode, fileName);
            break;
        case "layout":
            handelTypeOfFile(path, type, layoutCode, fileName);
            break;
        case "store":
            handelTypeOfFile(path, type, storeCode, fileName);
            break;
        case "router-config":
            handelTypeOfFile(path, type, routeConfigCode, "", mudules);
            break;
        case "router-guards":
            handelTypeOfFile(path, type, protectRouter, "", mudules);
            break;
        case "route":
            handelTypeOfFile(path, type, routerCode, fileName , mudules)
            break;
        case "i18n":
            handelTypeOfFile(path, type, i18nCode, fileName);
            break;
        case "i18n_conf":
            handelTypeOfFile(path, type, i18nConf, fileName);
            break;
        default:
            console.error(`Unknown type: ${type}`);
    }
}
