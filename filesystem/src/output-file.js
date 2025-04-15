import fs from 'fs';
import Path from 'path';
import { createVueFile } from './midelware/check-type.js';
// const packageJsonPath = '../../package.json';

export const ouputSchemaFile = () =>{
    // const packageJsonPath = '../../schema.js';
    const schemaDir = Path.join(process.cwd(), `schema.js`);
    // fs.mkdirSync(schemaDir);
    if (!fs.existsSync(schemaDir)) {
        createVueFile(schemaDir, "schema", 'schema' );
    }else{
        console.log("schema.js file already exists");
    }

}
ouputSchemaFile()