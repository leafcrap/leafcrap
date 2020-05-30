const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.leafly.com/strains');

  let texts = await page.evaluate(() => {
    let data = [];
    let elements = document.getElementsByClassName('mx-lg md:mx-xxl');
    for (var element of elements)
        data.push(element.textContent);
    return data;
  });

  console.log(texts);
  
  await browser.close();
})();
