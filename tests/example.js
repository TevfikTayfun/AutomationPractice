const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const should = require("chai").should();

//describe block
describe("This is a mocha test title / Add todo tests", function () {
  //it block
  it("Title / successfully adds a todo to application list", async function () {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https:lambdatest.github.io/sample-todo-app/");

    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert chai should
    todoText.should.equal("Learn Selenium");

    await driver.quit();
  });
});

/*

async function example(){

    
    //launching browser
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https:lambdatest.github.io/sample-todo-app/")
    

    //add a todo

    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    //assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value;
    })


    //assert using node assertion
    
    //assert.strictEqual(todoText, "Learn Selenium");

    //assert chai should
    todoText.should.equal("Learn Selenium");


    //close browser

    await driver.quit();

}

example()

*/

// describe is mocha style.
