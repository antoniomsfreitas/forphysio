/* eslint-env node */
export default {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'header-max-length': [0],
    'function-rules/header-max-length': [
      2, // level: error
      'always',
      (parsed) => {
        if (parsed.header.length > 100) {
          return [false, `header must not to be longer than 100 characters, current length is ${parsed.header.length}`];
        }
        if (
          !parsed.header.match(
            /^((feat)|(test)|(build)|(chore)|(ci)|(docs)|(fix)|(perf)|(refactor)|(style))\(((FPHYSIO-\d{1,4}))\):/gm,
          )
        ) {
          return [false, `the scope must follow the pattern rule = "feat(FPHYSIO-153): commit example"`];
        }
        return [true];
      },
    ],
  },
};
