/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");


module.exports = {
  // TODO: Research
  rules: {
    "no-undef": "off"
  },
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
