// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {

    this.Given(/^I run Cucumber with Protractor$/, function(next) {
        next();
    });

    this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
        browser.get(url);
        next();
    });

    this.Given(/^I log onto priority quote with username "([^"]*)" and password "([^"]*)"$/, function(user, password,next) {
        
        browser.get("app/priority-quote-beta/#/login?returnUrl=%2Flogin");
        browser.element(by.name("username")).sendKeys(user);
        browser.element(by.name("password")).sendKeys(password);
        browser.ignoreSynchronization = true;
        browser.element(by.text("login")).click();
        next();    
    });

    this.Then(/^I should see text "([^"]*)" on page$/, function(textToFind,next) {
        text = browser.element(by.tagName('html')).getText();
        expect(text).to.eventually.contain(textToFind).and.notify(next);
    });




    this.Then(/^it should still do normal tests$/, function(next) {
        expect(true).to.equal(true);
        next();
    });

    this.Then(/^it should expose the correct global variables$/, function(next) {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
        next();
    });

    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });

};