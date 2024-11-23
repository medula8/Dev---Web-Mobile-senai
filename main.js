//const nomeVariavel: Constante não podemos mudar, por exemplo, não alterar nenhum CPF registrado.
//let nomeVariavel 
//                  } utilizado para criar variável, let é mais //atual
//var nomeVariavel 

// operadores lógicos em J.S. &&: (and)/ !!: (or)/ !: (not)

//criando variáveis
//Criamos uma variável que recebe a informação/ elemento do documento Html
const botaoJs = document.getElementById('botaoHtml');
let lampada = document.getElementById('lampada');
let statusTexto = document.getElementById('status');

//Criando uma função (bloco de código com função específica)

function alternarLampada(){
    if (botaoJs.textContent == 'Ligar') {lampada.src ='imgLamp/ligado.png'; 
        botaoJs.textContent = 'Desligar';
        statusTexto.textContent = 'Aceso';
        //atribui um novo texto no elemento statusTexto que colocamos como id='status em html' //
        statusTexto.style.color = 'Orange';
        statusTexto.style.fontSize = '30px';
    
        
    } else { lampada.src ='imgLamp/apagado.png';
    botaoJs.textContent = 'Ligar';
    statusTexto.textContent = 'Apagado';
    statusTexto.style.color = 'rgb(126,125,125)';
    statusTexto.style.fontSize = '25px';
    }    
    }
    botaoJs.addEventListener('click', alternarLampada);

    //Adicionar um evento ao botão, toda vez que o usuário dar um click//
