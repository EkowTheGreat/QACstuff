package com.qa.tests;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class firstSelenium {
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
		driver.get("https://www.google.com");
		Thread.sleep(2000);
	}
	
	@Test
	public void testTwo()  {
		System.out.println("test002");
		driver.get("https://www.google.com");
		WebElement website = driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input"));
		website.sendKeys("Halloween");
		WebElement submit =  driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[3]/center/input[1]"));
		submit.submit();
		
		WebElement resultPage = driver.findElement(By.xpath("//*[@id=\"rso\"]/div[1]/div/div[1]/div/div[1]/div/div/div/div/div/span/div/div/div/div[2]"));
		assertEquals("xyz", true, resultPage.getText().equals("31 October"));
	}
	@Test
	public void testThree() {
		System.out.println("test003");
		driver.get("http://thedemosite.co.uk/addauser.php");
		WebElement uName = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[1]/td[2]/p/input"));
		uName.sendKeys("EkowTheGreat");
		WebElement pWord = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[2]/td[2]/p/input"));
		pWord.sendKeys("GreatnessIncarnate");
		WebElement submit =  driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[3]/td[2]/p/input"));
		submit.submit();
		
		
		WebElement toLogin =  driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[4]"));
		toLogin.click();
		
		
		WebElement loginName = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/p/input"));
		loginName.sendKeys("EkowTheGreat");
		WebElement loginWord = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/p/input"));
		loginWord.sendKeys("GreatnessIncarnate");
		WebElement ssubmit =  driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/p/input"));
		ssubmit.submit();
		
		WebElement resultPage = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/big/blockquote/blockquote/font/center/b"));
		assertEquals("xyz",true, resultPage.getText().equals("**Successful Login**"));
		
		
	}
	@Ignore
	@Test
	public void testFour() {
		System.out.println("test004");
		driver.get("http://thedemosite.co.uk/login.php");
		WebElement uName = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/p/input"));
		uName.sendKeys("EkowTheGreat");
		WebElement pWord = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/p/input"));
		pWord.sendKeys("GreatnessIncarnate");
		WebElement submit =  driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/p/input"));
		submit.submit();
		
		WebElement resultPage = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/big/blockquote/blockquote/font/center/b"));
		assertEquals("xyz",true, resultPage.getText().equals("**Successful Login**"));
		
		
	}

	
	@After
	public void teardown() {
		driver.close();
	}
}
