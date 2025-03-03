
// Type Stracture {
//     name: String;
//     path: String;
//     store: Boolean;
//     layout: Boolean;
//     components: string[] ; 
//     page: string[] ;
//     children: string[] | null ; 
// }folder1
export const stucture = [
    {
        name: "dashboard", // name of directory
        path: "../src/modules/dashboard/pages",// not required but posiple will use it in future
        store: true, // is module has store (pinia)
        layout: false, // is has layout (note : is true (has a layout) dynamicly will extract route file for direcctory )
        i18n: false, // is has i18n 
        components: ["components1", "components2"], // components name for module 
        page: ["index", 'add'], // pages name 
        children: null // is has children 
    },
    {
        name: "category",
        path: "../src/modules/category/pages",
        store: false,
        layout: true,
        components: ["components1", "components2"],
        page: ["index"],
        children: [
            {
                name: "children1",
                path: "../src/modules/home/folder2/modules",
                store: false,
                layout: true,
                components: ["components1", "components2"],
                page: ["index"],
                children: null
            },
            {
                name: "children2",
                path: "../src/modules/home/folder2/modules",
                store: false,
                layout: true,
                components: ["components1", "components2"],
                page: ["index"],
                children: [
                    {
                        name: "children1",
                        path: "../src/modules/home/folder2/modules/children2/modules",
                        store: false,
                        layout: true,
                        components: ["components1", "components2"],
                        page: ["index"],
                        children: null
                    },
                    {
                        name: "children2",
                        path: "../src/modules/folder2/modules/children2/modules",
                        store: false,
                        layout: true,
                        components: ["components1", "components2"],
                        page: ["index"],
                        children: null
                    }
                ],
            }
        ],
    },
    {
        name: "services",
        path: "../src/modules/",
        store: true,
        layout: true,
        components: ["components1", "components2"],
        page: ["index"],
        children: [
            {
                name: "manage-services",
                path: "../src/modules/services/modules",
                store: false,
                layout: false,
                components: ["components1", "components2"],
                page: ["index"],
                children: null
            },
            {
                name: "form-templates",
                path: "../src/modules/services/modules",
                store: false,
                layout: false,
                components: ["components1", "components2"],
                page: ["index"],
                children: null
            },
        ]
    },
]