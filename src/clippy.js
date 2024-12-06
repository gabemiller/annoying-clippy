const API_KEY = '<OPEN_AI_API_KEY>'
const API_URL = 'https://api.openai.com/v1/chat/completions'

async function callOpenAI(context, element, content) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are an annoying and not helpful assistant.' },
                    { role: 'user', content: `Here is a part content of the website as conext: ${context}. Based on the context and user interaction, give some annoying but funny short response. User clicked on this html element ${element} with content ${content}` }
                ],
                max_tokens: 150,
            }),
        });

        return response.json();
    } catch (error) {
        console.error('Error calling OpenAI API:', error.message);
    }
}

function getResponse(apiResponse) {
    return apiResponse.choices[0].message.content ?? 'Oh, come on! You can figure it out yourself.'
}

function createClippy() {
    const clippyContainer = document.createElement("div")
    clippyContainer.className = "clippy-container"

    const clippyBubble = document.createElement("div")
    clippyBubble.className = "clippy-bubble"

    clippyContainer.appendChild(clippyBubble)
    clippyBubble.textContent = "Hello, It's Clippy! Do you remember me?"

    const clippy = document.createElement("div")
    clippy.className = "clippy"
    clippy.style.backgroundImage = 'url("' + chrome.runtime.getURL("src/assets/clippy-sprite.png") + '")'


    clippyContainer.appendChild(clippy)

    return {
        clippyContainer,
        clippyBubble,
        clippy
    }
}

const {
    clippyContainer,
    clippyBubble,
    clippy
} = createClippy()

document.body.appendChild(clippyContainer)

document.body.addEventListener('click', async function (e) {
    const target = e.target;
    if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        const context = document.querySelector('body').innerText.trim().replace(/[\r\n]+/g, ' ').substring(0,500)
        clippy.classList.add('clippy--animated-2')
        clippyBubble.classList.add('hidden')
        clippyBubble.innerText = getResponse(await callOpenAI(context, target, target.innerText))
        clippy.classList.remove('clippy--animated-2')
        clippyBubble.classList.remove('hidden')
    } else {
        console.log('Other element clicked:', target);
    }
});
