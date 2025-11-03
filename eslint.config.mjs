import path from 'node:path'

import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import { configs, plugins } from 'eslint-config-airbnb-extended'
import { configs as eslintConfigs } from '@jenssimon/eslint-config-base'
import globals from 'globals'


const gitignorePath = path.resolve('.', '.gitignore')


const jsConfig = [
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  plugins.stylistic,
  plugins.importX,
  ...configs.base.recommended,
]


export default defineConfig(
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      '.yarn/',
    ],
  },

  jsConfig,

  eslintConfigs.base,

  {
    rules: {
      'unicorn/no-null': 'off',
    },
  },

  {
    files: [
      '**/*.js',
    ],
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
)
