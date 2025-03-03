import Path from "path";
import fs from "fs"
export const checkModulesDir = (initpath) => {
    const srcPath = Path.join(process.cwd(), initpath);
    const modulesPath = Path.join(srcPath, 'modules')
    if (!fs.existsSync(modulesPath)) {
        fs.mkdirSync(modulesPath, { recursive: true });
    } else {
        console.log("Main module dir directory already exists");
    }
}