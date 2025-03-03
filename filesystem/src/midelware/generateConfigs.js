import { createVueFile } from "./check-type.js";
import fs from "fs"
import Path from "path";
export const generateCongigs = (moduleList) => {
    const srcPath = Path.resolve(process.cwd(), 'src')
    const routeDirPath = Path.join(srcPath, 'router')
    if (fs.existsSync(routeDirPath)) {
        console.log(`mian Router directory is created`);
    } else {
        fs.mkdirSync(routeDirPath, { recursive: true });
    }
    const routerPath = Path.join(process.cwd(), 'src/router/index.ts');
    createVueFile(routerPath, "router-config", `name`, moduleList);
    const protectRouterPath = Path.join(process.cwd(), 'src/router/guards.ts');
    createVueFile(protectRouterPath, "router-guards", `name`, moduleList);
}