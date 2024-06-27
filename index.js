// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Exemplo de envio de dados para um backend (substitua pela sua lógica de backend)
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      .then(response => response.json())
      .then(data => {
        responseDiv.textContent = 'Mensagem enviada com sucesso!';
        form.reset();
      })
      .catch(error => {
        responseDiv.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
        responseDiv.style.color = 'red';
      });
    });
  });  