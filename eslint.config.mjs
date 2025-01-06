import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'


// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url) // eslint-disable-line no-underscore-dangle
const __dirname = path.dirname(__filename) // eslint-disable-line no-underscore-dangle

const compat = new FlatCompat({
  baseDirectory: __dirname,
})


export default [
  ...fixupConfigRules(compat.config({
    extends: [
      '@jenssimon/eslint-config-base',
    ],
    rules: {
      'unicorn/no-null': 'off',
    },
    overrides: [
      {
        files: ['*.js'],
        rules: {
          'unicorn/prefer-module': 'off',
        },
      },
    ],
  })).map((rule) => ({
    files: [
      '**/*.js',
      '**/*.mjs',
    ],
    ...rule,
  })),
  {
    ignores: [
      '.yarn/',
    ],
  },
]
