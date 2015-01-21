Feature: Fill out a individual quote
  As a user of priority quote
  I should be able to login to prority quote and fill out a individual quote

  @dev
  Scenario: Fill out a individual quote
    Given I log onto priority quote with username "BKFIERENS" and password "test"
	When I create a small group in Priority Quote

