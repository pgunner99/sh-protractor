Feature: Fill out a individual quote
  As a user of priority quote
  I should be able to login to prority quote and fill out a individual quote

  
  Scenario: Fill out a individual quote 1
    Given I log onto priority quote with username "BKFIERENS" and password "test"
	Given I select "individual_button" 
	When I wait "2" seconds
	When I enter in "49506" in form field "zipcode"
	When I enter in "AutoTest FirstName" in form field "first_name"
	When I enter in "AutoTest LastName" in form field "last_name"
	When I enter in "01/01/1971" in form field "date_of_birth"
	Given I select "gender_male_radiobutton"
	Given I select "gender_female_radiobutton"
	Given I select "tobacco_use_no_radiobutton"
	Given I select "add_dental_enroll_radiobutton"
	Given I select "continue_button"
	When I wait "45" seconds
	Given I select "individual_medical_plans"
	When I wait "3" seconds
	Given I select "individual_medical_plan_option1"
	Given I select "individual_dental_plans"
	When I wait "3" seconds
	Given I select "individual_dental_plan_option1"
	Given I select "individual_enroll_button"
	When I wait "4" seconds
	Then I should see text "Complete enrollment for:" on page
	Given I select "expand_all"
    When I wait "2" seconds
    Given I select "eligibility_requirements_enrollees_eligible"
    Given I select "dental_attestation_yes_radiobutton"
    When I enter in "AutoTest Middle Initial" in form field "middle_initial"
    When I enter in "111223333" in form field "ssn"
    When I enter in "AutoTest Street Address1" in form field "street_address1"
    When I enter in "AutoTest Street Address2" in form field "street_address2"
    When I enter in "AutoTest City" in form field "city"
    When I enter in "616" in form field "phone"
    When I enter in "2223333" in form field "phone"
	When I enter in "autotest@email.com" in form field "email"
    #formFieldsId.individual_save_member_information_button.click();
    Given I select "payment_frequency_dropdown_option2"
    Given I select "payment_method_credit_card_radiobutton"
    Given I select "card_type_dropdown_option3"
	When I enter in "5300212134354647" in form field "credit_card_number"
    When I enter in "AutoTest CardName" in form field "name_on_card"
    When I enter in "07/17" in form field "expiration_date"
    When I enter in "AutoTest Street Address1" in form field "payment_information_street_address1"
    When I enter in "AutoTest Street Address2" in form field "payment_information_street_address2"
    When I enter in "AutoTest City" in form field "payment_information_city"
    Given I select "payment_information_state_dropdown_option2"
    When I enter in "49506" in form field "payment_information_zipcode"
    Given I select "payment_method_mail_a_bill_radiobutton"

  @dev
  Scenario: Fill out a individual quote
	Given I log onto priority quote with username "BKFIERENS" and password "test"
	When I create an individual quote in Priority Quote
	
  
  Scenario: Fill out a small group quote
    Given I log onto priority quote with username "BKFIERENS" and password "test"
	When I create a small group in Priority Quote


 #Background:
    #Given an agent named "KRAMER"
    #And a test environment named "test.internal.priorityhealth.com"
    #And a page "create indivudual quote"
    #And a Plan type "permanent"
    #And an enrollment type "special enrollment period" 

