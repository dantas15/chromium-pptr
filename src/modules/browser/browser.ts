import puppeteer from 'puppeteer';
import type { Browser } from 'puppeteer';

let browser: Browser | undefined;

async function createBrowser() {
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  return browser;
}

async function forceResetBrowser() {
  if (browser) {
    await browser.close();
  }

  return await createBrowser();
}

export { forceResetBrowser };
