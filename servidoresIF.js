const puppeteer = require('puppeteer') 

let trial = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://bra.ifsp.edu.br/servidores')

    const result = await page.evaluate(() => {
        const servidores = [];
        let lattes, nome, email;
        document.querySelectorAll('div > section#content-section > div > div.pagina-editoria > ul > li')
            .forEach(servidor => {
                if(servidor.children[0]){
                    nome = servidor.children[0].textContent;
                    email = servidor.children[1] && servidor.children[1].children[0] && servidor.children[1].children[0].textContent

                    if(servidor.children[0].getAttribute('href')) {
                        lattes = servidor.children[0].getAttribute('href').split('/'); 
                    } 
                    if(lattes[2] && lattes[2].indexOf('lattes.cnpq') !== -1) {
                        lattes = lattes[(lattes.length - 1)]
                        servidores.push({lattes, nome, email})
                    }

                }
            }
        )

        return servidores;
    })

    browser.close();
    return result;
}

trial().then(value => {
    console.log(value)
})

