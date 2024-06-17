const path = require("path");

module.exports = {
  entry: "./src/page.js", // reemplaza esto con la ruta a tu archivo de entrada principal
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
