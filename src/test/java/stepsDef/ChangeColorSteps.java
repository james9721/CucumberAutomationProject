package stepsDef;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.TechFiosPage;
import pages.TestBase;

public class ChangeColorSteps extends TestBase{
	TechFiosPage TF;
	
	@Before
	public void setUp() {
		initDriver();
		driver.get("https://techfios.com/test/101/");
		TF = PageFactory.initElements(driver, TechFiosPage.class);
		
	}
//	@Given("^Set SkyBlue Background button exists$")
//	public void setBlueButtonValidaiton() {
//		TF.validateBlueButton();
//	}
		@Given("^\"([^\"]*)\" button exists$")
		public void set_button_exists(String color){
		switch(color) {
			case "skyblue":
				TF.validateBlueButton();
			break;
			case"white":
				TF.validateWhiteButton();
			break;
		}
		}
	
	@When("^I click on the \"([^\"]*)\"$")
	public void clickButton(String button) {
		switch(button) {
		case"skyblue":
		TF.clickBlueButton();
		break;
		case"white":
			TF.clickWhiteButton();
		break;
		}
	}
	@Then("^the background color will change to \"([^\"]*)\"$")
	public void the_background_color_will_change_to_sky_blue(String bgColor)   {
		switch(bgColor) {
		case"skyblue":
			TF.validateBlue();
		break;
		case"white":
			TF.validateBlue();
		break;
		}
}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	}
