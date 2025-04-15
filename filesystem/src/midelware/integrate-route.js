import fs from "fs";
import path from "path";
import Path from "path";
/////////////
// helper
function camelToKebab(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert a dash before uppercase letters
        .toLowerCase(); // Convert everything to lowercase
}
//   ////
function findParentRouterFile(startPath) {
    let currentDir = startPath;
    while (currentDir !== Path.parse(currentDir).root) {
        const configTs = Path.join(currentDir, "routes.tsx");        
        if (fs.existsSync(configTs)) return configTs;
        currentDir = Path.dirname(currentDir); // move up one level
        // console.log("Checking:",currentDir);

    }
    return null; 
}

export const  integrateRoute = (name, filePath) => {
        const cutPath = filePath.replace(/^.*\/src\//, 'src/');
        
        // const currentRoute = cutPath ? cutPath[1] : filePath;
        // console.log(filePath);
        const parentroutePath = findParentRouterFile(Path.join(Path.dirname(filePath) , "..")  );
        
        if (!parentroutePath) {
            console.error("router.ts or router.js not found in any parent directory .");
        }else{
            
            // const parentRouteName = Path.basename(Path.dirname(parentroutePath)); // Get parent directory name
            // console.log("parentroutePath>>>>>>>>>>>>>>>>" ,parentroutePath);
            // console.log("filePath>>>>>>>>>>>>>>>>" ,filePath);
            let parentRouteContent = fs.readFileSync(parentroutePath, { encoding: "utf8", flag: "r" });
            // console.log("parentRouteContent>>>>>>>>>>>>>>>." , parentRouteContent);
            console.log("Hex Dump:", parentRouteContent.toString("hex"));
            
            try {
                const parentExtendRegex = /children:\s*\[(.*?)\]/s;;
                const match = parentRouteContent.match(parentExtendRegex);
                const relativePath = Path.relative(parentroutePath, filePath).replace(/^(\.\.\/)+/, './');
                // console.log("relativePath????" , relativePath);
                // console.log("filePath????" , filePath);
                const newChildRoute = `{ path: "/${camelToKebab(name)}", component: () => import("${relativePath}") }`;
                
                // const match = parentRouteContent.match(parentRouteRegex);
                
                if (match) {
                    let extendArrayContent = match[1].trim();
                    let extendArray = extendArrayContent
                    ? extendArrayContent.split(',').map(item => item.trim())
                    // .replace(/['"]/g, '')
                    : [];
                    
                    if (!extendArray.includes(newChildRoute)) {
                        extendArray.push(newChildRoute); // Push new module path
                        const updatedExtendArray = `children: [\n${extendArray.map(item => `${item}`).join(',\n')}\n]\n `;
                        
                        // Replace only the parent.extend array inside the file
                        parentRouteContent = parentRouteContent.replace(parentExtendRegex, updatedExtendArray);
                        fs.writeFileSync(parentroutePath, parentRouteContent, 'utf8');
                        console.log(`Add "${filePath}" to children[] in ${parentroutePath}`);
                    } else {
                        console.log(`module "${filePath}" is already in children[]`);
                    }
                    
                } else {
                        parentRouteContent = parentRouteContent.replace(
                            /(children:\s*\[)([\s\S]*?)(\])/,
                            `$1$2\n    ${newChildRoute},$3`
                        );
                        fs.writeFileSync(parentroutePath, parentRouteContent, 'utf8');
                    console.log(`created children[] and added "${newChildRoute}" in ${parentroutePath}`);
                }
            } catch (error) {
                console.error("error reading or modifying the router file:", error);
            }
        }
    };