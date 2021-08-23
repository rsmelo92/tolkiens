import path from 'path'

const buildPath = path.join(__dirname, 'build/')

const configs = (fileName: string) => ({
  scss: {
    transformGroup: 'scss',
    buildPath,
    files: [{
      options: { showFileHeader: false },
      destination: `${fileName}-variables.scss`,
      format: 'scss/variables'
    }]
  },
  flutter: {
    transformGroup: 'flutter',
    buildPath,
    files: [
      {
        options: { showFileHeader: false },
        destination: `${fileName}-design-tokens.dart`,
        format: 'flutter/class.dart',
        className: 'DesignTokens'
      }
    ]
  },
  reactNative: {
    transformGroup: 'react-native',
    buildPath,
    files: [
      {
        options: { showFileHeader: false },
        destination: `${fileName}-variables.js`,
        format: 'javascript/es6'
      }
    ]
  },
  css: {
    transformGroup: 'css',
    buildPath,
    files: [
      {
        options: { showFileHeader: false },
        destination: `${fileName}-variables.css`,
        format: 'css/variables'
      }
    ]
  }
})

export { configs }
