let cart = [];
let total = 0;

function toggleCart(){
    document
    .getElementById("cart-sidebar")
    .classList.toggle("active");
}

function addToCart(name, price, image){
    cart.push({name, price, image});
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
        <img src="${item.image}" class="cart-image">
        <div>
        
        <p>${item.name}</p>
        <p>₹${item.price}</p>
        <button onclick="removeFromCart(${index})">
            Remove
        
            </button>
            
        </div>

</div>
`;

    });

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("cart-total").innerText = total;
}

function checkoutWhatsApp(){

    let message = "Hello CASEAIRE! I want to order:\n\n";

    cart.forEach(item=>{
        message += `${item.name} - ₹${item.price}\n`;
    });

    message += `\nTotal: ₹${total}`;

    window.open(
        `https://wa.me/919272396326?text=${encodeURIComponent(message)}`
    );
}
