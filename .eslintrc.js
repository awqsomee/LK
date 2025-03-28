module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.eslint.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    plugins: ['prettier', '@typescript-eslint', 'react', 'boundaries', 'react-refresh'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:boundaries/strict',
    ],
    env: {
        browser: true,
        es6: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
        'boundaries/include': ['src/*/**'],
        'boundaries/elements': [
            { type: 'consts', pattern: 'src/shared/consts/**' },
            { type: 'lib', pattern: 'src/shared/lib/**' },
            { type: 'api', pattern: 'src/shared/api/**' },
            { type: 'session', pattern: 'src/shared/session/**' },
            { type: 'routing', pattern: 'src/shared/routing/**' },
            { type: 'ui', pattern: 'src/shared/ui/**' },
            { type: 'tutorial', pattern: 'src/shared/tutorial/**' },
            { type: 'shared', pattern: 'src/shared/**' },
            { type: 'entities', pattern: 'src/entities/**' },
            { type: 'features', pattern: 'src/features/**' },
            { type: 'widgets', pattern: 'src/widgets/**' },
            { type: 'pages', pattern: 'src/pages/**' },
            { type: 'app', pattern: 'src/app/**' },
        ],
    },
    rules: {
        'react-refresh/only-export-components': 'warn',
        'react/react-in-jsx-scope': 'off',
        'linebreak-style': 'off',
        'prettier/prettier': [
            'off',
            {
                endOfLine: 'auto',
            },
            {
                usePrettierrc: true,
            },
        ],
        'no-console': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        'no-eval': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/jsx-key': 1,
        'react/react-in-jsx-scope': 2,
        'boundaries/element-types': [
            'error',
            {
                default: 'disallow',
                rules: [
                    {
                        from: 'app',
                        allow: [
                            'pages',
                            'widgets',
                            'features',
                            'entities',
                            'shared',
                            'ui',
                            'tutorial',
                            'routing',
                            'session',
                            'api',
                            'lib',
                            'consts',
                        ],
                    },
                    {
                        from: 'pages',
                        allow: [
                            'widgets',
                            'features',
                            'entities',
                            'shared',
                            'ui',
                            'tutorial',
                            'routing',
                            'session',
                            'api',
                            'lib',
                            'consts',
                        ],
                    },
                    {
                        from: 'widgets',
                        allow: [
                            'features',
                            'entities',
                            'shared',
                            'ui',
                            'tutorial',
                            'routing',
                            'session',
                            'api',
                            'lib',
                            'consts',
                        ],
                    },
                    {
                        from: 'features',
                        allow: ['entities', 'shared', 'ui', 'tutorial', 'routing', 'session', 'api', 'lib', 'consts'],
                    },
                    {
                        from: 'entities',
                        allow: ['shared', 'ui', 'tutorial', 'routing', 'session', 'api', 'lib', 'consts'],
                    },
                    { from: 'shared', allow: ['ui', 'tutorial', 'routing', 'session', 'api', 'lib', 'consts'] },
                    { from: 'tutorial', allow: ['ui', 'routing', 'session', 'api', 'lib', 'consts'] },
                    { from: 'ui', allow: ['routing', 'session', 'api', 'lib', 'consts'] },
                    { from: 'routing', allow: ['session', 'api', 'lib', 'consts'] },
                    { from: 'session', allow: ['api', 'lib', 'consts'] },
                    { from: 'api', allow: ['lib', 'consts'] },
                    { from: 'lib', allow: ['consts'] },
                ],
            },
        ],
    },
}
