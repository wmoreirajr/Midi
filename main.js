function tocaSom(seletorElemento) {
    const elemento = document.querySelector(seletorElemento);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento ou seletor não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const elementos = `#som_${tecla.classList[1]}`;

    tecla.onclick = function () {
        tocaSom(elementos);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code == "Enter" || evento.code == "Space") {

            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}


/* meu codigo
function tocarSom(idElementoSon) {
    document.querySelector(idElementoSon).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    let classSecundaria = listaDeTeclas[contador].classList[1];
    listaDeTeclas[contador].onclick = function () {
        tocarSom('#som_' + classSecundaria);
    };
    contador++;
}

*/

