/**
 * Created by Imteyaz on 4/29/2017.
 */
describe('Angular Page ', function () {
    var angularHomepage1 = requirePageObjects('angularPageObject/angularHomePage');
    var newAngularPage = requirePageObjects('newAngularPageObject/newAngularHomePage');
    var commonUtils = requireCommonUtil();

    it('verify new angular pageObject ', function () {
        browser.get(getProperty('BrowserUrl'));
        browser.sleep(5000);
        angularHomepage1.clickTryNewAngularPage();
        browser.sleep(5000);
        commonUtils.genericUsages().windowSwitchUtil();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/');
        expect(newAngularPage.getFrameworkText()).toContain('One framework.');
    });
});
