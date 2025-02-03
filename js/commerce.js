const products = [
    { id: 1, name: "Ração para Cães", category: "Alimentação", price: "R$ 59,90", image: "assets/produtos/racao.webp" },
    { id: 2, name: "Brinquedo para Gatos", category: "Brinquedo", price: "R$ 25,00", image: "assets/produtos/BrinquedoparaGatos.webp" },
    { id: 3, name: "Caminha para Cachorros", category: "Móveis", price: "R$ 120,00", image: "assets/produtos/cama-pet-cachorro.webp" },
    { id: 4, name: "Coleira Ajustável", category: "Acessórios", price: "R$ 35,00", image: "assets/produtos/coleira_ajustavel.jpg" },
    { id: 5, name: "Petisco Natural", category: "Alimentação", price: "R$ 19,90", image: "assets/produtos/petisco.jpg" },
    { id: 6, name: "Arranhador para Gatos", category: "Móveis", price: "R$ 85,00", image: "assets/produtos/arranhador_para_gatos.webp" },
    { id: 7, name: "Bebedouro Automático", category: "Acessórios", price: "R$ 99,00", image: "assets/produtos/bebedouro.webp" },
    { id: 8, name: "Comedouro Duplo", category: "Acessórios", price: "R$ 49,00", image: "assets/produtos/comedouro-duplo.webp" },
    { id: 9, name: "Casinha de Madeira", category: "Móveis", price: "R$ 230,00", image: "assets/produtos/casinha.webp" },
    { id: 10, name: "Osso Mastigável", category: "Brinquedo", price: "R$ 15,00", image: "assets/produtos/Osso-Mastigavel.webp" },
    { id: 11, name: "Tapete Higiênico", category: "Acessórios", price: "R$ 75,00", image: "assets/produtos/tapete.jpeg" },
    { id: 12, name: "Areia para Gatos", category: "Alimentação", price: "R$ 40,00", image: "assets/produtos/areia.jpeg" },
    { id: 13, name: "Bolinha Interativa", category: "Brinquedo", price: "R$ 30,00", image: "assets/produtos/bolinha.webp" },
    { id: 14, name: "Kit Higiene Dental", category: "Acessórios", price: "R$ 25,00", image: "assets/produtos/higiene_dental.jpg" },
    { id: 15, name: "Corda para Mordida", category: "Brinquedo", price: "R$ 22,00", image: "assets/produtos/corda.jpg" },
    { id: 16, name: "Escova para Pelos", category: "Acessórios", price: "R$ 28,00", image: "assets/produtos/escova.jpg" },
    { id: 17, name: "Shampoo para Pets", category: "Acessórios", price: "R$ 35,00", image: "assets/produtos/shampoo.webp" },
    { id: 18, name: "Coleira com GPS", category: "Acessórios", price: "R$ 250,00", image: "assets/produtos/coleira-GPS.webp" },
    { id: 19, name: "Cobertor para Pets", category: "Móveis", price: "R$ 80,00", image: "assets/produtos/cobertor.webp" },
    { id: 20, name: "Gaiola para Pássaros", category: "Móveis", price: "R$ 150,00", image: "assets/produtos/gaiola.webp" },
    { id: 21, name: "Ração Premium para Gatos", category: "Alimentação", price: "R$ 75,00", image: "assets/produtos/racao_gatos.webp" },
    { id: 22, name: "Luva Tira Pelos", category: "Acessórios", price: "R$ 20,00", image: "assets/produtos/luva.webp" },
    { id: 23, name: "Piscina para Cachorros", category: "Acessórios", price: "R$ 180,00", image: "assets/produtos/piscina.webp" },
    { id: 24, name: "Bebedouro Portátil", category: "Acessórios", price: "R$ 60,00", image: "assets/produtos/bebedouro_portatil.png" },
    { id: 25, name: "Capa de Chuva para Pets", category: "Acessórios", price: "R$ 55,00", image: "assets/produtos/capa.webp" },
    { id: 26, name: "Kit de Ração e Petisco", category: "Alimentação", price: "R$ 99,00", image: "assets/produtos/racao_petisco.jpg" },
    { id: 27, name: "Cama Suspensa para Gatos", category: "Móveis", price: "R$ 130,00", image: "assets/produtos/cama-suspensa.webp" }
];

const productGrid = document.querySelector(".product-grid");
const loadMoreBtn = document.createElement("button");
const categoryButtons = document.querySelectorAll(".category-btn");

let productsPerPage = 4;
let currentPage = 1;
let filteredProducts = products;

// Função para carregar produtos
function loadProducts() {
    productGrid.innerHTML = "";
    const start = 0;
    const end = currentPage * productsPerPage;
    const displayedProducts = filteredProducts.slice(start, end);

    displayedProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("card-post");
        productCard.setAttribute("data-aos", "flip-left");
        productCard.setAttribute("data-aos-delay", "200");

        productCard.innerHTML = `
            <span class="tag">${product.category}</span>
            <div class="image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="text">
                <h6>${product.name}</h6>
                <p>Produto de qualidade para seu pet!</p>
                <p class="price">${product.price}</p>
                <a href="#" class="btn add-to-cart">Adicionar ao carrinho!</a>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Mostrar ou ocultar botão "Carregar Mais"
    if (displayedProducts.length >= filteredProducts.length) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "block";
    }
}

// Criar botão "Carregar Mais"
loadMoreBtn.textContent = "Carregar Mais";
loadMoreBtn.classList.add("load-more-btn");
loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    loadProducts();
});

// Adicionar o botão ao container de produtos
const productContainer = document.getElementById("product-container");
productContainer.appendChild(loadMoreBtn);

// Filtro de categorias
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const selectedCategory = button.getAttribute("onclick").match(/'([^']+)'/)[1];
        filteredProducts = selectedCategory === "all" ? products : products.filter(p => p.category === selectedCategory);

        currentPage = 1;
        loadProducts();
    });
});

// Adicionar funcionalidade de alerta no botão "Adicionar ao Carrinho"
document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("add-to-cart")) {
        e.preventDefault();
        const productName = e.target.closest(".card-post").querySelector("h6").textContent;
        alert(`Produto "${productName}" adicionado ao carrinho!`);
    }
});

// Carregar produtos iniciais
loadProducts();
