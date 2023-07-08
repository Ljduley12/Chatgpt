function sendMessage() {
  var userInput = document.getElementById('user-message').value;
  addMessage('user', userInput);
  document.getElementById('user-message').value = '';

  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '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'
    },
    body: JSON.stringify({
      prompt: 'Q: ' + userInput + '\nA:',
      max_tokens: 50
    })
  })
  .then(response => response.json())
  .then(data => {
    var response = data.choices[0].text.trim();
    addMessage('assistant', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function addMessage(role, content) {
  var chatWindow = document.getElementById('chat-window');
  var message = document.createElement('div');
  message.className = role;
  message.innerText = content;
  chatWindow.appendChild(message);
}
