// Seleciona os elementos usados pelo menu responsivo.
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// O botao abre e fecha o menu em telas menores.
if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("open");

        // aria-expanded informa se o menu esta aberto.
        const isOpen = menu.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
    });
}

// Fecha o menu ao escolher uma pagina no celular.
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (menu) {
            menu.classList.remove("open");
        }

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
});

// Faz a pagina voltar ao inicio com uma animacao suave.
const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
    backToTopButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
