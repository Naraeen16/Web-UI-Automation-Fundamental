const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require("selenium-webdriver/chrome");

describe("Sauce Labs Integration Test", function () {
  let driver;

  // Gunakan beforeEach untuk setup sebelum setiap test
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com");
  });

  it("Coba Login dan Sorting Produk A-Z", async function () {
    // Login
    const inputUsername = await driver.findElement(By.id("user-name"));
    await inputUsername.sendKeys("standard_user");

    const inputPassword = await driver.findElement(By.id("password"));
    await inputPassword.sendKeys("secret_sauce");

    const loginButton = await driver.findElement(By.id("login-button"));
    await loginButton.click();

    await driver.wait(until.elementLocated(By.className("title")), 5000);
    const titleText = await driver.findElement(By.className("title")).getText();
    assert.strictEqual(titleText, "Products", "Login gagal!");

    const sortDropdown = await driver.findElement(
      By.css("select.product_sort_container")
    );
    await sortDropdown.click();

    const optionAtoZ = await driver.findElement(By.css('option[value="az"]'));
    await optionAtoZ.click();

    const selectedValue = await sortDropdown.getAttribute("value");
    assert.strictEqual(selectedValue, "az", "Sorting A-Z gagal!");
  });

  afterEach(async function () {
    //  await driver.quit();
  });
});
