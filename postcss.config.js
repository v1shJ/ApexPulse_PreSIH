
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    // Other plugins
    async function myAsyncPlugin(css) {
      return process(css).then((result) => {
        return result;
      });
    }
  ],
};
