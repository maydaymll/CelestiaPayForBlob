module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-scss',
    // 'stylelint-order',
  ],
  rules: {
    'max-empty-lines': 1,
    'max-nesting-depth': null,
    'selector-max-compound-selectors': null,
    'font-family-no-missing-generic-family-keyword': null, 
    'length-zero-no-unit': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
  },
}
