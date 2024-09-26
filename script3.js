// script.js
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.dialog').style.display = 'block';
    });
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.dialog').style.display = 'none';
  });
  
  document.querySelector('.send-btn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    if (message) {
      document.getElementById('response').innerText = 'Message sent!';
      document.getElementById('message').value = '';
    }
  });
  