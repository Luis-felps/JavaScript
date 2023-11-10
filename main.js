function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio).play('');

    if(elemento === null){
        alert('Elemento não encontrado');
    }
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert
    }
}

document.querySelectorAll('.tecla')
const listaDeTeclas = document.querySelectorAll('.tecla')

for (contador < listaDeTeclas.length; contador++){

    const instrumento = listaDeTeclas[contador].classList[1];

    const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio)
    };
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space'|| evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
    tecla.onkeyup =function(){
        tecla.classList.remove('ativa')
    }
}
listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick =
listaDeTeclas[3].onclick

//document.querySelector('.tecla_pom').onclick = tocaSomPom

 document.querySelector('.tecla_pom').onclick = tocaSomPom ;