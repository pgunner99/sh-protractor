Feature: Fill out a individual quote
  As a user of priority quote
  I should be able to login to prority quote and fill out a individual quote

  @dev
  Scenario: Fill out a individual quote 1
    Given I log onto priority quote with username "BKFIERENS" and password "test"
	Given I select "pq_individual_button" 
	When I wait "2" seconds
	When I enter in "49506" in form field "pq_zipcode"
	When I enter in "AutoTest FirstName" in form field "pq_first_name"
	When I enter in "AutoTest LastName" in form field "pq_last_name"
	When I enter in "01/01/1971" in form field "pq_date_of_birth"
	Given I select "pq_gender_male_radiobutton"
	Given I select "pq_gender_female_radiobutton"
	Given I select "pq_tobacco_use_no_radiobutton"
	Given I select "pq_add_dental_enroll_radiobutton"
	Given I select "pq_continue_button"
	When I wait "45" seconds
	Given I select "pq_individual_medical_plans"
	When I wait "1" seconds
	Given I select "pq_individual_medical_plan_option1"
	Given I select "pq_individual_dental_plans"
	When I wait "1" seconds
	Given I select "pq_individual_dental_plan_option1"
	Given I select "pq_individual_enroll_button"
	When I wait "10" seconds
	Then I should see text "Complete enrollment for:" on page
	
	
  Scenario: Fill out a individual quote
	Given I log onto priority quote with username "BKFIERENS" and password "test"
	When I create an individual quote in Priority Quote

  Scenario: Fill out a small group quote
    Given I log onto priority quote with username "BKFIERENS" and password "test"
	When I create a small group in Priority Quote
