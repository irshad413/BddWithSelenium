package TestRunners;

import java.io.File;
import java.util.LinkedHashMap;
import java.util.List;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import OtherFunctionsForTest.XlUtil;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


@CucumberOptions(
        features = "src/main/java/Features",
        glue = {"StepDefinitions"},
        tags = {"~@Ignore", "~@facebook"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
public class TestNgTestRunner {
	private static List<LinkedHashMap<String,String>> dataFromExcel = null;
	private TestNGCucumberRunner testNGCucumberRunner;
	 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
    
    @BeforeTest
    public static void readInputData() throws Exception{
    	File testDataFile = new File("C:\\BackUp\\FirmInitiatives\\HCSC\\BDDWithSelenium\\src\\main\\resources\\testData.xlsx");
    	String path = testDataFile.getAbsolutePath();
    	if(testDataFile.exists()){
    		dataFromExcel = new XlUtil().readExcel(path);
    	}
    }
    
    public List<LinkedHashMap<String, String>> getTestDataInputs(){
    	return dataFromExcel;
    }
    
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }
    
}
