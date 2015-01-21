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

    browser.get(pageLocations.pq_login);
    formFieldsId.pq_username.sendKeys(user);
    formFieldsId.pq_password.sendKeys(password);
    browser.driver.sleep(2000).then( function() {
        formFieldsId.pq_login_button.click();
        console.log("After Click");
        browser.driver.sleep(10000).then(function(result) {
            console.log("After Sleep");
            callback(result);
        });
    });
};

Support.prototype.createSmallGroupPriorityQuote = function(callback){
	var formFieldsId = new FormFieldsId();
	var pageLocations = new PageLocations();
  	browser.sleep(1);
  	browser.get(pageLocations.pq_new_group_page);
  	browser.driver.sleep(2000).then( function() {
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