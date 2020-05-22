// Google Cloud Function
const puppeteer = require('puppeteer');
let page ;

async function GetBrowserPage ()  { 
  
  const browser  =  await  puppeteer.launch ({args:['--no-sandbox']}); 
  return browser.newPage(); 
}

exports.getDOM  =  async (req, res) => {

  if(!page) { 
    page  =  await  GetBrowserPage (); 
  }

  await page.goto('https://docs.google.com/document/d/1VFaU79lhqmpE4F_q-tZa3P3Qtj2FY_YigA2eywTeAdY/edit');

  const result  =  await page.content();
  //console.log(result);
  res.set ('Content-Type','text/html'); 
  res.send(result); 
};
