// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    //为0表示忽略规则检查
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //允许使用分号
    'semi':['error','always'],
    //忽略缩进控制
    'indenx':0,
    'space-before-function-paren': 0,
    // 设置允许出现声明但未使用的变量
    "no-unused-vars": [0, { "vars": "all", "args": "none" }],
  }
}
