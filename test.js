const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function firstScript() {
    try {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.google.com');
        
        const forward = await driver.findElement(By.id('L2AGLb'))
        await forward.sendKeys(key.ENTER)
    } catch (error) {
        console.log(error)
    }
})();