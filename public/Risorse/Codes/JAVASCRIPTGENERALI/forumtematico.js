// Oggetto che tiene i messaggi per topic
const messagesByTopic = {
  programmazione: [],
  musica: [],
  film: [],
  sport: [],
  cucina: []
};

function postMessage() {
  const topic = document.getElementById('topicSelect').value;
  const username = document.getElementById('username').value.trim();
  const message = document.getElementById('message').value.trim();

  if (username === '' || message === '') {
    alert('Compila tutti i campi!');
    return;
  }

  const newMessage = { user: username, text: message };
  messagesByTopic[topic].push(newMessage);

  document.getElementById('message').value = '';
  renderMessages();
}

function renderMessages() {
  const topic = document.getElementById('topicSelect').value;
  const messagesDiv = document.getElementById('messages');

  // Svuota messaggi
  messagesDiv.innerHTML = '';

  messagesByTopic[topic].forEach(msg => {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.innerHTML = `<strong>${msg.user}</strong>: ${msg.text}`;
    messagesDiv.appendChild(msgDiv);
  });

  // Scroll alla fine
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Cambio topic = cambia messaggi
document.getElementById('topicSelect').addEventListener('change', renderMessages);
