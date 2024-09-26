// Retrieve provider details from localStorage
const providerName = localStorage.getItem('selectedProviderName');
const providerPrice = localStorage.getItem('selectedProviderPrice');

// Set the provider details in the checkout page
document.getElementById('provider-name').textContent = providerName;
document.getElementById('provider-price').textContent = `₹ ${providerPrice}`;

// Event listener for checkout button
document.getElementById('checkout-button').addEventListener('click', function () {
    // Add provider to cart in localStorage (to be displayed in the cart.html page)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: providerName, price: providerPrice });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Animation for adding to cart
    alert('Item added to cart successfully!');

    // Redirect to the cart page
    window.location.href = 'cart.html';
});
