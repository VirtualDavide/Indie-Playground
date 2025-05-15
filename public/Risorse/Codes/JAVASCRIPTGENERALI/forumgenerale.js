function postMessage() {
  const usernameInput = document.getElementById('username');
  const messageInput = document.getElementById('message');
  const messagesDiv = document.getElementById('messages');

  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (username === '' || message === '') {
    alert('Compila tutti i campi!');
    return;
  }

  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${username}</strong>: ${message}`;

  messagesDiv.appendChild(messageElement);

  // Scroll in basso
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Svuota i campi
  messageInput.value = '';
}
