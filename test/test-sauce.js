const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require("selenium-webdriver/chrome");

describe("Sauce Labs Integration Test", function () {
  let driver;

  it("Coba Login Saucedemo", async function () {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.saucedemo.com");
    let inputUsername = await driver.findElement(
      By.xpath('//*[@id="user-name"]')
    );
    await inputUsername.sendKeys("standard_user");
    let inputPassword = await driver.findElement(
      By.xpath('//*[@id="password"]')
    );
    await inputPassword.sendKeys("secret_sauce");
    let loginButton = await driver.findElement(
      By.xpath('//*[@id="login-button"]')
    );
    await loginButton.click();

    let sortDropdown = await driver.findElement(
      By.xpath('//*[@id="header_container"]/div[2]/div/span/select')
    );
    await sortDropdown.click();

    let optionAtoZ = await driver.findElement(
      By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[1]')
    );
    await optionAtoZ.click();

    //await driver.quit();
  });
});
