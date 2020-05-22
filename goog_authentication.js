const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36');
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    const navigationPromise = page.waitForNavigation()
    await page.goto('https://docs.google.com/', {
        "waitUntil": "networkidle0"
    });
    await navigationPromise
    await page.click('input[type=email]');
    await page.keyboard.sendCharacter('dummydummy330@gmail.com');
    await page.screenshot({
        path: 'example1.png'
    });

    await page.click('#next')

    await page.waitFor(2000);
    await page.screenshot({
        path: 'example2.png'
    });

    await page.click('input[type=password]');
    await page.keyboard.sendCharacter('dummy2020');
    await page.click('input[type=submit]');
    await page.waitFor(2000);
    // console.log(await page.content());
    await page.select('#countryList','US');
    await page.click('input[type=submit]');
    await page.screenshot({
        path: 'example3.png'
    });

    await browser.close();
})();
