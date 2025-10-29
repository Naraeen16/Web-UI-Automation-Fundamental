const { By } = require("selenium-webdriver");
const assert = require("assert");

class SortPage {
  constructor(driver) {
    this.driver = driver;
    this.sortDropdown = By.css("select.product_sort_container");
  }

  async sortByAtoZ() {
    const dropdown = await this.driver.findElement(this.sortDropdown);
    await dropdown.click();

    const optionAtoZ = await this.driver.findElement(
      By.css('option[value="az"]')
    );
    await optionAtoZ.click();

    const selectedValue = await dropdown.getAttribute("value");
    assert.strictEqual(selectedValue, "az", "Sorting A-Z gagal!");
  }
}

module.exports = SortPage;
