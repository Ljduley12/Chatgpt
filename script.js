function sendMessage() {
  var userInput = document.getElementById('user-message').value;
  addMessage('user', userInput);
  document.getElementById('user-message').value = '';

  // Make an API request to OpenAI to get the model's response
  // Update the chat window with the response using addMessage('assistant', response);
}

function addMessage(role, content) {
  var chatWindow = document.getElementById('chat-window');
  var message = document.createElement('div');
  message.className = role;
  message.innerText = content;
  chatWindow.appendChild(message);
}

function toggleBackground() {
  var body = document.body;
  body.classList.toggle('dark-mode');
}

// Example to show chat history
var chatHistory = [
  'Hello!',
  'How can I assist you?',
  'Sure, I can help with that.',
  'Is there anything else I can assist you with?'
];

function showChatHistory() {
  var chatHistorySection = document.getElementById('chat-history');
  chatHistorySection.innerHTML = '';
  chatHistory.forEach(function(chat) {
    var chatMessage = document.createElement('div');
    chatMessage.innerText = chat;
    chatHistorySection.appendChild(chatMessage);
  });
}

showChatHistory();
