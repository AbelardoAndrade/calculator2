
const calcular = document.getElementById('calcular');
const sobre = document.getElementById("sobre");
const breve = document.getElementById("breve");


function about() {
    resultado.textContent = 'Este desafio foi criado através de alguns estudos baseados em JavaScript puro (Vanilla JS) e foi utilizado para aprendizado e treinamento da linguagem JavaScript. Visite meu GitHub ou o meu Portifólio para ver mais trabalhos meus! Obrigado por visitar esta página, seu apoio é muito importante!'
}



function comming() {
    resultado.textContent ='Em breve este link estará disponível!'
    }
 



function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
         
        const valorImc = (peso / (altura * altura)).toFixed(2);

let classificacao = '';

if (valorImc < 18.5){
    classificacao = 'Abaixo do peso.';
}else if (valorImc >= 18.5 && valorImc <25) {
    classificacao = 'Com o peso ideal.';
}else if (valorImc >= 25 && valorImc <30) {
    classificacao = 'Levemente acima do peso.';
}else if (valorImc >=  30 && valorImc <35) {
    classificacao = 'Com obesidade grau 1, é bom ter atenção.';
}else if (valorImc <40) {
    classificacao = 'Com obesidade grau 2, é bom ter cuidado.';
}else  {
    classificacao = 'Com obesidade grau 3, isso é potencialmente perigoso.';
}



        resultado.textContent =  `Seu nome: ${nome} | O seu IMC é: ${valorImc} | E você está: ${classificacao}`
       

    }else {
        resultado.textContent = 'Por favor! Preencha todos os campos!';
    }

}






calcular.addEventListener('click', imc);
sobre.addEventListener("click", about);
breve.addEventListener('click', comming);
