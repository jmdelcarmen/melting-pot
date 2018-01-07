module.exports = {
  devtool: 'inline-source-maps',
  entry: './src/index.tsx',
  output: {
    filename: './build/index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
};