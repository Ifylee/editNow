const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {

    // Set the mode to 'development' for better debugging
    mode: 'development',
    // Entry points for the application
    entry: {
      // Main JavaScript file
      main: './src/js/index.js',
      install: './src/js/install.js'
    },

    // Output configuration for the bundled files
    output: {
      // Use the entry name to create the output filename
      filename: '[name].bundle.js',
       // Specify the output directory for the bundled files
      path: path.resolve(__dirname, 'dist'),
    },

     // Plugins to enhance Webpack functionality
    plugins: [
      // Plugin to generate an HTML file with the bundled assets included
      new HtmlWebpackPlugin({
        template: './index.html',
        title: "J.A.T.E"
     }),

      // Plugin to inject a service worker into the application
     new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),

      // Plugin to create a Web App Manifest for PWA
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'Take notes with JS syntax highlighting!',
        background_color: 'orange',
        theme_color: 'orange',
        start_url: '/',
        publicPath: '/',  
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),

    ],


    // Module rules for handling different file types
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        
        {
           // Rule for processing JavaScript files
          test: /\.m?.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        } 
      ],
    },
  };
};
