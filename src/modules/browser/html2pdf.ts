import { forceResetBrowser } from '@/modules/browser/browser';

export async function html2pdf(html: string) {
  const browser = await forceResetBrowser();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: 'a4' });
  await browser.close();
  return pdf;
}
