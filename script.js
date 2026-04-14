let cart = [];

const buttons = document.querySelectorAll(".add-to-cart");
const cartBlock = document.getElementById("cart");
const totalBlock = document.getElementById("total");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({ name, price });

        renderCart();
    });
});

const renderCart = () => {
    cartBlock.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.name + " - " + item.price + " руб";
        cartBlock.appendChild(div);
    });

    calculateTotal();
};

const calculateTotal = () => {
    let total = 0;

    cart.forEach(item => total += item.price);

    totalBlock.textContent = "Итого: " + total;
};

document.getElementById("clear").addEventListener("click", () => {
    cart = [];
    renderCart();
});

document.getElementById("pay").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Корзина пуста");
    } else {
        alert("Оплата прошла успешно!");
        cart = [];
        renderCart();
    }
});
const filter = document.getElementById("filter");
const products = document.querySelectorAll(".product");

filter.addEventListener("change", () => {
    const value = filter.value;

    products.forEach(product => {
    if (value === "all" || product.dataset.category === value) {
        product.style.display = "inline-block";
    } else {
        product.style.display = "none";
    }
});
});