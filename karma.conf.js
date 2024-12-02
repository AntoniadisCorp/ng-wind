process.env.CHROME_BIN = require('puppeteer').executablePath();
// Karma configuration file, see link for more information
module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        browsers: ['ChromeHeadless'], // Use Headless mode for automation
        singleRun: true,              // Ensure it runs once and exits
    });
};