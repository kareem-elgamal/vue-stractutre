import fs from 'fs';
// import Path from 'path';
// import { createVueFile } from './src/midelware/check-type.js';
// import { ouputSchemaFile } from './dist/output-file/index.js';
// import { ouputSchemaFile } from './dist/output-file/index.js';


const packageJsonPath = '../../package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// const packageJsonPath = Path.join(process.cwd(), 'package.json'); // Assuming dist is the folder for the built files

// const distPath = path.join(process.cwd(), 'dist'); // Assuming dist is the folder for the built files
try {
    // ouputSchemaFile();
    // const rootDir = process.cwd();
    // const schemaDir = Path.join(process.cwd(), `moduels-schema`);
    // fs.mkdirSync(schemaDir);
    // createVueFile(Path.join(schemaDir, `schema.js`), "schema", 'schema' );
    // const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    // ouputSchemaFile()
    // Add your scripts

    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts["generate-str"] = `node  node_modules/vue3-structure-builder/dist/main/index.js`;
    packageJson.scripts["out-schema"] = `node  node_modules/vue3-structure-builder/dist/output-file/index.js`;
    // Write back to package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log('ss => ', JSON.parse(fs.readFileSync(packageJsonPath, "utf8")));

    console.log("✅ Scripts added successfully to package.json!");
} catch (error) {
    console.error("❌ Failed to update package.json", error);
}