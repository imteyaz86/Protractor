/**
 * Created by Imteyaz on 4/30/2017.
 */

var genericUsages = function () {

    /*Util to switch to new window*/
    this.windowSwitchUtil = function () {
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[handles.length - 1]);
        });
    };
};

module.exports = new genericUsages();