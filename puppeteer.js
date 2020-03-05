const puppeteer = require("puppeteer");
async function run() {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto("http://buscatextual.cnpq.br/buscatextual");
    await page.type("#textoBusca", "Talita Cypriano de Paula");
    await page.click("#buscarDemais");
    await page.click("#botaoBuscaFiltros");
    await page.waitForNavigation();
    await page.evaluate(() => {
        document.querySelector('.resultado li a').click();
    })
    await page.screenshot({path: 'img/getPopUp.png'})
    console.log('abriu o pop up')
    // clicar no botao de abrir o curriculo n deu nada
    // await page.click("#idbtnabrircurriculo");
    // await page.waitForNavigation();
    await page.screenshot({path: 'img/lattes.png'})
    
    // ai eu tentei pegar o id por esse elemento ('.m-isntituicoes li:nth-child(2) a').getAttribute('onclick')
    console.log('EVALUATE');
    let id = await page.evaluate(() => {
        document.querySelector('.m-instituicoes');
        // document.querySelector('.m-isntituicoes li:nth-child(2) a').getAttribute('onclick');
    })
    // BUT o id esta undefined e o elemento esta dando null e eu travei 
    console.log('after evaluate id: ', id)

    // await page.type("#passwordForm", "senha");
    // let cookies = await page.cookies();
    // page = await browser.newPage();
    // await page.setCookie(...cookies);
    // await page.goto("https://esaj.tjsp.jus.br/esaj/portal.do?servico=740000");
    // cookies = await page.cookies();
    // page = await browser.newPage();
    // await page.setCookie(...cookies);
    // await page.goto(
    //     "https://esaj.tjsp.jus.br/cpopg/search.do?conversationId=&dadosConsulta.localPesquisa.cdLocal=-1&cbPesquisa=NUMOAB&dadosConsulta.tipoNuProcesso=UNIFICADO&dadosConsulta.valorConsulta="+variavel+"&uuidCaptcha="
    // );
    // cookies = await page.cookies();
    // page = await browser.newPage();
    // await page.setCookie(...cookies);
    // await page.goto(
    //     "https://esaj.tjsp.jus.br/cpopg/show.do?processo.codigo=1H000AGDV0000&processo.foro=53&conversationId=&dadosConsulta.localPesquisa.cdLocal=-1&cbPesquisa=NUMOAB&dadosConsulta.tipoNuProcesso=UNIFICADO&dadosConsulta.valorConsulta=354220&uuidCaptcha=&paginaConsulta=1"
    // );
    // cookies = await page.cookies();
    // let xpathPag = "/html/body/div/table[4]/tbody/tr/td/table[2]";
    // let [el] = await page.$x(xpathPag);
    // let txt = await el.getProperty("innerText");
    // let rawTxt = await txt.jsonValue();
}
run();