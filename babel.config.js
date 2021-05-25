module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
          '.ts',
          '.tsx',
        ],
        alias: {
          navigators: './src/navigators',
          screens: './src/screens',
          themes: './src/themes',
          utils: './src/utils',
          components: './src/components',
          store: './src/store',
          i18n: './src/i18n',
        },
      },
    ],
  ],
};
