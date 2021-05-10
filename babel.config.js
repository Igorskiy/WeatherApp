module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          modules: './src/modules',
          store: './src/store',
          theme: './src/theme',
          utilities: './src/utilities',
          assets: './src/assets',
        },
      },
    ],
  ],
};
