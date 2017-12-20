package GooglePageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class GoogleHomePage {
	//this will be page for google
	public void navigateToHome(WebDriver driver, String url){
		driver.get(url);
		System.out.println("Following Page Object Model");
	}
	
	public void searchGivenText(WebDriver driver, String text){
		driver.findElement(By.xpath("//*[@id=\"lst-ib\"]")).sendKeys(text);
	    driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[3]/center/input[1]")).click();
	    System.out.println("Searching Text");
	}
}
