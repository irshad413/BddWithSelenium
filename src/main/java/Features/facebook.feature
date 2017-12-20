Feature: I am trying to login in to Facebook

@facebook
Scenario Outline: I am trying to login to my facebook
Given I navigate to "https://www.facebook.com/" Url
When I provide Username and Password from "<rowIndex>"
Then I should be logged in
And I should be able to logout
And Exit the browser
Examples:
|rowIndex|
|1|