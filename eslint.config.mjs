import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config({
  extends: [eslint.configs.recommended, tseslint.configs.recommended, prettierRecommended],
  rules: {
    'comma-dangle': 'off',
    'max-len': [
      'error',
      { code: 120, tabWidth: 2, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true },
    ],
  },
})
