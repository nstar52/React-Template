const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
	extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
		  // use the babel-loader for transpiling JavaScript to a suitable format
          loader: 'babel-loader',
		  options: {
			// attach the presets to the loader (most projects use .babelrc file instead)
			presets: ["@babel/preset-env", "@babel/preset-react"]
		  }
        }
      },
	  {
			test: /\.tsx?$/,
			use : {
				loader: 'ts-loader' ,
			},
			exclude: /node_modules/,
			
	  },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ],
};
