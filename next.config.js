
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    // Initialize dotenv
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
};