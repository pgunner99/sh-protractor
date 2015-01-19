var Support = function(){
};

Support.prototype.logIntoPriorityQuote = function(user, password, callback){
    browser.get("app/priority-quote-beta/#/login?returnUrl=%2Flogin");
    element(by.name("username")).sendKeys(user);
    element(by.name("password")).sendKeys(password);
    browser.driver.sleep(2000).then( function() {
        element(by.css("input.ph-btn.btn-green")).click();
        console.log("After Click");
        browser.driver.sleep(10000).then(function(result) {
            console.log("After Sleep");
            callback(result);
        });
    });
};

Support.prototype.createSmallGroupPriorityQuote = function(callback){
  browser.sleep(1);
  browser.get("https://wwwtest.internal.priorityhealth.com/app/priority-quote-beta/#/new-group");
  browser.driver.sleep(2000).then( function() {
  	randomNine = Math.floor(Math.random() * 1000000000);
  	element(by.name("GroupName")).sendKeys("Autotest Small Group " + randomNine);
  	element(by.name("taxId")).sendKeys(999999999);
  	element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]")).click();
  	element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]")).click();
  	element(by.name("generalAddress")).sendKeys("AutoTest Street Line1");
  	element(by.name("generalAddress2")).sendKeys("AutoTest Street Line2");
  	element(by.name("generalCity")).sendKeys("AutoTest City");
  	element(by.name("zipcode")).sendKeys("49505");
  	//sut.browser.setElementSelected: "//div[@class='col-sm-12']//select[.='Choose...Kent']//option[2]"
  	element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[6]")).click();
  	browser.driver.sleep(1000).then(function() {
  		element(by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and close']")).click();
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

Support.prototype.clickElement = function(link, callback){
	link.click().then(function(restult) {
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