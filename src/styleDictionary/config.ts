import path from 'path'

const configs = (fileName: string) => ({
  scss: {
    transformGroup: 'scss',
    buildPath: path.join(__dirname, 'build/'),
    files: [{
      destination: `${fileName}-variables.scss`,
      format: 'scss/variables'
    }]
  },
  flutter: {
    transformGroup: 'flutter',
    buildPath: path.join(__dirname, 'build/'),
    files: [
      {
        destination: `${fileName}-design-tokens.dart`,
        format: 'flutter/class.dart',
        className: 'DesignTokens'
      }
    ]
  },
  reactNative: {
    transformGroup: 'react-native',
    buildPath: path.join(__dirname, 'build/'),
    files: [
      {
        destination: `${fileName}-variables.js`,
        format: 'javascript/es6'
      }
    ]
  }
})

export { configs }
