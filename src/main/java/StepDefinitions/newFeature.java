package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.browserlaunchers.locators.GoogleChromeLocator;

import GooglePageObject.GoogleHomePage;
import SeleniumFunctions.SeleniumFunctions;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class newFeature extends SeleniumFunctions{

@Given("^I am navigating to \"([^\"]*)\"$")
public void i_am_navigating_to(String arg1) throws Throwable {
	createWebDriver("Chrome");
	new GoogleHomePage().navigateToHome(driver, arg1);
	System.out.println("Here dirver is static");
}

@When("^I search for \"([^\"]*)\"$")
public void i_search_for(String arg1) throws Throwable {
    new GoogleHomePage().searchGivenText(driver, arg1);
    System.out.println("Search happened in POM model");
}

@Then("^Search results should be displayed$")
public void search_results_should_be_displayed() throws Throwable {
	//*[@id="resultStats"]
	driver.findElement(By.xpath("//*[@id=\"resultStats\"]")).getText().contains("results");
	driver.quit();
	
}

@And("I click on Books")
public void clickOnBooks() throws Throwable{
	driver.findElement(By.xpath("//*[@id=\"hdtb-msb-vis\"]/div[5]")).click();
}




}
