function copiarCodigoPix() {
    var codigoPix = "00020126360014BR.GOV.BCB.PIX0114554107470001005204000053039865802BR592555.410.747 LILIAN ALVES P6009SAO PAULO62140510PttIGkLPRH63048B6B";
    navigator.clipboard.writeText(codigoPix)
    .then(() => {
        var botao = document.getElementById("botaoCopiar");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "Copiar QR Code  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}

function copiarChavePix() {
    var ChavePix = "55.410.747/0001-00";
    navigator.clipboard.writeText(ChavePix)
    .then(() => {
        var botao = document.getElementById("CopiarPix");
        var icone = botao.querySelector("i");
        botao.innerHTML = "Copiado  <i class='fas fa-check'></i>";
        setTimeout(function() {
            botao.innerHTML = "55.410.747/0001-00  <i class='fas fa-copy'></i>";
        }, 1000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}
