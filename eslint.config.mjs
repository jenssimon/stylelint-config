import { configs } from '@jenssimon/eslint-config-base'
import globals from 'globals'


export default [
  {
    ignores: [
      '.yarn/',
    ],
  },

  ...configs.base,

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
]
