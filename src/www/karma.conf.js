require('ts-node').register();

const webpackConfig = require('./webpack.dev');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha', 'chai'],
        files: [
            './test.config.ts',
        ],
        exclude: [],
        webpack: {
            mode: webpackConfig.mode,
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
        },
        webpackMiddleware: {
            quiet: true,
            stats: {
                colors: true
            },
        },
        preprocessors: {
            './test.config.ts': ['webpack', 'sourcemap'],
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeCustom'],
        customLaunchers: {
            ChromeCustom: {
                base: 'ChromeHeadless',
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--no-sandbox',
                ],
            },
        },
        singleRun: false,
        concurrency: Infinity,
    });
};