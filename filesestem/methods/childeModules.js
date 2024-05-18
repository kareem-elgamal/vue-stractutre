import fs from 'fs';
import Path from 'path';
import { createVueFile } from "../midelware/check-type.js"

export const crateChildeModules = (structure, projectPath, childePath) => {
    process.chdir(childePath);
    for (let i = 0; i < structure.length; i++) {
        fs.mkdirSync(`${structure[i].name}`); // Create a directory 
        fs.mkdirSync(`${structure[i].name}/components`); // Create a components directory inside module
        fs.mkdirSync(`${structure[i].name}/pages`); // Create a pages directory inside module
        const viewsDir = Path.join(process.cwd(), `${structure[i].name}`);
        for (let j = 0; j < structure[i].components.length; j++) {
            const componentFilePath = Path.join(viewsDir, `components/${structure[i].components[j]}.vue`);
            createVueFile(componentFilePath, "component", structure[i].name);
        }
        // //////////////////
        // create page files
        //////////////////////
        for (let j = 0; j < structure[i].page.length; j++) {
            const componentFilePath = Path.join(viewsDir, `pages/${structure[i].page[j]}.vue`);
            createVueFile(componentFilePath, "component", structure[i].page[j]);
        }
        // ///////////////////
        // check if has layout
        //////////////////////
        if (structure[i].layout) {
            fs.mkdirSync(`${structure[i].name}/layout`); // Create a layout  directory
            const componentFilePath = Path.join(viewsDir, 'layout/index.vue');
            const roterFilePath = Path.join(viewsDir, 'index.routes.tsx');
            createVueFile(componentFilePath, "layout", structure[i].name);
            createVueFile(roterFilePath, "route", `${structure[i].name}`); // Create a route  file
        }
        ///////////////////////////////////////////////////////////////////////////////
        // check if has store (pina) note: in future => user will chooise pinia or vuex
        ///////////////////////////////////////////////////////////////////////////////
        if (structure[i].store) {
            fs.mkdirSync(`${structure[i].name}/store`); // Create a store directory
            const componentFilePath = Path.join(viewsDir, 'store/index.ts');
            createVueFile(componentFilePath, "store", structure[i].name); // Create a store file
        }
        /////////////////////////
        // check if has children
        ////////////////////////
        if (structure[i].children) {
            // const parentPath = path;
            fs.mkdirSync(`${structure[i].name}/modules`); // Create a module directory
            crateChildeModules(structure[i].children, projectPath, `${structure[i].name}/modules`);
            // process.chdir(parentPath);
        }
    }
    process.chdir("../../");

}