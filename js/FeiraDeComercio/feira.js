let moedas = 10;

function comprarItem(custo, imagemSrc) {
    if (moedas >= custo) {
        moedas -= custo;
        document.getElementById('moedas').innerText = moedas;
        alert('Gilberto - Muito obrigado! Tenha um otimo dia 😊​🤝​');
        adicionarItemAoInventario(imagemSrc);
    } else {
        alert('Moedas insuficientes!');
    }
}

function adicionarItemAoInventario(imagemSrc) {
    const inventario = document.getElementById('itensComprados');
    const img = document.createElement('img');
    img.src = imagemSrc;
    inventario.appendChild(img);
}
