package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class TechFiosPage {
	WebDriver driver;

	public TechFiosPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]")
	WebElement Blue_button;
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
	WebElement White_button;
	@FindBy(how = How.XPATH, using = "/html/body")
	WebElement BG_COLOR;

	public void validateBlueButton() {
		if (Blue_button.isDisplayed()) {
			System.out.println("Blue Button is present");
		}
		else {
			System.out.println("Blue Button is NOT present");
		}
	}
	public void validateWhiteButton() {
		if(White_button.isDisplayed()){
			System.out.println("White Button is present");
		}
		else {
			System.out.println("White Button is NOT present");
		}
	}
	public void clickBlueButton() {
		Blue_button.click();
	}
	public void clickWhiteButton() {
		White_button.click();
	}

	public void validateBlue() {
		String skyblueHex = "#87ceeb";
		String whiteHex = "#ffffff";
		String BBGcolor = BG_COLOR.getCssValue("background-color");
		String actualhexColor = Color.fromString(BBGcolor).asHex();
		if (skyblueHex.equals(actualhexColor)) {
			System.out.println("Blue Background is matching");
			System.out.println("SkyBlue hex: " + skyblueHex);
			System.out.println("Actual Hex: " + actualhexColor);
		} else if (whiteHex.equals(actualhexColor)) {
			System.out.println("White Background is matching");
			System.out.println("White Hex: " + whiteHex);
			System.out.println("Actual Hex: " + actualhexColor);
		} else {
			System.out.println("Background is  not matching");
			System.out.println("SkyBlue hex: " + skyblueHex);
			System.out.println("Actual Hex: " + actualhexColor);
			System.out.println(whiteHex);
		}

	}

}
