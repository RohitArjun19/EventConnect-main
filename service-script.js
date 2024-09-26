document.addEventListener('DOMContentLoaded', () => {
  // Get all the price buttons
  const priceButtons = document.querySelectorAll('.price-btn');

  // Add event listener to each button
  priceButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Retrieve data from button
      const name = button.getAttribute('data-name');
      const price = button.getAttribute('data-price');

      // Store data in local storage
      localStorage.setItem('providerName', name);
      localStorage.setItem('providerPrice', price);

      // Redirect to checkout page
      window.location.href = 'checkout.html';
    });
  });
});
