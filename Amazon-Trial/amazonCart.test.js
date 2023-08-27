// __tests__/amazonCart.test.js

const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// Chrome options
const options = new chrome.Options();
options.addArguments("--start-maximized"); // Start Chrome maximized

// Initialization
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

describe("Amazon Cart Automation", () => {
  beforeAll(async () => {
    await driver.get("https://www.amazon.com/");
  });

  /*afterAll(async () => {
    await driver.quit();
  }); */

  it("should add an item to the cart", async () => {
    //Item Search
    const searchBox = await driver.findElement(By.id("twotabsearchtextbox"));
    await searchBox.sendKeys("laptop", Key.RETURN);

    await driver.wait(until.elementLocated(By.css(".s-search-results")));

    //const firstResult = await driver.findElement(By.css(".s-result-item"));

    const desiredLaptopName =
      'HP Notebook Laptop, 15.6" HD Touchscreen, Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver'; // Replace with the actual laptop name
    const laptopLink = await driver.findElement(By.linkText(desiredLaptopName));
    await laptopLink.click();

    const addToCartButton = await driver.findElement(
      By.id("add-to-cart-button")
    );

    await addToCartButton.click();

    await driver.wait(until.elementLocated(By.id("nav-cart-count")));
    const cartCount = await driver.findElement(By.id("nav-cart-count"));
    const cartItemCount = await cartCount.getText();

    expect(cartItemCount).toBe("1"); //
  });
});
