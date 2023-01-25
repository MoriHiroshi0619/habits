
//registrar em memoria
const form = document.querySelector('#form-habits');

//registrar em memoria o objeto NLWSetup
//da biblioteca do nlw disponibilizou
//está sendo importada atraves do link no HTML, que busca no git
const nlwSetup = new NLWSetup(form);

//registrar em memoria
const button = document.querySelector('header button');


        /*adiconar ouvidor de eventos = sempre que um evento x aconotecer, execute uma função
        sintaxe: addEventListener('evento', função) */
button.addEventListener('click', add);

form.addEventListener('change', save);

//adicona o data(atual) no nlwSetup -> que é um objeto
function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    //const today = '01/23'
                    //func verifica se a data já n existe
    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        alert('Dia já incluso ❌');
        return;
    }

    alert('Dia adicionado com sucesso ✅')
    //salva no objeto a data atual
    nlwSetup.addDay(today);
}

function save(){
    //converte a data atual (formato de objeto) em string
    //depois salva no local storage do browse com a chave 'habits'
    localStorage.setItem('habits', JSON.stringify(nlwSetup.data));
}

/*
JSON.stringify(objeto)) = transforma em string o objeto
JSON.parse(string) = transforma em objeto a string
*/


const data = JSON.parse(localStorage.getItem('habits')) || {}; 

nlwSetup.setData(data);
nlwSetup.load();

const days = document.querySelector('.days');

window.onload = function(){
    /*
    aqui farei uma incrivel gambiarra de um novato em desenvolvimento WEB ;)
    */
    var maxScroll = days.scrollWidth;
    days.scrollLeft = maxScroll;
}
/* formato
const data = {
    baska: [],
    agua:   [],
    comer:  [],
    codar: [],  
    jogar: []; etc
}

*/











