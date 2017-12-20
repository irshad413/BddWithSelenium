package StepDefinitions;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;

import org.openqa.selenium.WebDriver;

import SeleniumFunctions.SeleniumFunctions;
import TestRunners.TestNgTestRunner;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class sample {
	WebDriver driver = null;
	
	@Given("^Sample feature is created with (\\d+) values$")
	public void sample_feature_is_created_with_values(int arg1) throws Throwable {
	   System.out.println("Number of values in feature created is "+arg1);
	}
	
	@Given("^Sample feature is created$")
		public void runGiveStatement(){
		System.out.println("Given is being run in Sample Feature");
	}
	@When("^I run the file$")
	public void runWhenStatement(){
		System.out.println("When is being run in Sample Feature");
	}
	@When("^I run the file \"([^\"]*)\" time$")
	public void secondRunStatement(){
		System.out.println("This is the second scenario running");
	}
	@When("^i have nothing$")
	public void printNothing(){
		System.out.println("Nothing");
	}
	
	@Then("^output can be found in Console$")
	public void runThenStatement(){
		System.out.println("Then is being run in Sample Feature");
	}
	
	@Then("^second line should be happy$")
	public void second_line_should_be_happy() throws Throwable {
	    System.out.println("\n Happy");
	}
	
	
	
}
