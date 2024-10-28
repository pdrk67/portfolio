function createBox(buttonNumber) {
    const container = document.getElementById('conteudoE');

    const newBox = document.createElement('div');
    newBox.classList.add('box');

    if (buttonNumber === 1) {
        newBox.innerHTML = `<p> mande ajuda </p>`
    } else if (buttonNumber === 2) {
        newBox.innerHTML = `<p> mande ajuda 2 </p>`
    }

    container.appendChild(newBox);

    setTimeout(() => {
        newBox.classList.add('show');
    }, 10);

    setTimeout(() => {
        newBox.classList.add('hide'); // Adiciona a classe 'hide' para desaparecer
        // Remove a caixa do DOM após a transição de desaparecimento (0.5s)
        setTimeout(() => {
            newBox.remove();
        }, 500); // Espera o tempo da animação de desaparecimento (0.5s)
    }, 5000); // Espera 5 segundos antes de começar a desaparecer
}
