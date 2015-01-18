// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var support = require('./support/support');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

var FormFieldsId = function() {

	/////////////////////New Page//////////////////////////////////////////
	//Priority Quote Splash Page
	
	this.username = "username";
	this.username_type = "name";
	
	this.password = "password";
	this.password_type = "name";
	
	this.login = "input[type=\"submit\"]";
	this.login_type = "css";
	
	this.submitbutton = "submitbutton";
	this.submitbutton_type = "name";
	
	this.dropDown_tellUsWhoYouAre_Option1 = "//div[@class='row']/form/select//option[1]";
	this.dropDown_tellUsWhoYouAre_Option1_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option2 = "//div[@class='row']/form/select//option[2]";
	this.dropDown_tellUsWhoYouAre_Option2_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option3 = "//div[@class='row']/form/select//option[3]";
	this.dropDown_tellUsWhoYouAre_Option3_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option4 = "//div[@class='row']/form/select//option[4]";
	this.dropDown_tellUsWhoYouAre_Option4_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option5 = "//div[@class='row']/form/select//option[5]";
	this.dropDown_tellUsWhoYouAre_Option5_type = "xpath";
	
	this.PriorityHealth = "Priority Health";
	this.PriorityHealth_type = "linkText";
	
	this.PriorityMedicare = "Priority Medicare";
	this.PriorityMedicare_type = "linkText";
	
	this.UnderstandingHealthReform = "Understanding Health Reform";
	this.UnderstandingHealthReform_type = "linkText";
	
	this.MyGOPoints = "MyGo Points";
	this.MyGOPoints_type = "linkText";
	/*
	element(by.xpath("//div[@id='footer']//a[.='Individual & Family']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Medicare']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Employer & employee']")).click();
    element(by.xpath("//div[@id='footer']//a[.='All plans']")).click();
	*/
	this.Members = "Members";
	this.Members_type = "linkText";
	
	this.Employers = "Employers";
	this.Employers_type = "linkText";
	
	this.Providers = "Providers";
	this.Providers_type = "linkText";
	
	this.Agents = "Agents";
	this.Agents_type = "linkText";
	
	this.Vendors = "Vendors";
	this.Vendors_type = "linkText";
	/*
	element(by.xpath("//div[@id='footer']//a[.='Media']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Careers']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Wellness']")).click();
	*/
	this.EmailUs = "Email Us";
	this.EmailUs_type = "linkText";
	
	this.WebsiteFeedback = "Website Feedback";
	this.websitFeedback_type = "linkText";
	
	this.facebook = "Facebook";
	this.facebook_type = "linkText";
	
	this.twitter = "Twitter";
	this.twitter_type = "linkText";
	
	// element(by.xpath("//div[@id='footer']//span[.='MyGo Points']")).click();
	
	/////////////////////New Page//////////////////////////////////////////
	//Priority Quote create new group page.
	
	this.smallGroup = 'element(by.css("a.ph-btn.btn-green"))'
	
	
 	this.GroupName = "GroupName";
 	this.GroupName_type = "name";
 		
 	this.taxId = "taxId";
 	this.taxId_type = "name";
 		
	this.generalAddress = "generalAddress";
	this.generalAddress_type = "name";
		
    this.generalAddress2 = "generalAddress2";
    this.generalAddress2_type = "name";
    	
 	this.generalCity = "generalCity";
 	this.generalCity_type = "name";
 		
 	this.zipcode = "zipcode";
 	this.zipcode_type = "name";
 		
	this.dropDown_ReligousOrganization_No = "//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]";
	this.dropDown_ReligousOrganization_No_type = "xpath";
		
	this.dropDown_EffectiveDate_Option6 = "//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[6]";
	this.dropDown_EffectiveDate_Option6_type = "xpath";
		
	this.button_creatAndClose = "//div[@class='col-sm-12']//submit-button[.='Create and close']";
	this.button_creatAndClose_type = "xpath";
};

module.exports = function() {

	this.Given(/^I log onto priority quote with username "([^"]*)" and password "([^"]*)"$/, function(user, password,next) {
        console.log("Log into priority quote test");
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

    this.When(/^I click "([^"]*)"$/, function(link, next) {
        console.log("\n Click on small group");
        var formFieldId = new FormFieldsId();
        browser.ignoreSynchronization = true;
        support.clickElement(formFieldId[link], function(result) {
            next();
        	});
        });
        
    this.Given(/^I run Cucumber with Protractor$/, function(next) {
        next();
    });

    this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
        browser.get(url);
        next();
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