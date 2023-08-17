var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {
    altura = innerHeight
    largura = innerWidth

}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    //remover mosquitin anterior, caso ele exista

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }

    if (vidas > 3) {
       location.href="fim_de_jogo.html"
    } else {
        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //        condição ? expressão1 : expressão2

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar o elemento mosquitin

    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"

    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio() //mosquitin1, 2 ou 3 e lados A e B

    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"

    mosquito.style.position = "absolute"

    mosquito.id = "mosquito"

    mosquito.onclick = function(){this.remove()}

    document.body.appendChild(mosquito)

}



setInterval(function () {
    posicaoRandomica()
}, 2000)


function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {

        case 0:

            return 'mosquito1'

        case 1:

            return 'mosquito2'

        case 2:

            return 'mosquito3'

    }
}

function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}
