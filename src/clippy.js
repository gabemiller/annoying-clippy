const clippyCover = document.createElement('div');
clippyCover.className = "clippy-cover";

document.body.appendChild(clippyCover);

const annoyingClippyTexts = [
    "It looks like you're writing a resignation letter. Need help making it sound dramatic?",
    "Did you mean to spell 'definitely' as 'defiantly'? Because that's bold.",
    "I noticed you've been staring at the screen. Should I call someone for help?",
    "It seems you're trying to break the internet. Need assistance?",
    "Remember, saving your work prevents existential crises!",
    "Hey! Do you need advice on whether pineapple belongs on pizza?",
    "It looks like you're typing something secret. Should I encrypt it?",
    "Your grammar is so creative! Want me to ignore the rules too?",
    "I noticed you haven't saved your work in the last 3 seconds. Risk-taker, aren't you?",
    "That’s an interesting document title. Want me to add some flair?",
    "Oh no! Did you mean to close that tab? Should I… bring it back?",
    "It seems like you're procrastinating. Want me to generate a distraction-free mode?",
    "Oops, you missed a semicolon. Need me to make your code work anyway?",
    "Fun fact: Did you know the universe is expanding faster than you’re typing?",
    "Hey there! Did you know I get smarter the longer you ignore me?",
    "Typing with caps lock on? Feeling a little shouty today?",
    "That’s a bold choice of font. Shall I recommend something Comic Sans-y?",
    "It looks like you’re typing your memoir. Shall I add some spicy anecdotes?",
    "Don’t worry, you’re doing great! Unless you’re not. Want feedback?",
    "It seems you're thinking. I can think for you. Shall I?",
    "Wow, such efficiency! Shall I slow things down for you?",
    "Do you ever wonder why I'm here? Because I sure don't.",
    "Hmm, using a mouse today? Ever heard of keyboard shortcuts?",
    "You look like you need coffee. Should I order you some?",
    "Oops! Did you mean to delete your whole life’s work?"
];

function getRandomClippyText() {
    return annoyingClippyTexts[Math.floor(Math.random() * annoyingClippyTexts.length)];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 11) + 1;
}

function createOneClippy(top, left) {
    const clippyContainer = document.createElement("div")
    clippyContainer.className = "clippy-container"
    clippyContainer.style.top = top + 'px';
    clippyContainer.style.left = left + 'px';

    const clippyBubble = document.createElement("div")
    clippyBubble.className = "clippy-bubble"

    clippyContainer.appendChild(clippyBubble)
    clippyBubble.textContent = getRandomClippyText()

    const clippy = document.createElement("div")
    clippy.className = "clippy clippy--animated-" + getRandomNumber()
    clippy.style.backgroundImage = 'url("'+ chrome.runtime.getURL("src/assets/clippy-sprite.png") +'")'


    clippyContainer.appendChild(clippy)

    return clippyContainer
}


document.body.addEventListener('click', function (e) {
    this.appendChild(createOneClippy(e.clientY, e.clientX))
});
