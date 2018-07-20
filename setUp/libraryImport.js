/**
 * Created by Imteyaz on 4/30/2017.
 */

var libraryImport = function () {
    this.genericUsages = function () {
        return require('../commonutils/genericUsages.js');
    };

    this.verificationUtil = function () {
        return require('../commonutils/verificationUtil.js');
    };
};
module.exports = new libraryImport();