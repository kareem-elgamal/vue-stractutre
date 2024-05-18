
import fs from 'fs';
/**
  * method create fils .
  * @param path - The path for file with file name.ext .
  * @param type  - type of file is (component | page | store | route) 
  * @param type  - context of file
  * @param type  - name of module 
  */
const handelTypeOfFile = (path, type, context, name) => {
    let createfile = fs.writeFile(`${path}`, context(name), 'utf8' /** encode foramte */, (err) => {
        if (err) {
            console.error(`Failed to create Vue file: ${type} => ${name}`, err);
            return;
        }

        console.log(`${type} => ${name}.vue created successfully! in ${path}`);
    });
    return createfile
}
export { handelTypeOfFile }