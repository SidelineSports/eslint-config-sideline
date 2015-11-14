module.exports = {
  // Force double quotes
  "quotes": [2, "double"],

  // Disable trailing spaces
  "no-trailing-spaces": 2,

  // Two spaces indent
  "indent": [2, 2],

  // Require space after operator keywords
  "space-after-keywords": 2,

  // Do not allow a space before function parens
  "space-before-function-paren": [2, "never"],

  // Generally do not allow spaces inside parens, e.g.: ( 1 + 2 )
  "space-in-parens": [1, "never"],

  // Allow more than one variable to be declared on a single line
  "one-var": 0,

  // Issue a warning if the cycomatic complexity of a method goes over 2
  "complexity": [1, 2],

  // Force camelCase
  "camelcase": [ 2, { "properties": "always" }, ],

  // Raise an error if a method gets depth > 3
  "max-depth": [2, 3],

  // Raise an error if a line goes over 80 characters
  "max-len": [2, 80],

  // Disallow dots at the end of a line
  "dot-location": [2, "property"],

  // Issue warning on missing jsdoc documentation
  "require-jsdoc": 1,

  // Various validations for jsdoc documentation
  "valid-jsdoc": 2,

  // Disallow synchronous node methods when async alternative exists
  "no-sync": 2,

  // Force return with a callback
  "callback-return": [ 2, ["callback", "cb", "next"], ],

  // Allow only a subset of variable shadowing
  "no-shadow": [
    2,
    {
      "allow": [
        "done",
        "resolve",
        "reject",
        "cb",
        "err"
      ]
    }
  ]
};
