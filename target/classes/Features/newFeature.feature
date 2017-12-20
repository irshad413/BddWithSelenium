#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: I am trying to look up Deloitte in google

Background:
Given I am navigating to "https://google.co.in"

Scenario Outline:
When I search for "<searchText>"
And I click on Books
Then Search results should be displayed
Examples:
|searchText	|
|Deloitte	|
|Systems Integration, Deloitte|


