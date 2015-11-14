# eslint-config-sideline

Contains Sideline Sports, Inc., specific modifications to the popular eslint config set [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

This set is generally speaking more opinionated.

## Divergences

Areas where this overrides the current eslint-config-airbnb.

- Double rather than single quotes
- Allow more than one variable declaration on a line

## Further Specificatons

Areas where this specifies what is unspecified in eslint-config-airbnb.

### Errors

#### Style/Documentation

- No trailing spaces
- Two space indentation
- Max line length is 80
- Disallow dots at the end of a line
- Require space after keywords (e.g., `if () {}` rather than `if() {}`)
- Disallow spaces after function parens (e.g., `function ()`)
- Require camelcase for properties
- Invalid jsdoc
- Disallow variable shadowing except for common idioms like: done, resolve, reject, db, and err.

#### Code

- Function depth > 3
- Disallow using sync node methods when async alternative exists
- Raise error if return is not used with early callback (e.g., `if (err) return cb(err)`)

### Warnings

- > medium complexity
- require jsdoc
- spaces inside parens (e.g., `( 1 + 2 )`)
