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
	this.username = element(by.name("username"));
	this.password = element(by.name("password"));
	this.login_button = element(by.buttonText("LOGIN"));

	this.register_button = element(by.name("submitbutton"));
	this.tell_us_who_you_are_option1_dropDown = element(by.xpath("//div[@class='row']/form/select//option[1]"));
	this.tell_us_who_you_are_option2_dropDown = element(by.xpath("//div[@class='row']/form/select//option[2]"));
	this.tell_us_who_you_are_option3_dropDown = element(by.xpath("//div[@class='row']/form/select//option[3]"));
	this.tell_us_who_you_are_option4_dropDown = element(by.xpath("//div[@class='row']/form/select//option[4]"));
	this.tell_us_who_you_are_option5_dropDown = element(by.xpath("//div[@class='row']/form/select//option[5]"));


	//Priority Quote Menu
	this.home_button = element(by.linkText("Home"));
	this.contact_button= element(by.linkText("Contact"));
	this.logout_button = element(by.css('[ng-click="logout()"]'));
	this.hellousername_button = element(by.css('ul.nav:nth-child(4) > li:nth-child(2) > a:nth-child(1)'));


	//Priority Quote Dashboard Page
	this.individual_button = element(by.css("button.ph-btn.btn-green"));
	this.zipcode = element(by.name("zip"));
	this.small_group_button = element(by.css("a.ph-btn.btn-green"));
	this.healthcare_gov_button = element(by.xpath("//div[@class='main-content']//button[.='Healthcare.gov']"));


	//footer
	this.priority_health_button = element(by.linkText("Priority Health"));
	this.priority_medicare_button = element(by.linkText("Priority Medicare"));
	this.understanding_health_reform_button = element(by.linkText("Understanding Health Reform"));
	this.my_go_points_button = element(by.linkText("MyGo Points"));
	this.individual_and_family_button = element(by.xpath("//div[@id='footer']//a[.='Individual & Family']"));
	this.medicare_button = element(by.xpath("//div[@id='footer']//a[.='Medicare']"));
	this.employer_and_employee_button = element(by.xpath("//div[@id='footer']//a[.='Employer & employee']"));
	this.all_plans_button = element(by.xpath("//div[@id='footer']//a[.='All plans']"));
	this.members_button = element(by.linkText("Members"));
	this.employers_button = element(by.linkText("Employers"));
	this.providers_button = element(by.linkText("Providers"));
	this.agents_button = element(by.linkText("Agents"));
	this.vendors_button = element(by.linkText("Vendors"));
	this.media_button = element(by.xpath("//div[@id='footer']//a[.='Media']"));
	this.careers_button = element(by.xpath("//div[@id='footer']//a[.='Media']"));
	this.wellness_button = element(by.xpath("//div[@id='footer']//a[.='Wellness']"));
	this.email_us_button = element(by.linkText("Email Us"));
	this.website_feedback_button = element(by.linkText("Website Feedback"));
	this.facebook_button = element(by.linkText("Facebook"));
	this.twitter_button = element(by.linkText("Twitter"));
	this.my_go_points_button = element(by.xpath("//div[@id='footer']//span[.='MyGo Points']"));
	
	//Priority Quote Individual page
	/////////////////////New Page//////////////////////////////////////////
	this.zipcode = element(by.name("zip"));
	this.first_name = element(by.name("firstname"));
	this.last_name = element(by.name("lastname"));
	this.date_of_birth = element(by.name("birthdate"));
	this.gender_male_radiobutton = element(by.css("input.ng-dirty:nth-child(1)"));
	this.gender_female_radiobutton = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5) > input:nth-child(3)"));
	this.tobacco_use_yes_radiobutton = element(by.css("td.ng-scope:nth-child(6) > span:nth-child(1) > input:nth-child(1)"));
	this.tobacco_use_no_radiobutton = element(by.css("td.ng-scope:nth-child(6) > span:nth-child(1) > input:nth-child(3)"));
	this.add_dental_enroll_radiobutton = element(by.css("td.ng-scope:nth-child(7) > input:nth-child(1)"));
	this.add_dental_waive_radiobutton = element(by.css("td.ng-scope:nth-child(7) > input:nth-child(3)"));
	this.continue_button = element(by.xpath("//div[@class='main-content']//submit-button[.='Continue']"));
	this.individual_medical_plans = element(by.css("button.btn-green:nth-child(2)"));
	this.individual_dental_plans = element(by.css("button.btn-green:nth-child(3)"));
	this.individual_medical_plan_option1 = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(1)"));
	this.individual_dental_plan_option1 = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(1)"));
	this.individual_enroll_button = element(by.css("button.ph-btn.btn-orange"));
	this.member_information_button = element(by.css("#Enrollment > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > h4:nth-child(1)"));
	this.eligibility_requirements = element(by.linkText("Eligibility requirements"));
	this.member_information = element(by.linkText("Member information"));
	this.payment_information = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[1]/a/h4"));
	this.expand_all = element(by.linkText("Expand all"));
	this.middle_initial = element(by.name("middleInitial"));
	this.ssn = element(by.name("ssn"));
	this.street_address1 = element(by.name("address1"));
	this.street_address2 = element(by.name("address2"));
	this.city = element(by.name("city"));
	this.phone = element(by.name("phone"));
	this.email = element(by.xpath("//div[@id='Enrollment']/div/div[2]/div[2]/div/div/form/div/indv-form/ng-form/div[18]/div/input"));
	this.individual_save_member_information_button = element(by.xpath("//div[@id='Enrollment']//button[.='Save']"));
	this.close_member_information_popup_button = element(by.css("div.modal-border.clearfix > button.pull-right.ng-scope"));
	this.eligibility_requirements_enrollees_eligible = element(by.name("enrolleesEligible"));
	this.dental_attestation_yes_radiobutton = element(by.name("pediatricDental"));
	this.dental_attestation_no_radiobutton = element(by.xpath("//div[@id='Enrollment']/div/div[1]/div[2]/div/div/form/div[2]/div[2]/div[3]/input[2]"));
	this.eligibility_requirements_save_button = element(by.css("submit-button.ph-btn:nth-child(3)"));
	//close_eligibility_requirements_popup_button, does not work
	this.close_eligibility_requirements_popup_button = element(by.css("button.ng-scope:nth-child(3)"));
	//Payment information
	this.payment_frequency_dropdown_option1 = element(by.xpath("//div[@class='col-sm-4']/select//option[1]"));
	this.payment_frequency_dropdown_option2 = element(by.xpath("//div[@class='col-sm-4']/select//option[2]"));
	this.payment_frequency_dropdown_option3 = element(by.xpath("//div[@class='col-sm-4']/select//option[3]"));
	this.payment_frequency_dropdown_option4 = element(by.xpath("//div[@class='col-sm-4']/select//option[4]"));
	this.payment_method_credit_card_radiobutton = element(by.name("paymentMethod"));
	this.payment_method_electronic_funds_transfer_radiobutton = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[5]/div/div[2]/input"));
	this.payment_method_money_order_certified_check_radiobutton = element(by.css("form.form-horizontal:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(3) > input:nth-child(1)"));
	this.card_type_dropdown_option1 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[1]"));
	this.card_type_dropdown_option2 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[2]"));
	this.card_type_dropdown_option3 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[3]"));
	this.card_type_dropdown_option4 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[4]"));
	this.credit_card_number = element(by.name("ccNumber"));
	this.name_on_card = element(by.name("cardHolder"));
	this.expiration_date = element(by.name("cardExpDate"));
	this.billing_address_checkbox = element(by.css("ng-form.ng-invalid-credit-card > div:nth-child(5) > div:nth-child(2) > input:nth-child(1)"));
	this.payment_information_street_address1 = element(by.name("streetAddress"));
	this.payment_information_street_address2 = element(by.name("streetAddress2"));
	this.payment_information_city = element(by.css('div.col-sm-8 > input[name="city"]'));
	this.payment_information_state_dropdown_option2 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[9]/div[2]/select//option[2]"));
	this.payment_information_zipcode = element(by.name("zip"));
	this.payment_method_electronic_funds_transfer_radiobutton = element(by.name("ongoingPaymentMethod"));
	this.payment_method_mail_a_bill_radiobutton = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[8]/div/div/div[2]/input"));
	this.name_of_finacial_insitutuion = element(by.name("bank"));
	this.account_holder_name = element(by.name("accountHolder"));
	this.aba_routing_number = element(by.name("accountNum"));
	//account_type_dropdown_option1 prompts user to choose option 2 or 3
	this.account_type_dropdown_option2 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/div[3]/div[5]/div/select//option[2]"));
	this.account_type_dropdown_option3 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/div[3]/div[5]/div/select//option[3]"));
	this.payment_frequency_save = element(by.css("submit-button.ph-btn:nth-child(9)"));

                    
	//Priority Quote create new group page.
 	this.group_name = element(by.name("GroupName"));
 	this.tax_id = element(by.name("taxId"));
 	this.religous_organization_option1 = element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[1]"));
 	this.religous_organization_option2 = element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]"));
	this.general_street_address = element(by.name("generalAddress"));
	this.general_street_address2 = element(by.name("generalAddress2"));
 	this.general_city = element(by.name("generalCity"));
 	this.zip_code = element(by.name("zipcode"));
 	this.effective_date_option1_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[1]"));
 	this.effective_date_option2_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[2]"));
 	this.effective_date_option3_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[3]"));
 	this.effective_date_option4_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[4]"));
 	this.effective_date_option5_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[5]"));
	this.effective_date_option6_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[6]"));
	this.create_and_close_button = element(by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and close']"));
	this.create_and_quote_button = element(by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and quote']"));
	this.cancel_button = element(by.css("button.btn.btn-link"));
	this.add_agent_button = element(by.xpath("//div[@class='col-sm-12']//button[.='Agent']"));
	this.search_agent_first_name = element(by.css("input.ng-valid.ng-dirty"));
	this.search_agent_last_name = element(by.xpath("//div[@class='modal-content']/div/form/div[2]/div/input"));
	this.search_button = element(by.xpath("//div[@class='modal-content']//button[.='Searching...']"));
	this.save_popup_window_button = element(by.xpath("//*/input[@class='btn btn-success pull-right']"));
	//*//div[@class='modal-content']/div/form/div[3]/div/input
	this.search_again_button = element(by.id("searchAgain"));
	this.add_employee = element(by.xpath("//div[@class='main-content']/div/div/div[3]/button"));
	this.employee_first_name = element(by.name("firstName"));
	this.employee_last_name = element(by.name("lastName"));
	this.employee_dob = element(by.name("dateOfBirth"));
	this.employee_medical_status_enroll = element(by.xpath("//div[@class='form-group']/table/tbody/tr/td[7]/div/select//option[1]"));
	this.employee_medical_status_waive = element(by.xpath("//div[@class='form-group']/table/tbody/tr/td[7]/div/select//option[2]"));
	this.employee_dental_status_enroll = element(by.xpath("//div[@class='form-group']/table/tbody/tr/td[8]/div/select//option[1]"));
	this.employee_dental_status_waive = element(by.xpath("//div[@class='form-group']/table/tbody/tr/td[8]/div/select//option[2]"));
	this.employee_save_disc_icon_button = element(by.xpath("//div[@class='form-group']/table/tbody/tr/td[9]/div/div/button[1]"));
	this.employee_save_button = element(by.xpath("//div[@class='main-content']/div/div/div[5]/button"));
	this.small_group_medical_plans_button = element(by.xpath("//div[@class='main-content']/div/div[3]/div[1]/div/button[2]"));
	this.small_group_medical_plans_option1_button = element(by.xpath("//div[@class='main-content']/div/div[3]/div[4]/table/tbody/tr[1]/td[1]/input"));
	this.small_group_dental_plans_button = element(by.xpath("//div[@class='main-content']/div/div[3]/div[1]/div/button[3]"));
	this.small_group_dental_plans_option1_button = element(by.xpath("//div[@class='main-content']/div/div[3]/div[4]/table/tbody/tr[1]/td[1]/input"));
	this.small_group_create_proposal_green_button = element(by.css("button.ph-btn.btn-green"));
	this.small_group_create_proposal_orange_button = element(by.css("button.ph-btn.btn-orange"));
	

/**********************************************************************************************************
  __  __      _  _          _ _   _      ___                ___    _ _    
 |  \/  |_  _| || |___ __ _| | |_| |_   | _____ _ _ _ __   |_ _|__| ( )___
 | |\/| | || | __ / -_/ _` | |  _| ' \  | _/ _ | '_| '  \   | |/ _` |/(_-<
 |_|  |_|\_, |_||_\___\__,_|_|\__|_||_| |_|\___|_| |_|_|_| |___\__,_| /__/
         |__/                                                             
***********************************************************************************************************/
	

};

module.exports = FormFieldsId;
