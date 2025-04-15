# **Vue3 Structure Builder**

`vue3-structure-builder` is a tool that helps developers quickly generate a modular and scalable file structure for Vue 3 projects. By defining a module structure in a `schema.js` file, this tool automatically generates directories, components, pages, stores, routes, and i18n configurations.

This package makes it easy to scaffold out complex Vue 3 project structures, saving you time and effort while ensuring consistency in how modules, stores, components, and routes are set up.

---

## **Features**
- Automatically generates a Vue 3 project structure based on a `schema.js` file.
- Supports generating **Pinia store** files, **i18n** localization files, dynamic **routing**, and **layouts**.
- Simplifies the creation of complex nested modules and routes.
- Built for Vue 3 projects, supporting TypeScript.
- Customizable, with options to change file extensions, directory names, and more.

---

## **Installation**

To install the package in your Vue 3 project:

```bash
npm install vue3-structure-builder
```

---

## **Usage**

### **Generate the Schema File**
To start, generate the default `schema.js` file using the following command:

```bash
npm run out-schema
```

This command will create a `schema.js` file in the root directory of your project. It will look something like this:

```javascript
export default [
  {
    name: "module1",
    store: true,         // Whether the module has a Pinia store
    i18n: false,         // Whether the module has i18n support
    components: ["CompA", "CompB"], // Component names for this module
    page: ["Home", "About"], // Page names for this module
    children: [          // Nested child modules (if any)
      {
        name: "childModule1",
        store: false,
        i18n: true,
        components: ["ChildComp1"],
        page: ["ChildPage"],
        children: null
      }
    ]
  }
];
```

### **Generate the Project Structure**
Once you’ve defined your module structure in `schema.js`, run the following command to generate the full project structure based on the schema:

```bash
npm run init-modules
```

This will:
- Create the necessary directories for each module.
- Generate `.vue` components inside the `components/` directory for each module.
- Set up the Pinia store files (`index.ts`) for modules with `store: true`.
- Configure i18n files (`en.json`) if `i18n: true` is defined.
- Automatically generate router files based on module names and nested routes.

---

## **Generated Structure Example**
Based on the `schema.js` above, running `npm run init-modules` will generate a directory structure like:

```
src/
  modules/
    module1/
      components/
        CompA.vue
        CompB.vue
      pages/
        Home.vue
        About.vue
      store/
        index.ts    // Pinia store for this module
      i18n/
        en.json    // i18n support if i18n: true
      routes.ts    // Dynamic router setup
    childModule1/
      components/
        ChildComp1.vue
      pages/
        ChildPage.vue
      store/
        index.ts
      i18n/
        en.json
      routes.ts
```

---

## **Schema File Breakdown**
The `schema.js` file defines the structure of your project. Each module in the array has the following properties:

- **`name`**: The name of the module (also used as the directory name).
- **`store`**: If `true`, a Pinia store (`index.ts`) will be generated for the module.
- **`i18n`**: If `true`, an i18n localization file (`en.json`) will be generated.
- **`components`**: An array of component names to be generated in the `components/` directory.
- **`page`**: An array of page names to be generated in the `pages/` directory.
- **`children`**: An array of child modules that will be nested inside the parent module (recursively).

#### Example schema for a module with a Pinia store and i18n support:
```javascript
{
  name: "dashboard",
  store: true,
  i18n: true,
  components: ["DashboardComp", "Sidebar"],
  page: ["index"],
  children: null
}
```

This will create:
- **Components**: `DashboardComp.vue`, `Sidebar.vue`
- **Pages**: `index.vue`
- **Store**: `index.ts` (Pinia store setup)
- **i18n**: `en.json`

---

## **Customization**

### **Customizing File Extensions**
You can customize the extensions of the generated files. For example, if you prefer to use `.jsx` for components, modify your `schema.js` to:

```javascript
{
  name: "dashboard",
  components: ["DashboardComp.jsx", "Sidebar.jsx"],
  page: ["Index.jsx"],
  store: true,
  children: null
}
```

This will generate `.jsx` files for components and pages.

### **Customizing Directory Names**
If you want to customize the default directory names (e.g., changing `components/` to `ui/`), you can modify your `schema.js` file to include a `directories` property:

```javascript
{
  name: "dashboard",
  components: ["DashboardComp", "Sidebar"],
  page: ["Index"],
  store: true,
  directories: {
    components: "ui",
    pages: "views"
  }
}
```

This will generate the following structure:

```
src/
  modules/
    dashboard/
      ui/
        DashboardComp.vue
        Sidebar.vue
      views/
        Index.vue
      store/
        index.ts
```

---

## **Troubleshooting**

### **Common Issues**

#### Missing `schema.js` File
Ensure the `schema.js` file exists in the root directory. The builder depends on this file to generate the structure.

#### Missing Dependencies
If the tool isn’t working as expected, ensure all dependencies are installed by running:

```bash
npm install
```

#### Permission Issues
If you encounter permission errors, ensure your terminal has sufficient write permissions for the directories.

#### Invalid Schema Format
Make sure your `schema.js` file is correctly formatted. If there are syntax errors, the tool will fail.
