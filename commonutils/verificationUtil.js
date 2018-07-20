/**
 * Created by Imteyaz on 4/30/2017.
 */

var verificationUtil = function () {
    this.tableSingleTextVerificationUtil = function (tableElement, searchText, expectedCol, expectedText) {
        var rowElements;
        var columnElements;
        var rowIterator;
        var columnIterator;
        var text;
        var found = false;
        rowElements = tableElement.all(by.tagName('tr'));
        console.log('count is ' + rowElements.count());
        for (rowIterator = 0; rowIterator < rowElements.count(); rowIterator++) {
            columnElements = rowElements.get(rowIterator).all(by.tagName('td'));
            for (columnIterator = 0; columnIterator < columnElements.count(); columnIterator++) {
                text = columnElements.get(columnIterator).getText();
                console.log('jjjactual text is ' + text);
                if (text == searchText) {
                    console.log('actual text is ' + text);
                    found = true;
                    expect(columnElements.get(expectedCol).getText()).toEqual(expectedText);
                    console.log('actual ex text is ' + columnElements.get(expectedCol).getText());
                    break;
                }
            }
        }
        if (found == false) {
            fail('Searched Text :' + ' ' + searchText + ' ' + ',is not found in webtable, hence verification cannot be done');
        }
    };
};
module.exports = new verificationUtil();