'use strict';


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

module.exports = FormFieldsId;
