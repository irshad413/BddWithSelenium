package SeleniumFunctions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumFactory {
	private static WebDriver mdriver;
	private static WebDriverWait wait;
	
	protected SeleniumFactory(){
		//default constructor
	}
	
	protected SeleniumFactory(WebDriver paramDriver, long defaultTimeOut){
		mdriver = paramDriver;
		mdriver.manage().timeouts().implicitlyWait(defaultTimeOut, TimeUnit.SECONDS);
	}
	
	protected WebDriver getWebDriver(String webDriverType, long defaultTimeOut){		
		switch(webDriverType){
		case "Chrome":
			System.setProperty("webdriver.chrome.driver", "C:\\BackUp\\FirmInitiatives\\HCSC\\BDDWithSelenium\\src\\main\\resources\\chromedriver.exe");
			mdriver = new ChromeDriver();
			mdriver.manage().timeouts().implicitlyWait(defaultTimeOut, TimeUnit.SECONDS);
			break;
		case "FireFox":
			mdriver = new FirefoxDriver();
			mdriver.manage().timeouts().implicitlyWait(defaultTimeOut, TimeUnit.SECONDS);
			break;
			default:
				break;
		}
		return mdriver;
	}
	
	protected WebDriver getDriver(){
		return mdriver;
	}
	
}
