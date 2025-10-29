const { By, until } = require("selenium-webdriver");
const assert = require("assert");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameField = By.id("user-name");
    this.passwordField = By.id("password");
    this.loginButton = By.id("login-button");
    this.titleLabel = By.className("title");
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameField).sendKeys(username);
    await this.driver.findElement(this.passwordField).sendKeys(password);
    await this.driver.findElement(this.loginButton).click();
  }

  async verifyLogin() {
    await this.driver.wait(until.elementLocated(this.titleLabel), 5000);
    const titleText = await this.driver.findElement(this.titleLabel).getText();
    assert.strictEqual(titleText, "Products", "Login gagal!");
  }
}

module.exports = LoginPage;
