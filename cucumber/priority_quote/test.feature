Feature: I can login to priority quote
  As a user of priority quote
  I should be able to login to prority quote with valid crendentials
  to be to create quotes

 
  @dev
  Scenario: Login with valid crendentials
    Given I log onto priority quote with username "routphil" and password "test"
    Then I should see text "Logout" on page

  @dev
  Scenario: Login with valid crendentials
    Given I log onto priority quote with username "routphil" and password "badpassword"
    Then I should see text "Login" on page
 