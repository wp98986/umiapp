module.exports = {
  extends: 'eslint-config-umi',
  env: {
    // dva: true,
    // 'antd-mobile': true,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '@config/', '^umi/'],
      },
    ],
    'import/no-extraneous-dependencies': [
      0,
      {
        optionalDependencies: true,
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'prefer-destructuring': [
      2,
      {
        object: false,
        array: false,
      },
    ],
    'linebreak-style': [0, 2, 'windows'],
    'no-console': [2],
    'no-alert': [2],
    'react-hooks/exhaustive-deps': 'warn',
  },
};
