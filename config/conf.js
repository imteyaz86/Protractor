// An example configuration file.

exports.config = {
    //directConnect: true,
    //   seleniumServerJar : '../seleniumserver/selenium-server-standalone-3.0.1.jar',
    seleniumServerStartTimeout: 60000,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../specs/regression/*.js', '../specs/smoke/*.js'],
    /* suites: {
     smoke: 'specs/example_spec.js',

     },*/

    onPrepare: function () {
        browser.manage().window().maximize();
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: '../executionReports/htmlReport',
                screenshotsFolder: '../screenShots',
                fileNamePrefix: 'Mint',
                cleanDestination: false,
                fileName: 'MyReportName',
                fileNameSeparator: '_',
                fileNameDateSuffix: true
            })
        );
        // helper function to import pageObject
        global.requirePageObjects = function (relativePath) {
            return require('../pageObject/' + relativePath + '.js');
        };
        // helper function to import CommonUtil
        global.requireCommonUtil = function () {
            return require('../setUp/' + 'libraryImport.js');
        };
        // helper function to import BusinessUtil
        global.requireModuleUtil = function (relativePath) {
            return require('../specs/' + relativePath + '.js');
        };
        // helper function to read property
        global.getProperty = function (propertyName) {
            var PropertiesReader = require('properties-reader');
            var properties = PropertiesReader('properties');
            return properties.get(propertyName);
        };
    },
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000
    }
};
