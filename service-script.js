document.querySelectorAll('.price-btn').forEach(button => {
  button.addEventListener('click', function () {
      const providerName = this.getAttribute('data-name');
      const providerPrice = this.getAttribute('data-price');

      // Get the existing cart from localStorage or create a new one
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add the selected item to the cart
      cart.push({ name: providerName, price: providerPrice });

      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Show a confirmation or animation
      alert(`${providerName} - ₹ ${providerPrice} added to cart!`);
  });
});
