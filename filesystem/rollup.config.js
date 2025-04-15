import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: {
        main: 'src/index.js',
        'output-file': './src/output-file.js', // Define separate input
    },
    output: [
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name]/index.js',
            sourcemap: true,
        },
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name]/index.cjs',
            sourcemap: true,
        },
    ],
    external: ["../../../moduels-schema/schema.js"],
    plugins: [
        resolve(),
        commonjs(),
        terser(),
    ],
    external: ['vue3'],
};
