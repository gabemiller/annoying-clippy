# Annoying Clippy Extension

A playful Chrome extension that brings back Clippy, the notorious animated assistant, to "help" you with your tasks. 
Perfect for nostalgia or to add a bit of chaos to your day.

---

## Features

- **Random Sarcasm**: Clippy offers helpful (or not-so-helpful) advice with a power of an AI.
- **Customizable Assets**: Easily swap out Clippy's sprite or update the message list.

---

## Pre-Requirements

Before starting, please make sure you have the following:

- An OpenAI token: this will be required for proper functioning of the application. You can request one from the [OpenAI website](https://openai.com/).
- After obtaining the token, it's necessary to set this token in the `clippy.js` file:

```javascript
 const API_KEY = '<OPEN_AI_API_KEY>'
```

---

## Installation

1. Clone or download the repository.
2. Navigate to `chrome://extensions` in your browser.
3. Enable **Developer Mode** in the top-right corner.
4. Click **Load Unpacked** and select the project folder.
5. Clippy is now ready to annoy you on any webpage!

---

## Usage

1. Click anywhere on a webpage (buttons, links).
2. Clippy displays a randomized message.
3. Refresh the page or click more to create funny moments.

---

## Key Files

### **`manifest.json`**
Configures the extension and declares permissions, assets, and content scripts.

### **`clippy.js`**
Handles the logic for creating and positioning Clippy instances, assigning animations, and displaying messages.

### **`clippy.css`**
Defines Clippy's styles, including animations and positioning.

### **Assets**
- **`clippy-sprite.png`**: The Clippy sprite sheet for animations.
- **Extension Icons**: Used for branding in the Chrome Extensions page.

---

## How It Works

1. **Event Listener**: A `click` event listener on the `document.body` triggers Clippy's talking.
2. **Randomized Messages**: Clippy's messages are AI powered.
4. **Sprites**: The `clippy-sprite.png` asset is dynamically loaded using `chrome.runtime.getURL()`.

