package com.qa.tests;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ThirdSeleniumTest {
	
WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Desktop\\driverchrome\\chromedriver.exe");
		driver = (WebDriver) new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Test
	public void testOne() throws InterruptedException {
		System.out.println("test001");
		driver.get("https://www.youidraw.com/apps/painter/");
		Thread.sleep(2000);
		
		Actions actions = new Actions(driver);
		actions.moveByOffset(612, 312);
		WebElement pickBrush =  driver.findElement(By.xpath("//*[@id=\"brush\"]"));
		pickBrush.click();
		
		actions.clickAndHold().moveByOffset(-100, 25).perform();
		actions.clickAndHold().moveByOffset(0, 85).perform();
		actions.clickAndHold().moveByOffset(100, -25).perform();
		actions.moveByOffset(-100, 25);
		actions.clickAndHold().moveByOffset(0, 85).perform();
		actions.clickAndHold().moveByOffset(100, -25).release().perform();
		
		actions.moveByOffset(50, -145);
		actions.clickAndHold().moveByOffset(0, 170).perform();
		actions.moveByOffset(0, -85);
		actions.clickAndHold().moveByOffset(100, -50).perform();
		actions.moveByOffset(-100, 50);
		actions.clickAndHold().moveByOffset(100, 50).release().perform();
		
		actions.moveByOffset(50, -135);
		actions.clickAndHold().moveByOffset(0, 170).perform();
		actions.clickAndHold().moveByOffset(85, 0).perform();
		actions.clickAndHold().moveByOffset(0, -170).perform();
		actions.clickAndHold().moveByOffset(-85, 0).release().perform();
		
		actions.moveByOffset(130, 0);
		actions.clickAndHold().moveByOffset(40, 170).perform();
		actions.clickAndHold().moveByOffset(40, -170).perform();
		actions.clickAndHold().moveByOffset(40, 170).perform();
		actions.clickAndHold().moveByOffset(40, -170).perform();
		
		
		
		
		
		Thread.sleep(4000);
	}
	@After
	public void teardown() {
		driver.close();
	}
}
