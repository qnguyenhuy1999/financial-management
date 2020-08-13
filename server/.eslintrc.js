module.exports = {
  extends: ["airbnb-base", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    semi: [1, "always"],
    quotes: [2, "double"],
    indent: ["error", 2],
    "no-useless-escape": 0,
    "consistent-return": 0,
    "no-useless-catch": 0,
    "no-unused-vars": 1,
    "no-console": 0,
    "dot-notation": 0,
    "object-curly-newline": 0,
    "no-underscore-dangle": 0,
  },
  env: {
    es6: true,
    browser: true,
  },
};
