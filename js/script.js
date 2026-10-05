function addToCart(productName, price) {

    let cart = JSON.parse(localStorage.getItem("nexaCart")) || [];

    cart.push({
        name: productName,
        price: price
    });

    localStorage.setItem("nexaCart", JSON.stringify(cart));

    alert(productName + " added to cart!");
}
function displayCart() {

    let cart = JSON.parse(localStorage.getItem("nexaCart")) || [];

    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="text-align:center;">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "0";
        return;
    }

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <h3>${product.name}</h3>
                    <p>₹${product.price.toLocaleString("en-IN")}</p>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    cartTotal.textContent = total.toLocaleString("en-IN");
}


function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("nexaCart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("nexaCart", JSON.stringify(cart));

    displayCart();
}


function goToCheckout() {

    let cart = JSON.parse(localStorage.getItem("nexaCart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "checkout.html";
}


displayCart();
function displayCheckout() {

    let cart = JSON.parse(localStorage.getItem("nexaCart")) || [];

    let checkoutItems = document.getElementById("checkout-items");
    let checkoutTotal = document.getElementById("checkout-total");

    if (!checkoutItems) {
        return;
    }

    checkoutItems.innerHTML = "";

    let total = 0;

    cart.forEach(product => {

        total += product.price;

        checkoutItems.innerHTML += `
            <div class="checkout-item">

                <span>${product.name}</span>

                <strong>
                    ₹${product.price.toLocaleString("en-IN")}
                </strong>

            </div>
        `;
    });

    checkoutTotal.textContent =
        total.toLocaleString("en-IN");
}


function placeOrder(event) {

    event.preventDefault();

    let cart = JSON.parse(localStorage.getItem("nexaCart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        window.location.href = "products.html";

        return;
    }

    let name = document.getElementById("full-name").value;

    alert(
        "Order placed successfully! 🎉\n\n" +
        "Thank you, " + name + "!"
    );

    localStorage.removeItem("nexaCart");

    window.location.href = "index.html";
}


let checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", placeOrder);
}


displayCheckout();
