import puppeteer from 'puppeteer';
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    await page.goto('https://nexusoffical.github.io/Genesis-New-Dawn/index.html');
    await new Promise(r => setTimeout(r, 3000));
    await browser.close();
  } catch (e) {
    console.log(e);
  }
})();
