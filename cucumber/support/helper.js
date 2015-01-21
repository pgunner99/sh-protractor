/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * helper.js
 *  This will contain all of the lower level protractor and selinum code
 *  that will drive the automated tests
 *
 *************************************************************************/

var Helper = function(){
};


Helper.prototype.wait = function(seconds) {
    browser.driver.sleep(seconds*1000).then(function() {
        });      
};


module.exports = new Helper();