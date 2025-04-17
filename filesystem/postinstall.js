import fs from 'fs';
// import Path from 'path';

// const packageJsonPath = Path.join(process.cwd(), 'package.json'); // Dynamically resolve package.json path
const packageJsonPath = '../../package.json' // Dynamically resolve package.json path
console.log("📂 package.json path:", packageJsonPath);

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    console.log("📄 Current package.json content:", packageJson);

    // Ensure scripts object exists
    packageJson.scripts = packageJson.scripts || {};

    // Add the required scripts
    packageJson.scripts["generate-str"] = `node node_modules/vue3-structure-builder/dist/main/index.js`;
    packageJson.scripts["out-schema"] = `node node_modules/vue3-structure-builder/dist/output-file/index.js`;

    // Write the updated package.json back to the file
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log("✅ Scripts added successfully to package.json!");