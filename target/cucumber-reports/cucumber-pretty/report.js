$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("facebook.feature");
formatter.feature({
  "line": 1,
  "name": "I am trying to login in to Facebook",
  "description": "",
  "id": "i-am-trying-to-login-in-to-facebook",
  "keyword": "Feature"
});
formatter.uri("newFeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "I am trying to look up Deloitte in google",
  "description": "",
  "id": "i-am-trying-to-look-up-deloitte-in-google",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "",
  "description": "",
  "id": "i-am-trying-to-look-up-deloitte-in-google;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I search for \"\u003csearchText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Books",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Search results should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "i-am-trying-to-look-up-deloitte-in-google;;",
  "rows": [
    {
      "cells": [
        "searchText"
      ],
      "line": 30,
      "id": "i-am-trying-to-look-up-deloitte-in-google;;;1"
    },
    {
      "cells": [
        "Deloitte"
      ],
      "line": 31,
      "id": "i-am-trying-to-look-up-deloitte-in-google;;;2"
    },
    {
      "cells": [
        "Systems Integration, Deloitte"
      ],
      "line": 32,
      "id": "i-am-trying-to-look-up-deloitte-in-google;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 22,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "I am navigating to \"https://google.co.in\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://google.co.in",
      "offset": 20
    }
  ],
  "location": "newFeature.i_am_navigating_to(String)"
});
formatter.result({
  "duration": 14098294321,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "",
  "id": "i-am-trying-to-look-up-deloitte-in-google;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I search for \"Deloitte\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Books",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Search results should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Deloitte",
      "offset": 14
    }
  ],
  "location": "newFeature.i_search_for(String)"
});
formatter.result({
  "duration": 5689640737,
  "status": "passed"
});
formatter.match({
  "location": "newFeature.clickOnBooks()"
});
formatter.result({
  "duration": 115228578,
  "status": "passed"
});
formatter.match({
  "location": "newFeature.search_results_should_be_displayed()"
});
formatter.result({
  "duration": 1586042995,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "I am navigating to \"https://google.co.in\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://google.co.in",
      "offset": 20
    }
  ],
  "location": "newFeature.i_am_navigating_to(String)"
});
formatter.result({
  "duration": 21127390012,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "i-am-trying-to-look-up-deloitte-in-google;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I search for \"Systems Integration, Deloitte\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on Books",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Search results should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Systems Integration, Deloitte",
      "offset": 14
    }
  ],
  "location": "newFeature.i_search_for(String)"
});
formatter.result({
  "duration": 5864623679,
  "status": "passed"
});
formatter.match({
  "location": "newFeature.clickOnBooks()"
});
formatter.result({
  "duration": 110368964,
  "status": "passed"
});
formatter.match({
  "location": "newFeature.search_results_should_be_displayed()"
});
formatter.result({
  "duration": 1645302136,
  "status": "passed"
});
formatter.uri("paytmTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#PayTm karo :)"
    }
  ],
  "line": 4,
  "name": "I am testing the payTm login page",
  "description": "",
  "id": "i-am-testing-the-paytm-login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@paytm_Login"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "123 Verify payTm page is loaded and Login is displayed",
  "description": "",
  "id": "i-am-testing-the-paytm-login-page;123-verify-paytm-page-is-loaded-and-login-is-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"https://paytm.com/\" Url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Log In/Sign Up\" option",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "A new pop-up should be opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://paytm.com/",
      "offset": 15
    }
  ],
  "location": "paytmTest.navigateToGivenUrl(String)"
});
formatter.result({
  "duration": 11944038950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log In/Sign Up",
      "offset": 12
    }
  ],
  "location": "paytmTest.clickOnOption(String)"
});
formatter.result({
  "duration": 3832004166,
  "status": "passed"
});
formatter.match({
  "location": "paytmTest.validatepopup()"
});
formatter.result({
  "duration": 1603074984,
  "status": "passed"
});
formatter.uri("sample.feature");
formatter.feature({
  "line": 1,
  "name": "This is a sample feature file",
  "description": "",
  "id": "this-is-a-sample-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing the sample feature for understanding",
  "description": "",
  "id": "this-is-a-sample-feature-file;testing-the-sample-feature-for-understanding",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Sample feature is created with 2 values",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I run the file",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "output can be found in Console",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "second line should be happy",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "sample.sample_feature_is_created_with_values(int)"
});
formatter.result({
  "duration": 1547666,
  "status": "passed"
});
formatter.match({
  "location": "sample.runWhenStatement()"
});
formatter.result({
  "duration": 367589,
  "status": "passed"
});
formatter.match({
  "location": "sample.runThenStatement()"
});
formatter.result({
  "duration": 223544,
  "status": "passed"
});
formatter.match({
  "location": "sample.second_line_should_be_happy()"
});
formatter.result({
  "duration": 203487,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Search in Google search engine"
    }
  ],
  "line": 3,
  "name": "Searching demonstration in Googles",
  "description": "",
  "id": "searching-demonstration-in-googles",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@search"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "124 search for some word in google",
  "description": "",
  "id": "searching-demonstration-in-googles;124-search-for-some-word-in-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I navigate to \"https://www.google.co.in/\" Url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"cucumber framework\" in Search",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "search results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I choose images in results",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.in/",
      "offset": 15
    }
  ],
  "location": "paytmTest.navigateToGivenUrl(String)"
});
formatter.result({
  "duration": 19594210182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber framework",
      "offset": 9
    }
  ],
  "location": "paytmTest.searchText(String)"
});
formatter.result({
  "duration": 4782269883,
  "status": "passed"
});
formatter.match({
  "location": "paytmTest.searchResultsAreDisplayed()"
});
formatter.result({
  "duration": 87844656,
  "status": "passed"
});
formatter.match({
  "location": "paytmTest.selectImages()"
});
formatter.result({
  "duration": 21704225049,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "125 searching google with examples",
  "description": "",
  "id": "searching-demonstration-in-googles;125-searching-google-with-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I navigate to \"\u003csearchUrl\u003e\" Url",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cword\u003e\" in Search",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "search results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Exit the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "searching-demonstration-in-googles;125-searching-google-with-examples;",
  "rows": [
    {
      "cells": [
        "searchUrl",
        "word"
      ],
      "line": 17,
      "id": "searching-demonstration-in-googles;125-searching-google-with-examples;;1"
    },
    {
      "cells": [
        "https://www.google.co.in/",
        "cucumber"
      ],
      "line": 18,
      "id": "searching-demonstration-in-googles;125-searching-google-with-examples;;2"
    },
    {
      "cells": [
        "https://www.google.co.in/",
        "Selenium"
      ],
      "line": 19,
      "id": "searching-demonstration-in-googles;125-searching-google-with-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "125 searching google with examples",
  "description": "",
  "id": "searching-demonstration-in-googles;125-searching-google-with-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I navigate to \"https://www.google.co.in/\" Url",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"cucumber\" in Search",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "search results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Exit the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.in/",
      "offset": 15
    }
  ],
  "location": "paytmTest.navigateToGivenUrl(String)"
});
formatter.result({
  "duration": 23656796221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 9
    }
  ],
  "location": "paytmTest.searchText(String)"
});
formatter.result({
  "duration": 5325969763,
  "status": "passed"
});
formatter.match({
  "location": "paytmTest.searchResultsAreDisplayed()"
});
formatter.result({
  "duration": 86994241,
  "status": "passed"
});
formatter.match({
  "location": "paytmTest.exit()"
});
formatter.result({
  "duration": 1480829760,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "125 searching google with examples",
  "description": "",
  "id": "searching-demonstration-in-googles;125-searching-google-with-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I navigate to \"https://www.google.co.in/\" Url",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Selenium\" in Search",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "search results should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Exit the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.in/",
      "offset": 15
    }
  ],
  "location": "paytmTest.navigateToGivenUrl(String)"
});
formatter.result({
  "duration": 16271824777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 9
    }
  ],
  "location": "paytmTest.searchText(String)"
});
formatter.result({
  "duration": 6115388304,
  "status": "passed"
});
formatter.match({
  "location": "paytmTest.searchResultsAreDisplayed()"
});
formatter.result({
  "duration": 62570359,
  "status": "passed"
});
formatter.match({
  "location": "paytmTest.exit()"
});
formatter.result({
  "duration": 1463724837,
  "status": "passed"
});
});