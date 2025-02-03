document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Evita erro de página não encontrada
            alert("Produto adicionado ao carrinho com sucesso!");
        });
    });
});