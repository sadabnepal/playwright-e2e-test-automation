import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import playwrightPlugin from 'eslint-plugin-playwright';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        files: ['tests/**/*.{js,ts}'],
    },
    {
        ignores: [
            'node_modules/**',
            'playwright-report/**',
            'reports/**',
            'test-results/**',
            '.DS_Store'
        ]
    },
    {
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    pluginJs.configs.recommended,
    tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/no-floating-promises': 'error'
        }
    },
    {
        files: ['tests/api/**/*.ts', 'tests/web/**/*.ts'],
        plugins: {
            playwright: playwrightPlugin
        },
        rules: {
            ...playwrightPlugin.configs['flat/recommended'].rules,
        }
    },
    {
        files: ['tests/**/*.ts'],
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            '@stylistic/quotes': [
                'error',
                'double',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: "always"
                }
            ],
            '@stylistic/indent': [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],
            '@stylistic/semi': [
                'error',
                'always',
                {
                    omitLastInOneLineBlock: true,
                    omitLastInOneLineClassBody: true
                }
            ]
        }
    }
]);