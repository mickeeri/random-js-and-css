const target = document.querySelector('#root');
const addMessageButton = document.querySelector('.add-message');

const messages = [
  { headLine: 'hejsan', content: 'tjolahopp' },
  { headLine: 'hejsan igen', content: 'hoppla hoppla' },
  { headLine: 'en tredje gång', content: 'tjolahejsan' },
];

const newMessage = { headLine: 'nytt meddelande', content: 'tjohej' };

function selectElement() {
  this.classList.toggle('selected');
}

function createMessageElement(message) {
  // Create the parent div.
  var messageElement = document.createElement('div');
  messageElement.classList.add('message');

  // Headline
  var headLineElement = document.createElement('div');
  headLineElement.textContent = message.headLine;

  // Content
  var contentElement = document.createElement('p');
  contentElement.textContent = message.content;

  // Append
  messageElement.appendChild(headLineElement);
  messageElement.appendChild(contentElement);

  // Add event listener
  messageElement.addEventListener('click', selectElement);

  // Append to list of messages
  target.appendChild(messageElement);

  // Force the elment to re-compute the current css.
  window.getComputedStyle(messageElement).opacity;
  messageElement.classList.add('in');
}

function addMessage() {
  createMessageElement(newMessage);
}

function renderMessages() {
  target.innerHTML = '';
  messages.forEach(message => {
    createMessageElement(message);
  });

  addMessageButton.addEventListener('click', addMessage);
}

function init() {
  renderMessages();
}

window.onload = init();
