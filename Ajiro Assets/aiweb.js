const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const settingsButton = document.getElementById('settingsButton');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const modelSelect = document.getElementById('modelSelect');

let currentModel = 'gpt-4o-mini-free';

function addMessage(content, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = content;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    userInput.value = '';
    userInput.style.height = 'auto';

    try {
        const response = await callAI(currentModel, "You are a helpful assistant", message);
        addMessage(response.response, false);
    } catch (error) {
        console.error('Error calling AI:', error);
        addMessage("I'm sorry, but I encountered an error. Please try again later.", false);
    }
}

async function callAI(model, system, question) {
    // Simulating API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { response: "This is a simulated response from the AI. In a real app, you would make an API call here." };
}

function toggleSettings() {
    settingsPanel.classList.toggle('visible');
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

settingsButton.addEventListener('click', toggleSettings);
closeSettings.addEventListener('click', toggleSettings);

modelSelect.addEventListener('change', (e) => {
    currentModel = e.target.value;
    addMessage(`AI model changed to ${currentModel}`, false);
});

// Prevent scrolling when keyboard is open on mobile
document.body.addEventListener('focusin', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        document.body.scrollTop = 0;
    }
});

// Add a custom splash screen
window.addEventListener('load', () => {
    const splashScreen = document.createElement('div');
    splashScreen.style.position = 'fixed';
    splashScreen.style.top = '0';
    splashScreen.style.left = '0';
    splashScreen.style.width = '100%';
    splashScreen.style.height = '100%';
    splashScreen.style.backgroundColor = var(--primary-color);
    splashScreen.style.display = 'flex';
    splashScreen.style.justifyContent = 'center';
    splashScreen.style.alignItems = 'center';
    splashScreen.style.zIndex = '1000';
    splashScreen.style.transition = 'opacity 0.5s ease-out';

    const logo = document.createElement('h1');
    logo.textContent = 'AI Chat';
    logo.style.color = 'white';
    logo.style.fontSize = '2rem';

    splashScreen.appendChild(logo);
    document.body.appendChild(splashScreen);

    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.remove();
        }, 500);
    }, 1000);
});

// Initial message
addMessage("Hello! How can I assist you today?", false);
