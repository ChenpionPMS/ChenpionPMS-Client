module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/strongly-recommended'],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': [
          2,
          2,
          {
            baseIndent: 1,
            switchCase: 1,
          },
        ],
      },
    },
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['import'],
  root: true,
  rules: {
    'arrow-parens': [
      2,
      'always'
    ],
    'comma-dangle': [
      2,
      'always-multiline'
    ],
    curly: [
      2,
      'all'
    ],
    indent: [
      2,
      2
    ],
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 2
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 2,
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        vars: 'all'
      }
    ],
    'object-curly-spacing': [
      2,
      'always'
    ],
    'object-property-newline': [
      2,
      {
        allowAllPropertiesOnSameLine: false
      }
    ],
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    semi: [
      2,
      'always'
    ],
    'space-before-function-paren': [
      2,
      'never'
    ],
    'vue/attributes-order': [
      2,
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'BINDING',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    'vue/html-closing-bracket-newline': [
      2,
      {
        multiline: 'always',
        singleline: 'never'
      }
    ],
    'vue/html-self-closing': [
      0,
      'never'
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        multiline: {
          allowFirstLine: true,
          max: 1
        },
        singleline: 1
      }
    ],
    'vue/no-confusing-v-for-v-if': 2,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          [
            'delimiters',
            'comments'
          ],
          [
            'components',
            'directives',
            'filters'
          ],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          [
            'props',
            'propsData'
          ],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          [
            'template',
            'render'
          ],
          'renderError'
        ]
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  settings: {
    'import/resolver': 'webpack',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
};
