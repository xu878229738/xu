const puppeteer = require('puppeteer');
const fs = require('fs');
// 模仿点击事件傀儡师 puppeteer 代码
(async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    
    const page = await browser.newPage();
    
    await page.goto('https://juejin.im');

    await page.waitFor(1000);

    await page.evaluate(async () => {
        window.scrollTo(0,document.querySelector('.entry-list').scrollHeight);
    });
    await page.waitFor(500);
    await page.evaluate(async () => {
        window.scrollTo(0,document.querySelector('.entry-list').scrollHeight);
    });
    await page.waitFor(500);
    const res = await page.evaluate(async () => {
        window.scrollTo(0,document.querySelector('.entry-list').scrollHeight)
        window.scrollTo(0,document.querySelector('.entry-list').scrollHeight)
        return [].map.apply(document.querySelectorAll('.info-row.title-row .title'),[v => ({
            title:v.innerText,
            link:v.href,
        })])
    });
    fs.writeFileSync('juejin.txt',JSON.stringify(res));
    browser.close();
})()