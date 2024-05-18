import fs from 'fs';
import Path from 'path';
import { stucture } from "./input/index.js"
import { createVueFile } from "./midelware/check-type.js"
import { crateChildeModules } from "./methods/childeModules.js"

/**
  * method create fils .
  * @param strList - array : structure list .
  * @param path  - path will start from it to extract directorys and files for structure 
  */
function createVueProject(strList, path) {
  /////////////////////////////////////////////
  // // : Move into the project directory
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  // /////////////////////////////////////////
  process.chdir(path);
  for (let i = 0; i < strList.length; i++) {
    fs.mkdirSync(`${strList[i].name}`); // Create a directory 
    fs.mkdirSync(`${strList[i].name}/components`); // Create a components directory inside module
    fs.mkdirSync(`${strList[i].name}/pages`); // Create a pages directory inside module
    // get curent path
    const viewsDir = Path.join(process.cwd(), `${strList[i].name}`);
    // console.log(viewsDir);
    // ///////////////////////
    // create component files
    //////////////////////////
    for (let j = 0; j < strList[i].components.length; j++) {
      const componentFilePath = Path.join(viewsDir, `components/${strList[i].components[j]}.vue`);
      createVueFile(componentFilePath, "component", strList[i].name);
    }
    // //////////////////
    // create page files
    //////////////////////
    for (let j = 0; j < strList[i].page.length; j++) {
      const componentFilePath = Path.join(viewsDir, `pages/${strList[i].page[j]}.vue`);
      createVueFile(componentFilePath, "component", strList[i].page[j]);
    }
    // ///////////////////
    // check if has layout
    //////////////////////
    if (strList[i].layout) {
      fs.mkdirSync(`${strList[i].name}/layout`); // Create a layout  directory
      const componentFilePath = Path.join(viewsDir, 'layout/index.vue');
      const roterFilePath = Path.join(viewsDir, 'index.routes.tsx');
      createVueFile(componentFilePath, "layout", strList[i].name);
      createVueFile(roterFilePath, "route", `${strList[i].name}`); // Create a route  file

    }
    ///////////////////////////////////////////////////////////////////////////////
    // check if has store (pina) note: in future => user will chooise pinia or vuex
    ///////////////////////////////////////////////////////////////////////////////
    if (strList[i].store) {
      fs.mkdirSync(`${strList[i].name}/store`); // Create a store directory
      const componentFilePath = Path.join(viewsDir, 'store/index.ts');
      createVueFile(componentFilePath, "store", strList[i].name); // Create a store file
    }
    /////////////////////////
    // check if has children
    ////////////////////////
    if (strList[i].children) {
      fs.mkdirSync(`${strList[i].name}/modules`); // Create a module directory
      crateChildeModules(strList[i].children, path, `${strList[i].name}/modules`);

    }

    const componentFilePath = Path.join(viewsDir, 'components/index.vue');
    createVueFile(componentFilePath, "components");

  }
  console.log('Project created successfully with the custom file structure!');
  // console.log(stucture);

}

// start 
createVueProject(stucture, "../src/modules");