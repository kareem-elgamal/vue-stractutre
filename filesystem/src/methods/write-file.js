
import fs from 'fs';
import { integrateRoute } from '../midelware/integrate-route.js';
/**
  * method create fils .
  * @param path - The path for file with file name.ext .
  * @param type  - type of file is (component | page | store | route) 
  * @param type  - context of file
  * @param type  - name of module
  * @param modules - when gentrate a config file will pass module
  */
const  handelTypeOfFile =  (path, type, context, name, modules) => {
    let createfile = fs.writeFile(`${path}`, context(name, path, modules), 'utf8' /** encode foramte */, (err) => {
        if (err) {
            console.error(`Failed to create Vue file: ${type} => ${name}`, err);
            return;
        }
        
        console.log(`${type} => ${name} created successfully! in ${path}`);
        if(type === 'route'){
            integrateRoute(name, path)
        }
    });
    return createfile
}
export { handelTypeOfFile }