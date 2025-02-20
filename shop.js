document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: "Сережка для носа", category: "piercing", price: 170, img: "nose.jpg" },
        { id: 2, name: "Сережка для вуха", category: "piercing", price: 260, img: "Earrings-rings.jpg" },
        { id: 3, name: "Антисептик для пірсингу", category: "care", price: 220, img: "Solution for healing after piercing.jpg" },
        { id: 4, name: "Крем для загоєння тату", category: "care", price: 450, img: "Aloe Tattoo.jpg" },
        { id: 5, name: "Клейонка для загоєння тату 1м", category: "care", price: 190, img: "Film for healing.jpg" },
        { id: 6, name: "Крем заживляючий", category: "care", price: 600, img: "Tattoo Butter.jpg" },
        { id: 7, name: "Гель заживляючий ", category: "care", price: 450, img: "spray.jpg" },
        { id: 8, name: "Серветка з хлоргекседином", category: "care", price: 40, img: "Napkins.jpg" },
        { id: 9, name: "Паста для загоєння", category: "care", price: 565, img: "butter.jpg" },
        { id: 10, name: "Сережка для губи", category: "piercing", price: 90, img: "brova.jpg" },
        { id: 11, name: "Сережка для вуха індастріал", category: "piercing", price: 250, img: "indastrial.jpg" },
        { id: 12, name: "Сережка для брови", category: "piercing", price: 175, img: "banana.jpg" },
        { id: 13, name: "Антисептик", category: "piercing", price: 79, img: "Gel for piercing healing.jpg" },
        { id: 14, name: "Заживляюча мазь", category: "piercing", price: 79, img: "mazz.jpg" },
        { id: 15, name: "Набір розчинів для догляду за пірсингом", category: "piercing", price: 240, img: "set.jpg" }
    ];
    const productContainer = document.getElementById('products');
    const cart = [];
    function displayProducts(category) {
        productContainer.innerHTML = "";
        products.filter(p => category === "all" || p.category === category)
            .forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price} грн</p>
                    <button onclick="addToCart(${product.id})">Додати в кошик</button>
                `;
                productContainer.appendChild(productCard);
            });
    }
    window.addToCart = function (id) {
        const item = products.find(p => p.id === id);
        cart.push(item);
        alert(`${item.name} додано в кошик!`);
    };
    function openCart() {
        const cartModal = document.getElementById('cart-modal');
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = "";
        cart.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.innerHTML = `${item.name} - ${item.price} грн <button onclick="removeFromCart(${index})">Видалити</button>`;
            cartItemsContainer.appendChild(itemEl);
        });
        cartModal.style.display = "block";
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        openCart();
    };
    document.getElementById('cart-btn').addEventListener('click', openCart);
    document.getElementById('clear-cart').addEventListener('click', function () {
        cart.length = 0;
        openCart();
    });

    document.getElementById('checkout-btn').addEventListener('click', function () {
        document.getElementById('checkout-modal').style.display = "block";
    });
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.modal').forEach(m => m.style.display = "none");
        });
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            displayProducts(btn.dataset.category);
        });
    });
    document.getElementById('checkout-form').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('checkout-modal').style.display = "none";
        document.getElementById('success-modal').style.display = "block";
        cart.length = 0; 
    });
    document.getElementById('close-success').addEventListener('click', function () {
        document.getElementById('success-modal').style.display = "none";
    });

    displayProducts('all');
});
