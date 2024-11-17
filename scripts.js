// scripts.js

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impedisce l'invio normale del form

  const formData = new FormData(this);

  // Invia i dati al server simulando l'azione di invio per una pagina statica
  fetch('https://example.com/submit', {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nella risposta della rete');
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      // Nascondi il form
      document.getElementById('formCard').style.display = 'none';

      // Mostra il messaggio di ringraziamento
      const thankYouMessage = document.createElement('div');
      thankYouMessage.classList.add('thank-you');
      thankYouMessage.innerHTML = '<h2>Grazie per aver compilato il diario!</h2><p>La tua risposta è stata registrata, a domani.</p>';
      document.querySelector('.container').appendChild(thankYouMessage);
    } else {
      alert('Si è verificato un errore nell\'invio del form.');
    }
  })
  .catch(error => {
    console.error('Errore:', error);
    alert('Si è verificato un errore durante la comunicazione con il server.');
  });
});

