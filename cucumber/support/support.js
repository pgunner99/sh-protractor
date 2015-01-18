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

Support.prototype.clickElement = function(link, callback){
	console.log("\n click on " + link);
	link.click();
 	callback(result);
        };


module.exports = new Support();