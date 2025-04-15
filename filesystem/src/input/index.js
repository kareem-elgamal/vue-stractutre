
// Type Stracture {
//     name: String;
//     store: Boolean;
//     components: string[] ; 
//     page: string[] ;
//     children: string[] | null ; 
// }folder1
export const schema = [
    {
        name: "dashboard", // name of module
        store: true, // is module has store (pinia)
        i18n: false, // is has i18n 
        components: ["component-1", "component-2"], // components name for module 
        page: ["index", 'add'], // pages name 
        children: null // is has children 
    },
    {
        name: "category",
        store: false,
        components: ["components1", "components2"],
        page: ["index"],
        children: [
            {
                name: "children1",
                store: false,
                layout: true,
                components: ["components1", "components2"],
                page: ["index"],
                i18n:true,
                children: null
            },
            {
                name: "children2",
                store: false,
                i18n:false,
                layout: true,
                components: ["components1", "components2"],
                page: ["index"],
                children: [
                    {
                        name: "children1",
                        store: false,
                        i18n:true,
                        components: ["components1", "components2"],
                        page: ["index"],
                        children: null
                    },
                    {
                        name: "children2",
                        store: false,
                        i18n:true,
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
        store: true,
        i18n:true,
        components: ["components1", "components2"],
        page: ["index"],
        children: [
            {
                name: "manage-services",
                store: false,
                components: ["components1", "components2"],
                page: ["index"],
                children: null
            },
            {
                name: "form-templates",
                store: false,
                components: ["components1", "components2"],
                page: ["index"],
                children: null
            },
        ]
    },
]