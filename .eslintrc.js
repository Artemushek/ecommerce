module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
}
