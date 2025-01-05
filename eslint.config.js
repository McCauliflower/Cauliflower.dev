import { defineConfig } from 'eslint-define-config';
import vuePlugin from 'eslint-plugin-vue';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import vueParser from 'vue-eslint-parser';
import typescriptParser from '@typescript-eslint/parser';
import essentialRules from 'eslint-plugin-vue/lib/configs/flat/vue3-essential.js';
import stronglyRecommended from 'eslint-plugin-vue/lib/configs/flat/vue3-strongly-recommended.js';

export default defineConfig({
  languageOptions: {
    globals: {
      window: 'readonly',
      document: 'readonly',
      process: 'readonly',
    },
    parser: vueParser,  // This uses `vue-eslint-parser` for Vue files
    parserOptions: {
      parser: typescriptParser,  // This uses `@typescript-eslint/parser` for TypeScript support
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    vue: vuePlugin,
    '@typescript-eslint': typescriptPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    // Dynamically import Vue's recommended rules
    ...essentialRules.rules,
    ...stronglyRecommended.rules,
    // TypeScript-specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Prettier integration
    'prettier/prettier': 'error', // Enforces Prettier formatting rules
  },
  files: [`'**/*.js',·'*.js',·'**/*.ts',·'*.ts',·'**/*..vue',·'*.vue'`],
});