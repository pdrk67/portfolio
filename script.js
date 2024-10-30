document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('botaohover');
    const elementsToDisable = [
        document.querySelector('header'),
        document.querySelector('.caixa'),
        document.querySelector('.caixaesquerda'),
        document.querySelector('.caixadireita'),
        document.querySelector('footer')
    ];
    let hoversDisabled = false;

    button.addEventListener('click', () => {
        hoversDisabled = !hoversDisabled;

        elementsToDisable.forEach(element => {
            if (hoversDisabled) {
                element.classList.add('desativaroshovers');
            } else {
                element.classList.remove('desativaroshovers');
            }
        });

        button.textContent = hoversDisabled ? "Ativar Hovers" : "Desativar Hovers";
    });
});