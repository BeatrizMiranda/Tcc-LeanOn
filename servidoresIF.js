const puppeteer = require('puppeteer') 

let trial = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://bra.ifsp.edu.br/servidores')

    const result = await page.evaluate(() => {
        const servidores = [];
        document.querySelectorAll('div > section > div > div > ul > li > a')
            .forEach(servidor => servidores.push(servidor.getAttribute('href')))

        return servidores;
    })

    browser.close();
    return result;
}

trial().then(value => {
    console.log(value)
})

