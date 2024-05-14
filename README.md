# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# Vue Structure

## Description

This project serves as a foundation for building modern web applications using Vue.js. It includes a preconfigured setup with useful features such as hot reloading, bundling, and linting.

## UI Component Libraries

This project utilizes the following UI component libraries:

- [DaisyUI](https://daisyui.com/): A lightweight and modular UI component library for Vue.js applications. It provides a set of customizable components that can be easily integrated into your project.

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework that allows you to rapidly build custom user interfaces. Tailwind CSS provides a comprehensive set of pre-designed utility classes that can be used to style your components.

## State Management

This project uses Piania as the state management library. Piania provides a simple and scalable way to manage the application state in Vue.js applications.

## Form Handling

For form handling, this project utilizes Vee-Validate. Vee-Validate is a flexible form validation library that helps you validate and handle form inputs in a Vue.js application.

## Data Fetching

This project uses Vue-Query for data fetching. Vue-Query is a powerful data-fetching library that simplifies the process of fetching, caching, and updating data in your Vue.js application.

## Folder Structure

The project follows a standard folder structure for organizing your code:

├── src
│ ├── constants -> any constants are global
│ │ └── index.ts -> global constants
│ │ └── types.ts -> global types
│ │
│ ├── components -> global components like buttons, inputs
│ │ └── index.ts -> export all components
│ │ └── types.ts -> types of global components
│ │
│ ├── helpers -> global functions like date formatting
│ │
│ ├── composables -> custom composables
│ │
│ ├── layouts
│ │
│ ├── modules -> like users, authentication
│ │
│ ├── router -> config of router
│ │
│ ├── store -> globbal state managment
│ │
│ ├── styles -> global styles
│ │
│ ├── setupAxios -> axios interceptor
