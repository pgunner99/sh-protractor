/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * FormFieldsId.js
 *  This will contain all of the element ids for the tests
 *
 *************************************************************************/

'use strict';


var FormFieldsId = function() {

/**********************************************************************************************************
   ___      _          _ __         ____           __        ____                 ____   ___    
  / _ \____(____  ____(_/ /___ __  / __ \__ _____ / /____   / _____  ______ _    /  ____/ ( )___
 / ___/ __/ / _ \/ __/ / __/ // / / /_/ / // / _ / __/ -_) / _// _ \/ __/  ' \  _/ // _  /|/(_-<
/_/  /_/ /_/\___/_/ /_/\__/\_, /  \___\_\_,_/\___\__/\__/ /_/  \___/_/ /_/_/_/ /___/\_,_/  /___/

***********************************************************************************************************/

	//Priority Quote Login Page
	this.pq_username = element(by.name("username"));
	this.pq_password = element(by.name("password"));
	this.pq_login_button = element(by.css("input.ph-btn.btn-green"));
	this.pq_register_button = element(by.name("submitbutton"));
	this.pq_tell_us_who_you_are_option1_dropDown = element(by.xpath("//div[@class='row']/form/select//option[1]"));
	this.pq_tell_us_who_you_are_option2_dropDown = element(by.xpath("//div[@class='row']/form/select//option[2]"));
	this.pq_tell_us_who_you_are_option3_dropDown = element(by.xpath("//div[@class='row']/form/select//option[3]"));
	this.pq_tell_us_who_you_are_option4_dropDown = element(by.xpath("//div[@class='row']/form/select//option[4]"));
	this.pq_tell_us_who_you_are_option5_dropDown = element(by.xpath("//div[@class='row']/form/select//option[5]"));
	//header
	this.pq_home_button = element(by.linkText("Home"));
	this.pq_contact_button= element(by.linkText("Contact"));
	this.pq_login_header_button = element(by.linkText("login"));
	//this.priority_health_button = element(by.linkText("Priority Health")); (already in footer)element
	/*These fields are for two drop downs in the header. Will have to experiment with these in
		order to get them to work. Lower priority. 
	element(by.linkText("Plans"));
    element(by.css("ul.dropdown-menu > li > a"));
    element(by.linkText("Plans"));
    element(by.linkText("Medicare"));
    element(by.linkText("Plans"));
    element(by.linkText("Employer-sponsored"));
    element(by.linkText("Plans"));
    element(by.linkText("Medicaid"));
    element(by.linkText("Plans"));
    element(by.linkText("All plans"));
    element(by.linkText("About"));
    element(by.linkText("Our story"));
    element(by.linkText("About"));
    element(by.linkText("Wellness"));
    element(by.linkText("About"));
    element(by.linkText("Media"));
    element(by.linkText("About"));
    element(by.linkText("Careers"));*/
	//footer
	this.pq_priority_health_button = element(by.linkText("Priority Health"));
	this.pq_priority_medicare_button = element(by.linkText("Priority Medicare"));
	this.pq_understanding_health_reform_button = element(by.linkText("Understanding Health Reform"));
	this.pq_my_go_points_button = element(by.linkText("MyGo Points"));
	this.pq_individual_and_family_button = element(by.xpath("//div[@id='footer']//a[.='Individual & Family']"));
	this.pq_medicare_button = element(by.xpath("//div[@id='footer']//a[.='Medicare']"));
	this.pq_employer_and_employee_button = element(by.xpath("//div[@id='footer']//a[.='Employer & employee']"));
	this.pq_all_plans_button = element(by.xpath("//div[@id='footer']//a[.='All plans']"));
	this.pq_members_button = element(by.linkText("Members"));
	this.pq_employers_button = element(by.linkText("Employers"));
	this.pq_providers_button = element(by.linkText("Providers"));
	this.pq_agents_button = element(by.linkText("Agents"));
	this.pq_vendors_button = element(by.linkText("Vendors"));
	this.pq_media_button = element(by.xpath("//div[@id='footer']//a[.='Media']"));
	this.pq_careers_button = element(by.xpath("//div[@id='footer']//a[.='Media']"));
	this.pq_wellness_button = element(by.xpath("//div[@id='footer']//a[.='Wellness']"));
	this.pq_email_us_button = element(by.linkText("Email Us"));
	this.pq_website_feedback_button = element(by.linkText("Website Feedback"));
	this.pq_facebook_button = element(by.linkText("Facebook"));
	this.pq_twitter_button = element(by.linkText("Twitter"));
	this.pq_my_go_points_button = element(by.xpath("//div[@id='footer']//span[.='MyGo Points']"));
	
	//Priority Quote Dashboard Page
	/////////////////////New Page//////////////////////////////////////////
	this.pq_individual_button = element(by.css("button.ph-btn.btn-green"));
	this.pq_small_group_button = element(by.css("a.ph-btn.btn-green"));
	this.pq_healthcare_gov_button = element(by.xpath("//div[@class='main-content']//button[.='Healthcare.gov']"));
	
	//Priority Quote create new individual page
	/////////////////////New Page//////////////////////////////////////////
	this.pq_zipcode = element(by.name("zip"));
	this.pq_first_name = element(by.name("firstname"));
	this.pq_last_name = element(by.name("lastname"));
	this.pq_date_of_birth = element(by.name("birthdate"));
	this.pq_gender_male_radiobutton = element(by.css("input.ng-dirty:nth-child(1)"));
	this.pq_gender_female_radiobutton = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5) > input:nth-child(3)"));
	this.pq_tobacco_use_yes_radiobutton = element(by.css("td.ng-scope:nth-child(6) > span:nth-child(1) > input:nth-child(1)"));
	this.pq_tobacco_use_no_radiobutton = element(by.css("td.ng-scope:nth-child(6) > span:nth-child(1) > input:nth-child(3)"));
	this.pq_add_dental_enroll_radiobutton = element(by.css("td.ng-scope:nth-child(7) > input:nth-child(1)"));
	this.pq_add_dental_waive_radiobutton = element(by.css("td.ng-scope:nth-child(7) > input:nth-child(3)"));
	this.pq_continue_button = element(by.xpath("//div[@class='main-content']//submit-button[.='Continue']"));
	this.pq_individual_medical_plans = element(by.css("button.btn-green:nth-child(2)"));
	this.pq_individual_dental_plans = element(by.css("button.btn-green:nth-child(3)"));
	this.pq_individual_medical_plan_option1 = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(1)"));
	this.pq_individual_dental_plan_option1 = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(1)"));
	this.pq_individual_enroll_button = element(by.css("button.ph-btn.btn-orange"));
                    
	//Priority Quote create new group page.
	/////////////////////New Page//////////////////////////////////////////
 	this.pq_group_name = element(by.name("GroupName"));
 	this.pq_tax_id = element(by.name("taxId"));
 	this.pq_religous_organization_option1 = element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[1]"));
 	this.pq_religous_organization_option2 = element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]"));
	this.pq_general_street_address = element(by.name("generalAddress"));
	this.pq_general_street_address2 = element(by.name("generalAddress2"));
 	this.pq_general_city = element(by.name("generalCity"));
 	this.pq_zip_code = element(by.name("zipcode"));
 	this.pq_effective_date_option1_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[1]"));
 	this.pq_effective_date_option2_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[2]"));
 	this.pq_effective_date_option3_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[3]"));
 	this.pq_effective_date_option4_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[4]"));
 	this.pq_effective_date_option5_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[5]"));
	this.pq_effective_date_option6_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[6]"));
	this.pq_create_and_close_button = element(by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and close']"));
	this.pq_create_and_quote_button = element(by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and quote]"));
	this.pq_cancel_button = element(by.css("button.btn.btn-link"));
	this.pq_add_agent_button = element(by.xpath("//div[@class='col-sm-12']//button[.='Agent']"));
	this.pq_search_agent_first_name = element(by.css("input.ng-valid.ng-dirty"));
	this.pq_search_agent_last_name = element(by.xpath("//div[@class='modal-content']/div/form/div[2]/div/input"));
	this.pq_search_button = element(by.xpath("//div[@class='modal-content']//button[.='Searching...']"));
	this.pq_close_popup_window_button = element(by.xpath("div.modal-border.clearfix > button.pull-right"));
	this.pq_search_again_button = element(by.id("searchAgain"));


/**********************************************************************************************************
  __  __      _  _          _ _   _      ___                ___    _ _    
 |  \/  |_  _| || |___ __ _| | |_| |_   | _____ _ _ _ __   |_ _|__| ( )___
 | |\/| | || | __ / -_/ _` | |  _| ' \  | _/ _ | '_| '  \   | |/ _` |/(_-<
 |_|  |_|\_, |_||_\___\__,_|_|\__|_||_| |_|\___|_| |_|_|_| |___\__,_| /__/
         |__/                                                             
***********************************************************************************************************/
	

};

module.exports = FormFieldsId;
