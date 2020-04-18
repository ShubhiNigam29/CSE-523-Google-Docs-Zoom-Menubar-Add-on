const puppeteer = require('puppeteer');

(async () => {
  	const browser = await puppeteer.launch({headless: false,});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
  const navigationPromise = page.waitForNavigation()
    await page.goto('https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fdocument%2F%3Fusp%3Dmkt_docs&followup=https%3A%2F%2Fdocs.google.com%2Fdocument%2F%3Fusp%3Dmkt_docs&ltmpl=docs&flowName=GlifWebSignIn&flowEntry=ServiceLogin',  {"waitUntil" : "networkidle0"});
   await navigationPromise  
  await page.click('input[type=email]');
    await page.keyboard.sendCharacter('shubhinigam29@gmail.com');
  await page.screenshot({path: 'example.png'});
      await page.click('#identifierNext')
 await page.screenshot({path: 'example.png'});
    //await page.evaluate(() => document.querySelector('#identifierNext').click());
  //await page.screenshot({path: 'example.png'});
    await page.waitFor(2000);

    await page.evaluate(() => document.querySelector('#password > div > div > div > input').click());
    await page.keyboard.sendCharacter('test');
    await page.evaluate(() => document.querySelector('#passwordNext').click());

    await page.screenshot({path: 'example.png'});

    await browser.close();
})();
