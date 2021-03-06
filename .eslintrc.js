module.exports = {
  "parser": "babel-eslint",
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-quotes": [2, "prefer-single"],
    "no-confusing-arrow": [0, {"allowParens": false}],
    "no-nested-ternary": 0,
    "no-prototype-builtins": 0,
  },
  "globals": {
    "document": 1,
  },
};
