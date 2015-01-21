Feature: Fill out a individual quote
  As a user of priority quote
  I should be able to login to prority quote and fill out a individual quote

  @dev 
  Scenario: Fill out a individual quote
    Given I log onto priority quote with username "BKFIERENS" and password "test"
	Given I select "pq_individual_button" 
	When I enter in "49506" in form field "pq_zipcode"
	When I wait "2" seconds 
	Then I log out of priority quote

