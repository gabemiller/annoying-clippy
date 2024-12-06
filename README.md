# Annoying Clippy Extension

A playful Chrome extension that brings back Clippy, the notorious animated assistant, to "help" you with your tasks. 
Clicking anywhere on the page spawns a new Clippy instance with randomized animations and sarcastic comments. 
Perfect for nostalgia or to add a bit of chaos to your day.

---

## Features

- **Clippy Pop-Ups**: Spawn animated Clippy instances at your cursor position with quirky messages.
- **Random Sarcasm**: Clippy offers helpful (or not-so-helpful) advice from a collection of witty quotes.
- **Dynamic Animations**: Each Clippy appears with a randomly assigned animation.
- **Customizable Assets**: Easily swap out Clippy's sprite or update the message list.

---

## Installation

1. Clone or download the repository.
2. Navigate to `chrome://extensions` in your browser.
3. Enable **Developer Mode** in the top-right corner.
4. Click **Load Unpacked** and select the project folder.
5. Clippy is now ready to annoy you on any webpage!

---

## Usage

1. Click anywhere on a webpage to spawn Clippy at the clicked location.
2. Each Clippy displays a randomized message and animation.
3. Refresh the page or click more to create chaos.

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

1. **Event Listener**: A `click` event listener on the `document.body` triggers Clippy's creation.
2. **Randomized Messages**: Clippy's messages are selected from a predefined array of sarcastic quotes.
3. **Dynamic Animations**: Each Clippy is assigned one of 11 animation classes for variety.
4. **Sprites**: The `clippy-sprite.png` asset is dynamically loaded using `chrome.runtime.getURL()`.

