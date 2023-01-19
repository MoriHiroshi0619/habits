const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
    baska: ['02-01', '08-01'],
    agua:   ['01-01', '05-01', '07-01', '08-01'],
    comer:  ['01-01', '02-01', '04-01', '05-01'],
    codar: ['01-01', '02-01', '03-01', '04-01', '05-01', '05-01', '06-01'],  
    jogar: ['01-01', '02-01', '04-01', '07-01'],
    assistir: ['02-01', '06-01'],
    ler: ['05-01', '03-01'],
    namorar: ['01-01', '02-01', '03-01', '05-01', '06-01', '07-01', '08-01']
}

nlwSetup.setData(data)
nlwSetup.load()









