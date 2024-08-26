document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
});

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h2>${item.title}</h2>
                <p>${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="button cancel" onclick="removeItem(${index})">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
    });
}

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItems();
    updateCartBadge();
}

function continueShopping() {
    window.location.href = 'home.html'; // Adjust to your home page URL
}

function checkout() {
    window.location.href = 'checkout.html'; // Adjust to your checkout page URL
}

function updateCartBadge() {
    let cartCount = JSON.parse(localStorage.getItem('cartItems'))?.length || 0;
    document.getElementById('cartBadge').innerText = cartCount;
}
