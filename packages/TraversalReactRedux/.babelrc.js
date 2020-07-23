module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        // Ensure regeneratorRuntime is imported in the build output. https://github.com/formium/tsdx/issues/547
        helpers: false,
      },
    ],
  ],
};
