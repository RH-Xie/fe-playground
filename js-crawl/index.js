const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36'
  });
  const page = await context.newPage();
  await page.goto('https://wxhysx.wxlxjy.com/xygg');
  const html = await page.content();
  console.log(html);
  await browser.close();
})();
