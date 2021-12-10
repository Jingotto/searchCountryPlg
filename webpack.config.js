// Настройки ВэбПака

const path = require("path"); //Возвращает корневой путь до файла
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", //Начальная точка для ВэбПака
  output: {
    //Куда записывать результат
    path: path.resolve(__dirname, "dist"), //Путь должен быть корневой, то есть из диска c:/users/... поэтому метод require
    filename: "bundle.js",
  },

  module: {
    //В этом объекте "module" хранятся все загрузчики.
    rules: [
      //rules это массив объектов настроек
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          "postcss-loader",
        ],
      },

      { test: /\.hbs$/, loader: "handlebars-loader" },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Test",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],

  devServer: {
    port: 4040,
    historyApiFallback: true,
    open: true,

    client: {
      progress: true,
    },

    static: {
      directory: path.join(__dirname, "src"), //Возможно отвечвет за перезагрузку страницы в браузере, во всяком случае помогает
      watch: true,
    },
  },

  devtool: "eval-cheap-source-map",
};
