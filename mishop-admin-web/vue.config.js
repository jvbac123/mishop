// eslint-disable-next-line no-undef
module.exports = {
  outputDir: "dist",
  devServer: {
    port: "2000",
    proxy: {
      api: {
        target: "http://localhost:2001",
      },
    },
  },
};
