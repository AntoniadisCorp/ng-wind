process.env.CHROME_BIN = require('puppeteer').executablePath();
// Karma configuration file, see link for more information
module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        files: [],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('@angular-devkit/build-angular/plugins/karma'),
        ],
        browsers: ['ChromeHeadless'],
        singleRun: true,
        reporters: ['progress'],
    });
};