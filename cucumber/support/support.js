/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * support.js
 *  This will contain all of the lower level protractor and selinum code
 *  that will drive the automated tests
 *
 *************************************************************************/

var FormFieldsId = require('../page_objects/FormFieldsId.js');
var PageLocations = require('../page_objects/page_locations.js');
var helper = require('./helper');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;



var Support = function(){
};

/**********************************************************************************************************
   ___                  _      ___                        _   
  / __|___ _ _  ___ _ _(_)__  / __|_  _ _ __ _ __ ___ _ _| |_ 
 | (_ / -_| ' \/ -_| '_| / _| \__ | || | '_ | '_ / _ | '_|  _|
  \___\___|_||_\___|_| |_\__| |___/\_,_| .__| .__\___|_|  \__|
                                       |_|  |_|               
***********************************************************************************************************/

Support.prototype.gotoPage = function(link, callback){
  
  var pageLocations = new PageLocations();

  browser.get(pageLocations[link]).then(function(result) {
    callback(result);
    });
};


Support.prototype.clickElement = function(link, callback){
  
  var formFieldsId = new FormFieldsId();

  console.log(link);
  formFieldsId[link].click().then(function() {
      browser.driver.sleep(2000).then(function(result) {
            callback(result);
      });
    });

};

Support.prototype.fillInField = function(text, formFieldId, callback){
  
  var formFieldsId = new FormFieldsId();

  formFieldsId[formFieldId].sendKeys(text).then(function(result) {
    callback(result);
    });
};

/**********************************************************************************************************
  ___     _         _ _           ___           _       
 | _ \_ _(_)___ _ _(_| |_ _  _   / _ \ _  _ ___| |_ ___ 
 |  _| '_| / _ | '_| |  _| || | | (_) | || / _ |  _/ -_)
 |_| |_| |_\___|_| |_|\__|\_, |  \__\_\\_,_\___/\__\___|
                          |__/                          
***********************************************************************************************************/


Support.prototype.logIntoPriorityQuote = function(user, password, callback){

    var formFieldsId = new FormFieldsId();
    var pageLocations = new PageLocations();
    
    browser.get(pageLocations.pq_login).then(function() {
        formFieldsId.pq_username.clear();
        formFieldsId.pq_password.clear();
        formFieldsId.pq_username.sendKeys(user);
        formFieldsId.pq_password.sendKeys(password);
        helper.wait(1);
        formFieldsId.pq_login_button.click().then( function(result) {
          helper.wait(10);
          callback(result);
        });
    });
};

Support.prototype.logoutPriorityQuote = function(callback) {
    var formFieldsId = new FormFieldsId();

    console.log("click on the user name button");
    formFieldsId.pq_hellousername_button.click().then(function() {
      helper.wait(1);   
      formFieldsId.pq_logout_button.click().then(function() {
        helper.wait(2);
        callback(true);  
      }, function(err) { console.log(err); callback(false); }); 
    }, function(err) { console.log(err); callback(false); } );
};





