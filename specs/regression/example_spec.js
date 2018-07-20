describe('angularjs homepage', function () {
    var angularHomepage1 = requirePageObjects('angularPageObject/angularHomePage');
    var commonUtils = requireCommonUtil();
    beforeEach(function () {
        browser.get(getProperty('BrowserUrl'));
    });
    it('should greet the named user', function () {

        // angularHomepage1.setName('Julie');
        angularHomepage1.yourNameElement().sendKeys('Julie');
        browser.sleep(5000);
        expect(angularHomepage1.getText()).toEqual('Hello Julie!');
    });
    it('validate java script project search ', function () {
        angularHomepage1.searchJavaProject('AngularJS');
        browser.sleep(5000);
        commonUtils.verificationUtil().tableSingleTextVerificationUtil(angularHomepage1.javaSearchProjectTableElement(), 'HTML enhanced for web apps!', 1, 'AngularJS');
    });
    describe('todo list', function () {
        var todoList;
        beforeEach(function () {
            browser.get(getProperty('BrowserUrl'));
            todoList = element.all(by.repeater('todo in todoList.todos'));
        });
        it('should list todos', function () {
            expect(todoList.count()).toEqual(23);
            expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
        });
        it('should add a todo', function () {
            var addTodo = element(by.model('todoList.todoText'));
            var addButton = element(by.css('[value="add"]'));
            addTodo.sendKeys('write a protractor test');
            addButton.click();
            expect(todoList.count()).toEqual(3);
            expect(todoList.get(2).getText()).toEqual('write a protractor test');
        });
    });
});
