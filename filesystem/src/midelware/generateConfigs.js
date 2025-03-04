import { createVueFile } from "./check-type.js";
import fs from "fs"
import Path from "path";
export const generateCongigs = (moduleList , is_i18n) => {
    const srcPath = Path.join(process.cwd(), 'src')
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
    if (is_i18n){
        console.log("process.cwd()>>>>>>>" ,  process.cwd());
        const i18nDirPath = Path.join(srcPath, 'i18n');
        fs.mkdirSync(i18nDirPath, { recursive: true });
        const localsDirPath =  Path.join(i18nDirPath, 'locales')
        fs.mkdirSync( localsDirPath, { recursive: true });
        const configFilePath = Path.join(i18nDirPath, 'index.ts');
        createVueFile(configFilePath, "i18n_conf", `index`);
        const enFilePath = Path.join(localsDirPath, 'en.ts')
        const arFilePath = Path.join(localsDirPath, 'ar.ts')
        createVueFile( enFilePath, "i18n", `en.ts`);
        createVueFile( arFilePath, "i18n", `ar.ts`);
        // process.chdir('../../')
    }
}