Support.prototype.createIndividualQuotePriorityQuote = function(callback){

  	var formFieldsId = new FormFieldsId();
  	var pageLocations = new PageLocations();
  	text = browser.getPageSource();
  
  	browser.get(pageLocations.pq_individual_quote);
  	helper.wait(5);
	formFieldsId.pq_zipcode.sendKeys("49506");
    formFieldsId.pq_first_name.sendKeys("AutoTest FirstName");
    formFieldsId.pq_last_name.sendKeys("AutoTest LastName");
    formFieldsId.pq_date_of_birth.sendKeys("01/01/1971");
    formFieldsId.pq_gender_male_radiobutton.click();
    //Next line activates popup box
    //Female button does not always activate, calling twice seems to help
    formFieldsId.pq_gender_female_radiobutton.click();
    formFieldsId.pq_gender_female_radiobutton.click(); 
    formFieldsId.pq_tobacco_use_no_radiobutton.click();
    formFieldsId.pq_tobacco_use_no_radiobutton.click();
    formFieldsId.pq_add_dental_enroll_radiobutton.click();
    helper.wait(1);
    formFieldsId.pq_continue_button.click();
    helper.wait(40);
    formFieldsId.pq_individual_medical_plans.click();
    helper.wait(2);
    formFieldsId.pq_individual_medical_plan_option1.click();
    formFieldsId.pq_individual_dental_plans.click();
    helper.wait(2);
    formFieldsId.pq_individual_dental_plan_option1.click();
    formFieldsId.pq_individual_enroll_button.click();
    helper.wait(4);
    formFieldsId.pq_expand_all.click();
    helper.wait(2);
    formFieldsId.pq_eligibility_requirements_enrollees_eligible.click();
    formFieldsId.pq_dental_attestation_yes_radiobutton.click();
    //Next line activates popup box
    //formFieldsId.pq_eligibility_requirements_save_button.click();
    formFieldsId.pq_middle_initial.sendKeys("AutoTest Middle Initial");
    formFieldsId.pq_ssn.sendKeys("111223333");
    formFieldsId.pq_street_address1.sendKeys("AutoTest Street Address1");
    formFieldsId.pq_street_address2.sendKeys("AutoTest Street Address2");
    formFieldsId.pq_city.sendKeys("AutoTest City");
    formFieldsId.pq_phone.sendKeys("616");
    formFieldsId.pq_phone.sendKeys("2223333");
    formFieldsId.pq_email.sendKeys("autotest@email.com");
    //formFieldsId.pq_individual_save_member_information_button.click();
    formFieldsId.pq_payment_frequency_dropdown_option2.click();
    formFieldsId.payment_method_credit_card_radiobutton.click();
    formFieldsId.card_type_dropdown_option3.click();
    formFieldsId.pq_credit_card_number.sendKeys("5300212134354647");
    formFieldsId.pq_name_on_card.sendKeys("AutoTest CardName");
    formFieldsId.pq_expiration_date.sendKeys("07/17");
    //pq_billing_address_checkbox can not be found. 
    //formFieldsId.pq_billing_address_checkbox.click();
    formFieldsId.pq_payment_information_street_address1.sendKeys("AutoTest Street Address1");
    formFieldsId.pq_payment_information_street_address2.sendKeys("AutoTest Street Address2");
    formFieldsId.pq_payment_information_city.sendKeys("AutoTest City");
    formFieldsId.pq_payment_information_state_dropdown_option2.click();
    formFieldsId.pq_payment_information_zipcode.sendKeys("49506");
    formFieldsId.pq_payment_method_mail_a_bill_radiobutton.click();
    //formFieldsId.pq_payment_frequency_save.click();
    helper.wait(60);
    browser.driver.sleep(1).then(function(result) {
          callback(result);
            });
};

Support.prototype.createSmallGroupPriorityQuote = function(callback){

  
    browser.get(pageLocations.pq_new_group_page);
    browser.driver.sleep(5000).then(function() {
      randomNine = Math.floor(Math.random() * 1000000000);
      formFieldsId.pq_group_name.sendKeys("Autotest Small Group " + randomNine);
      formFieldsId.pq_tax_id.sendKeys(999999999);
      formFieldsId.pq_religous_organization_option2.click();
      formFieldsId.pq_religous_organization_option2.click();
      formFieldsId.pq_general_street_address.sendKeys("AutoTest Street Line1");
      formFieldsId.pq_general_street_address2.sendKeys("AutoTest Street Line2");
      formFieldsId.pq_general_city.sendKeys("AutoTest City");
      formFieldsId.pq_zip_code.sendKeys("49505");
      formFieldsId.pq_effective_date_option6_dropDown.click();
      browser.driver.sleep(1000).then(function() {
        formFieldsId.pq_create_and_close_button.click();
        browser.driver.sleep(10000).then(function(result) {
          callback(result);
            });
        });
  });
};

Support.prototype.clickSmallGroup = function(callback){
	element(by.css("a.ph-btn.btn-green")).click().then(function(result) {
        	callback(result);
    });
};


Support.prototype.searchForSmallGroup = function(callback){
	element(by.id("recentSearch")).sendKeys("Autotest Small Group " + randomNine);
	browser.driver.sleep(2000).then(function() {
		element(by.linkText("Autotest Small Group " + randomNine)).click().then(function(result) {
        	callback(result);
        	});
    });
};


module.exports = new Support();