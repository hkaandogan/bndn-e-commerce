module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages:{
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Bundan App",
    },
  }
}
