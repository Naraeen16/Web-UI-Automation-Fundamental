import { By, until } from "selenium-webdriver";

export default class CartPage {
  constructor(driver) {
    this.driver = driver;
  }

  async openCart() {
    const cartIcon = await this.driver.wait(
      until.elementLocated(By.className("shopping_cart_link")),
      5000
    );
    await cartIcon.click();
  }

  async clickContinueShopping() {
    const continueButton = await this.driver.wait(
      until.elementLocated(By.id("continue-shopping")),
      5000
    );
    await continueButton.click();
  }

  async clickCheckout() {
    const checkoutButton = await this.driver.wait(
      until.elementLocated(By.id("checkout")),
      5000
    );
    await checkoutButton.click();
  }
}
