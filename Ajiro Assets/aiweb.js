:root {
    --primary-color: #10a37f;
    --background-color: #f0f0f0;
    --chat-background: #ffffff;
    --user-message-bg: #e1f5fe;
    --ai-message-bg: #f0f4c3;
    --text-color: #333333;
    --input-bg: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    height: 100vh;
    overflow: hidden;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

header {
    background-color: var(--primary-color);
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 1.2rem;
}

main {
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
    background-color: var(--chat-background);
}

.message {
    max-width: 80%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 0.9rem;
    line-height: 1.4;
}

.user-message {
    background-color: var(--user-message-bg);
    align-self: flex-end;
    margin-left: auto;
}

.ai-message {
    background-color: var(--ai-message-bg);
    align-self: flex-start;
}

footer {
    background-color: var(--background-color);
    padding: 10px;
    border-top: 1px solid #ddd;
}

#inputArea {
    display: flex;
    align-items: center;
}

#userInput {
    flex-grow: 1;
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 0.9rem;
    background-color: var(--input-bg);
    resize: none;
    max-height: 100px;
    overflow-y: auto;
}

.icon-button {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: var(--primary-color);
    cursor: pointer;
    padding: 5px;
}

#settingsPanel {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    max-width: 300px;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0,0,0,0.1);
    padding: 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
}

#settingsPanel.visible {
    transform: translateX(0);
}

.hidden {
    display: none;
}

#modelSelect {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
}

#closeSettings {
    margin-top: 20px;
    padding: 5px 10px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

@media (max-width: 600px) {
    .message {
        max-width: 90%;
    }
}
