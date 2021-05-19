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
        ],
        alias: {
          navigators: './src/navigators',
          screens: './src/screens',
          theme: './src/theme',
          utils: './src/utils',
          components: './src/components',
        },
      },
    ],
  ],
};
