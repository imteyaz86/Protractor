/**
 * Created by Imteyaz on 4/28/2017.
 */

var angularHomepage = function () {
    var yourName = element(by.model('yourName'));
    var greetingMsg = element(by.binding('yourName'));
    var searchJavaScriptProject = element(by.id('projects_search'));
    // var tryNewAngular = element(by.partialLinkText('New Angular'));
    var tryNewAngular = element(by.xpath('.//*[contains(text(),"Try the New Angular")]'));
    this.setName = function (name) {
        yourName.sendKeys(name);
    };
    this.yourNameElement = function () {
        return element(by.model('yourName'));
    };
    this.getText = function () {
        return greetingMsg.getText();
    };
    this.searchJavaProject = function (projectName) {
        searchJavaScriptProject.sendKeys(projectName);
    };
    this.clickTryNewAngularPage = function () {
        tryNewAngular.click();
    };
    this.javaSearchProjectTableElement = function () {
        return element(by.xpath('//input[@id="projects_search"]/following-sibling::table/tbody'));
    }
};
module.exports = new angularHomepage();