module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
      "react"
    ],
    rules: {
      "arrow-body-style": 0
    },
    "env": {
      "browser": true, 
      "jest": true
    },
    'overrides': [{
      'files': ['**/test_support/*', 'spec_helper.*', '*.test.*'],
      'rules': {
        'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
        "no-unused-expressions": "off",
    },
  }],
};
