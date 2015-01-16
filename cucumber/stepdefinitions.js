// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var support = require('./support/support');
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
        console.log("Log into priority quote");
        support.logIntoPriorityQuote(user,password, function(result) {
            next();
        });
    });

    this.Then(/^I should see text "([^"]*)" on page$/, function(textToFind,next) {
        browser.ignoreSynchronization = true;
        text = browser.getPageSource();
        console.log(text);
        console.log(textToFind);
        expect(text).to.eventually.contain(textToFind).and.notify(next);
    });

    this.When(/^I click on Small Group$/, function(next) {
        console.log("\n Click on small group");
        browser.ignoreSynchronization = true;
        browser.sleep(3000).then(function() {
                element(by.css("a.ph-btn.btn-green")).click();
                browser.sleep(3000).then(function() {next() });
            });
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