package com.qa.tests;

import static org.junit.Assert.*;

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

public class SecondSeleniumTest {
	
WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Desktop\\driverchrome\\chromedriver.exe");
		driver = (WebDriver) new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	
	@Test
	public void testThree() throws InterruptedException {
		System.out.println("test003");
		driver.get("http://automationpractice.com/index.php");
		WebElement firstSearch = driver.findElement(By.xpath("//*[@id=\"search_query_top\"]"));
		firstSearch.sendKeys("Dress");
		WebElement submit =  driver.findElement(By.xpath("//*[@id=\"searchbox\"]/button"));
		submit.submit();
		
		
		WebElement toItemView =  driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li[1]/div/div[2]/h5/a"));
		toItemView.click();
		
	
		
		
	
		
		WebElement addToCart =  driver.findElement(By.xpath("//*[@id=\"add_to_cart\"]/button"));
		addToCart.click();
		
		Thread.sleep(2000);
		WebElement proceedeToCheckout =  driver.findElement(By.xpath("//*[@id=\"layer_cart\"]/div[1]/div[2]/div[4]/a"));
		proceedeToCheckout.click();
		
		
		Thread.sleep(3000);
		//WebElement resultPage = driver.findElement(By.xpath("//*[@id=\"cart_title\"]"));
		//assertEquals("xyz",true, resultPage.getText().equals("SHOPPING-CART SUMMARY"));
		
		WebElement proceedeToAccount =  driver.findElement(By.xpath("//*[@id=\"center_column\"]/p[2]/a[1]"));
		proceedeToAccount.click();
		Thread.sleep(3000);
		
		WebElement addEmail = driver.findElement(By.xpath("//*[@id=\"email_create\"]"));
		addEmail.sendKeys("loooool@hotmail.com");
		WebElement createAccount = driver.findElement(By.xpath("//*[@id=\"SubmitCreate\"]"));
		createAccount.submit();
		
		Thread.sleep(3000);
		
		WebElement pickGender =  driver.findElement(By.xpath("//*[@id=\"id_gender1\"]"));
		pickGender.click();
		
		WebElement fName =  driver.findElement(By.xpath("//*[@id=\"customer_firstname\"]"));
		fName.sendKeys("laugh");
		
		WebElement lName =  driver.findElement(By.xpath("//*[@id=\"customer_lastname\"]"));
		lName.sendKeys("out-loud");
		
		WebElement mPword =  driver.findElement(By.xpath("//*[@id=\"passwd\"]"));
		mPword.sendKeys("hehehahamwahaha");
		
		WebElement mAddress =  driver.findElement(By.xpath("//*[@id=\"address1\"]"));
		mAddress.sendKeys("96 Six9ine Road");
		
		WebElement mCity =  driver.findElement(By.xpath("//*[@id=\"city\"]"));
		mCity.sendKeys("The Hood");
		
		WebElement mPCode =  driver.findElement(By.xpath("//*[@id=\"postcode\"]"));
		mPCode.sendKeys("96969");
		
		WebElement mNumber =  driver.findElement(By.xpath("//*[@id=\"phone_mobile\"]"));
		mNumber.sendKeys("10169696969");
		
		WebElement pickState =  driver.findElement(By.xpath("//*[@id=\"id_state\"]"));
		pickState.click();
		
		pickState =  driver.findElement(By.xpath("//*[@id=\"id_state\"]/option[46]"));
		pickState.click();
		
		createAccount = driver.findElement(By.xpath("//*[@id=\"submitAccount\"]"));
		createAccount.click();
		
		Thread.sleep(2000);
		

		
		createAccount = driver.findElement(By.xpath("//*[@id=\"center_column\"]/form/p/button"));
		createAccount.submit();
		
		Thread.sleep(3000);
		
		pickState =  driver.findElement(By.xpath("//*[@id=\"cgv\"]"));
		pickState.click();
		
		pickState =  driver.findElement(By.xpath("//*[@id=\"form\"]/p/button"));
		pickState.click();
		
		Thread.sleep(5000);
		
		pickState =  driver.findElement(By.xpath("//*[@id=\"HOOK_PAYMENT\"]/div[1]/div/p/a"));
		pickState.click();
		
		Thread.sleep(3000);
		
		pickState =  driver.findElement(By.xpath("//*[@id=\"cart_navigation\"]/button"));
		pickState.click();
		
		Thread.sleep(5000);
		
	    WebElement resultPage = driver.findElement(By.xpath("//*[@id=\"center_column\"]/div/p/strong"));
		assertEquals("xyz",true, resultPage.getText().equals("Your order on My Store is complete."));
		
		
		
		
		
		
		
		
		
		
		
		
	
		
		
		
		
		
	}
	
	
	@After
	public void teardown() {
		driver.close();
	}

}
