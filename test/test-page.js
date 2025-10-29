import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import LoginPage from "./page/page_login.js";
import SortPage from "./page/page_sort.js";
import CartPage from "./page/page_cart.js";

describe("Sauce Labs Integration Test (POM)", function () {
  let driver;
  let loginPage, sortPage, cartPage;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    loginPage = new LoginPage(driver);
    sortPage = new SortPage(driver);
    cartPage = new CartPage(driver);
  });

  it("Login, Sort Produk, lalu buka Cart", async function () {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.verifyLogin();

    await sortPage.sortByAtoZ();

    await cartPage.openCart();
  });

  after(async function () {
    //await driver.quit();
  });
});
