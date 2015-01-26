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
    
    browser.get(pageLocations.login).then(function() {
        formFieldsId.username.clear();
        formFieldsId.password.clear();
        formFieldsId.username.sendKeys(user);
        formFieldsId.password.sendKeys(password);
        helper.wait(1);
        formFieldsId.login_button.click().then( function(result) {
          helper.wait(10);
          callback(result);
        });
    });
};

Support.prototype.logoutPriorityQuote = function(callback) {
    var formFieldsId = new FormFieldsId();

    console.log("click on the user name button");
    formFieldsId.hellousername_button.click().then(function() {
      helper.wait(1);   
      formFieldsId.logout_button.click().then(function() {
        helper.wait(2);
        callback(true);  
      }, function(err) { console.log(err); callback(false); }); 
    }, function(err) { console.log(err); callback(false); } );
};





Support.prototype.createIndividualQuotePriorityQuote = function(callback){

  	var formFieldsId = new FormFieldsId();
  	var pageLocations = new PageLocations();
  	text = browser.getPageSource();
  
  	browser.get(pageLocations.individual_quote);
  	helper.wait(5);
  	helper.clearThenFillInText(formFieldsId.zipcode, "49506");
  	helper.clearThenFillInText(formFieldsId.first_name, 'AutoTest FirstName');
    helper.clearThenFillInText(formFieldsId.last_name, 'AutoTest LastName');
    helper.clearThenFillInText(formFieldsId.date_of_birth, '01/01/1971');
    formFieldsId.gender_male_radiobutton.click();
    //Next line activates popup box
    //Female button does not always activate, calling twice seems to help
    helper.click(formFieldsId.gender_female_radiobutton);
    helper.click(formFieldsId.gender_female_radiobutton); 
    helper.click(formFieldsId.tobacco_use_no_radiobutton);
    helper.click(formFieldsId.tobacco_use_no_radiobutton);
    helper.click(formFieldsId.add_dental_enroll_radiobutton);
    helper.wait(3);
    helper.click(formFieldsId.continue_button);
    helper.wait(45);
    helper.click(formFieldsId.individual_medical_plans);
    helper.wait(2);
    helper.click(formFieldsId.individual_medical_plan_option1);
    helper.click(formFieldsId.individual_dental_plans);
    helper.wait(2);
    helper.click(formFieldsId.individual_dental_plan_option1);
    helper.click(formFieldsId.individual_enroll_button);
    helper.wait(4);
    helper.click(formFieldsId.expand_all);
    helper.wait(2);
    helper.click(formFieldsId.eligibility_requirements_enrollees_eligible);
    helper.click(formFieldsId.dental_attestation_yes_radiobutton);
    //Next line activates popup box
    //formFieldsId.eligibility_requirements_save_button.click();
    helper.clearThenFillInText(formFieldsId.middle_initial, 'AutoTest Middle Initial');
    helper.clearThenFillInText(formFieldsId.ssn, "111223333");
    formFieldsId.street_address1.sendKeys("AutoTest Street Address1");
    formFieldsId.street_address2.sendKeys("AutoTest Street Address2");
    formFieldsId.city.sendKeys("AutoTest City");
    formFieldsId.phone.sendKeys("616");
    formFieldsId.phone.sendKeys("2223333");
    formFieldsId.email.sendKeys("autotest@email.com");
    //formFieldsId.individual_save_member_information_button.click();
    helper.click(formFieldsId.payment_frequency_dropdown_option2);
    helper.click(formFieldsId.payment_method_credit_card_radiobutton);
    helper.click(formFieldsId.card_type_dropdown_option3);
    formFieldsId.credit_card_number.sendKeys("5300212134354647");
    formFieldsId.name_on_card.sendKeys("AutoTest CardName");
    formFieldsId.expiration_date.sendKeys("07/17");
    //billing_address_checkbox can not be found. 
    //formFieldsId.billing_address_checkbox.click();
    formFieldsId.payment_information_street_address1.sendKeys("AutoTest Street Address1");
    formFieldsId.payment_information_street_address2.sendKeys("AutoTest Street Address2");
    formFieldsId.payment_information_city.sendKeys("AutoTest City");
    helper.click(formFieldsId.payment_information_state_dropdown_option2);
    formFieldsId.payment_information_zipcode.sendKeys("49506");
    helper.click(formFieldsId.payment_method_mail_a_bill_radiobutton);
    //formFieldsId.payment_frequency_save.click();
    helper.wait(60);
    browser.driver.sleep(1).then(function(result) {
          callback(result);
            });
};

Support.prototype.createSmallGroupPriorityQuote = function(callback){
	
	var formFieldsId = new FormFieldsId();
  	var pageLocations = new PageLocations();
  
    browser.get(pageLocations.new_group_page);
    helper.wait(4);
    randomNine = Math.floor(Math.random() * 1000000000);
    formFieldsId.group_name.sendKeys("Autotest Small Group " + randomNine);
    formFieldsId.tax_id.sendKeys(999999999);
    helper.click(formFieldsId.religous_organization_option2);
    helper.click(formFieldsId.religous_organization_option2);
    helper.clearThenFillInText(formFieldsId.general_street_address, 'AutoTest Street Line1');
	helper.clearThenFillInText(formFieldsId.general_street_address2, 'AutoTest Street Line2');
    helper.clearThenFillInText(formFieldsId.general_city, 'AutoTest City');
    helper.clearThenFillInText(formFieldsId.zip_code, '49505');
    helper.click(formFieldsId.effective_date_option6_dropDown);
    helper.wait(4);
    formFieldsId.create_and_quote_button.click();
    helper.wait(4);
    formFieldsId.save_popup_window_button.click();
    helper.wait(3);
    helper.click(formFieldsId.add_employee);
    helper.clearThenFillInText(formFieldsId.employee_first_name, 'employeeFirst');
    helper.clearThenFillInText(formFieldsId.employee_last_name, 'employeeLast');
    helper.clearThenFillInText(formFieldsId.employee_dob, '01011971');
    helper.click(formFieldsId.employee_medical_status_enroll);
    helper.click(formFieldsId.employee_dental_status_enroll);
    helper.click(formFieldsId.employee_save_disc_icon_button);
    helper.wait(1);
    helper.click(formFieldsId.employee_save_button);
    helper.wait(90);
    helper.click(formFieldsId.small_group_medical_plans_button);
    helper.click(formFieldsId.small_group_medical_plans_option1_button);
    helper.click(formFieldsId.small_group_dental_plans_button);
    helper.click(formFieldsId.small_group_dental_plans_option1_button);
    helper.click(formFieldsId.small_group_create_proposal_green_button);
    helper.wait(2);
    helper.click(formFieldsId.small_group_create_proposal_orange_button);
    helper.wait(60);
    browser.driver.sleep(1000).then(function(result) {
    callback(result);
            
        
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