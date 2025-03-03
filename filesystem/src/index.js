import fs from 'fs';
import Path from 'path';
import { stucture } from "./input/index.js"
import { createVueFile } from "./midelware/check-type.js"
import { generateCongigs } from './midelware/generateConfigs.js';
import { checkModulesDir } from './midelware/checkModuleDir.js';
// import { integrateRoute } from './midelware/integrate-route.js';
// 
// congigs
const args = process.argv.slice(2);
let path = args[0] ? args[0] : './src'
//////////////////////////////////////
/**
  * method create fils .
  * @param strList - array : structure list .
  * @param path  - path will start from it to extract directorys and files for structure 
  */
 let createdConfig = true;
 function createVueProject(strList, path) {
  // check modules dir is found, if not found will create dir for modules
  if (createdConfig) {
    checkModulesDir(path);
    generateCongigs(strList)
    createdConfig = false
  }
  //  create cofig (i18n , router & guards)
  /////////////////////////////////////////////
  // // : Move into the project directory
  // /////////////////////////////////////////
  process.chdir(`${path}/modules`);
  for (let i = 0; i < strList.length; i++) {
    fs.mkdirSync(`${strList[i].name}`); // Create a directory 
    fs.mkdirSync(`${strList[i].name}/components`); // Create a components directory inside module
    fs.mkdirSync(`${strList[i].name}/pages`); // Create a pages directory inside module
    
    // get curent path
    const viewsDir = Path.join(process.cwd(), `${strList[i].name}`);
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
    if(strList[i]?.page?.length){
      console.log(strList[i]?.page?.length);
      for (let j = 0; j < strList[i]?.page.length; j++) {
        let componentFilePath = Path.join(viewsDir, `pages/${strList[i].page[j]}.vue`);
        createVueFile(componentFilePath, "page", strList[i].page[j] , strList[i]);
      }
    }
    // ///////////////////
    // check if has layout
    //////////////////////
    if (strList[i].layout) {
      fs.mkdirSync(`${strList[i].name}/layout`); // Create a layout  directory
      const componentFilePath = Path.join(viewsDir, 'layout/index.vue');
      createVueFile(componentFilePath, "layout", strList[i].name);
    }
    if(strList[i].layout || strList[i].children ||strList[i].children){
      const roterFilePath = Path.join(viewsDir, 'routes.tsx');
      createVueFile(roterFilePath, "route", `${strList[i].name}` , strList[i]);
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
      createVueProject(strList[i].children, `${strList[i].name}`);
      // setTimeout(() => {
        // console.log("viewsDir>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" ,viewsDir);
        // integrateRoute(strList[i].name,`${viewsDir}`);
      // }, 1000);

        // integrateRoute(strList[i].name,viewsDir);
  
      process.chdir("../../"); // back to parent path
    }
  }
  console.log('Project created successfully with the custom file structure!');
  // console.log(stucture);

}

// start 

createVueProject(stucture, path);