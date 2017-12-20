package StepDefinitions;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import SeleniumFunctions.SeleniumFunctions;
import TestRunners.TestNgTestRunner;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class paytmTest {
	WebDriver driver = null;
	WebDriverWait wait = null;
	String path = System.getProperty("EvidencePath");
	
	@Given("^I navigate to \"([^\"]*)\" Url$")
	public void navigateToGivenUrl(String url) throws Exception{
		driver = new SeleniumFunctions().createInCognito(url);
		wait = new WebDriverWait(driver, 30);
		Thread.sleep(5000);
		System.out.println("Title is "+driver.getTitle().toString());
		String windowHandle = driver.getWindowHandle();
		//this code is to take screenshots
		new SeleniumFunctions().takeScreenshot(windowHandle, driver, path, "Given");
	}
	
	@Given("I have a Log In/Sign Up option")
	public void locateGivenOption(){
		
	}
	
	@When("I click on \"([^\"]*)\" option")
	public void clickOnOption(String option){
		try {
			WebElement we = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/div[2]/div[3]/div[3]/div"));
			we.click();
			Thread.sleep(3000);
			String windowHandle = driver.getWindowHandle();
			//this code is to take screenshots
			new SeleniumFunctions().takeScreenshot(windowHandle, driver, path, "When");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@When("I enter \"([^\"]*)\" in Search")
	public void searchText(String searchString){
		try{
			driver.findElement(By.xpath("//*[@id=\"lst-ib\"]")).sendKeys(searchString);
			driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[3]/center/input[1]")).click();
			Thread.sleep(2000);
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	@Then("search results should be displayed")
	public void searchResultsAreDisplayed(){
		try{
			/*synchronized (driver)
			{
			    driver.wait(3000);
			}*/
			WebElement we = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"resultStats\"]")));
			/*driver.findElement(By.xpath("//*[@id=\"resultStats\"]")).getText().contains("results");*/
			we.getText().contains("results");
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	@And("I choose images in results")
	public void selectImages(){
		try{
			/*wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"hdtb-msb-vis\"]/div[2]/a")));*/
			
			driver.findElement(By.xpath("//*[@id=\"hdtb-msb-vis\"]/div[2]/a")).click();
			Thread.sleep(3000);
			driver.quit();
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	@Then("A new pop-up should be opened")
	public void validatepopup(){
		System.out.println("This has to be written yet");
		driver.quit();
	}

	@And("Exit the browser")
	public void exit(){
		new SupportiveSteps().closeDriver(driver);
	}
	

	@When("^I provide Username and Password from \"([^\"]*)\"$")
	public void i_provide_Username_and_Password_from(String arg1) throws Throwable {
	    List<LinkedHashMap<String, String>> data = new TestNgTestRunner().getTestDataInputs();
	    int i = Integer.parseInt(arg1);
	    HashMap<String, String> inputvalues = data.get(i);
	    System.out.println("UserName is "+inputvalues.get("USERNAME"));
	    System.out.println("Password is "+inputvalues.get("PASSWORD"));
	    wait = new WebDriverWait(driver, 30);
	    wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"email\"])")));
	    driver.findElement(By.xpath("//*[@id=\"email\"])")).clear();
	    driver.findElement(By.xpath("//*[@id=\"email\"])")).sendKeys(inputvalues.get("USERNAME"));
	    driver.findElement(By.xpath("//*[@id=\"pass\"]")).sendKeys(inputvalues.get("PASSWORD"));
	    driver.findElement(By.xpath("//*[@id=\"u_0_2\"]")).click();
	}

	@Then("^I should be logged in$")
	public void i_should_be_logged_in() throws Throwable {
	    wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"u_0_c\"]/a")));
	    driver.findElement(By.xpath("//*[@id=\"u_0_c\"]/a")).getText().contains("Home");
	    
	}

	@Then("^I should be able to logout$")
	public void i_should_be_able_to_logout() throws Throwable {
	   driver.findElement(By.xpath("//*[@id=\"userNavigationLabel\"]")).click();
	   wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"js_12\"]/div/div/ul/li[12]/a/span/span")));
	   driver.findElement(By.xpath("//*[@id=\"js_12\"]/div/div/ul/li[12]/a/span/span")).click();
	   new SupportiveSteps().closeDriver(driver);
	}
	
}
