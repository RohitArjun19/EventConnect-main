document.addEventListener('DOMContentLoaded', () => {
  // Get the provider details from local storage
  const providerName = localStorage.getItem('providerName');
  const providerPrice = localStorage.getItem('providerPrice');

  // Set the details in the page
  document.getElementById('provider-name').textContent = providerName ? providerName : 'Not Available';
  document.getElementById('provider-price').textContent = providerPrice ? `₹ ${providerPrice}` : 'Not Available';
});
