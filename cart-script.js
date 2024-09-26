// Get the cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;

// Display the cart items
cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
        <p><strong>Provider Name:</strong> ${item.name}</p>
        <p><strong>Price:</strong> ₹ ${item.price}</p>
    `;
    cartContainer.appendChild(itemElement);

    // Update the total price
    totalPrice += parseInt(item.price, 10);
});

// Update the total price in the DOM
totalPriceElement.textContent = totalPrice;

// Checkout button functionality
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cartItems.length > 0) {
        alert(`You have successfully checked out! Total amount: ₹ ${totalPrice}`);

        // Clear the cart after checkout
        localStorage.removeItem('cart');
        window.location.href = 'service.html'; // Redirect to services or a thank you page
    } else {
        alert('Your cart is empty.');
    }
});
