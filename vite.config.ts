import { babel } from '@rollup/plugin-babel'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import { version } from './package.json'

export default defineConfig((conf) => {
    const env = loadEnv(conf.mode, process.cwd())

    return {
        server: {
            open: true,
            port: 3000,
            proxy: {
                '/api': {
                    target: `${env.VITE_URL}/old/lk_api.php`,
                    secure: false,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        esbuild: {
            // jsxInject: (str: string) => (!str.includes('import React') ? "import React from 'react'" : ''),
            logOverride: { 'this-is-undefined-in-esm': 'silent' },
        },
        preview: { port: 3000 },
        plugins: [
            babel({
                presets: [
                    '@babel/typescript',
                    '@babel/react',
                    'patronum/babel-preset',
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 10,
                            },
                            useBuiltIns: 'usage',
                            corejs: 3,
                        },
                    ],
                ],
                plugins: [['effector/babel-plugin', { factories: [] }]],
                extensions: ['.ts', '.tsx'],
                babelHelpers: 'bundled',
                targets: '>0.25%, iOS>= 13, last 2 versions, not dead',
            }),
            react({
                babel: {
                    plugins: [
                        [
                            'babel-plugin-styled-components',
                            {
                                displayName: process.env.NODE_ENV === 'development',
                                fileName: false,
                            },
                        ],
                    ],
                },
            }),
            tsconfigPaths(),
            svgr(),
            splitVendorChunkPlugin(),
            checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
        ],
        build: {
            outDir: 'build',
            manifest: true,
            target: 'es2015',
        },
        optimizeDeps: {
            include: ['effector'],
        },
        define: {
            'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
        },
    }
})
