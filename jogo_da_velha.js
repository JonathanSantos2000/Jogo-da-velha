var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var nJogadas = 0;

mudarJogador("X");

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '-') {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }
    nJogadas++;
    mudarJogador(jogador);
    checkVencedor()
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkVencedor() {
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');
    console.log(nJogadas);

    /* linhas */
    if (checkSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checkSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if (checkSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    /* colunas */
    if (checkSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if (checkSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if (checkSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    /* diagonais */
    if (checkSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if (checkSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

    if (nJogadas == 9) {
        mudarVencedor();
        mudarCorQuadrado();
    }
}

function mudarVencedor(quadrado) {
    if (nJogadas == 9) {
        vencedor = "Velha";
    } else {
        vencedor = quadrado.innerHTML;
    }

    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    if (nJogadas == 9) {
        for (var i = 1; i <= 9; i++) {
            var quadrado = document.getElementById(i);
            quadrado.style.background = '#FF0000';
        }
    } else {
        quadrado1.style.background = '#0f0';
        quadrado2.style.background = '#0f0';
        quadrado3.style.background = '#0f0';
    }


}

function checkSequencia(quadrado1, quadrado2, quadrado3) {
    var eIquals = false;
    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML
        && quadrado1.innerHTML === quadrado3.innerHTML) {
        eIquals = true;

    }
    return eIquals;
}

function reiniciar() {
    nJogadas = 0;
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);

        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}