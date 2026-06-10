// CULTIVE O VERDE - script.js

document.addEventListener("DOMContentLoaded", () => {

    // Mensagem de boas-vindas
    alert("🌱 Bem-vindo ao Cultive o Verde!");

    // Animação dos elementos ao rolar a página
    const elementos = document.querySelectorAll(".animar");

    function revelarElementos() {
        elementos.forEach((elemento) => {
            const posicao = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicao < alturaTela - 100) {
                elemento.classList.add("ativo");
            }
        });
    }

    window.addEventListener("scroll", revelarElementos);
    revelarElementos();

    // Botão voltar ao topo
    const btnTopo = document.createElement("button");
    btnTopo.innerHTML = "⬆";
    btnTopo.id = "btnTopo";
    document.body.appendChild(btnTopo);

    btnTopo.style.position = "fixed";
    btnTopo.style.bottom = "20px";
    btnTopo.style.right = "20px";
    btnTopo.style.padding = "12px 15px";
    btnTopo.style.border = "none";
    btnTopo.style.borderRadius = "50%";
    btnTopo.style.backgroundColor = "#2E7D32";
    btnTopo.style.color = "#fff";
    btnTopo.style.cursor = "pointer";
    btnTopo.style.display = "none";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Menu responsivo
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("ativo");
        });
    }
});
