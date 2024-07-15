document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('#animated-text');

    const messages = [
        '_Satere Labs_',
        'Tech services'
    ]; // Messages to be animated
    const gibberishChars = '!@#$%^&*()_+~{}|:"<>?`-=\\[];\',./';
    const animationDuration = 500; // 1 second
    const waitDuration = 3000; // 3 seconds
    let currentMessageIndex = 0;

    function randomGibberish(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += gibberishChars.charAt(Math.floor(Math.random() * gibberishChars.length));
        }
        return result;
    }

    function animateToGibberish() {
        let targetText = messages[currentMessageIndex];
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < targetText.length) {
                textElement.textContent = textElement.textContent.substring(0, currentIndex) + randomGibberish(1) + textElement.textContent.substring(currentIndex + 1);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Switch to the next message
                    revealText(); // Start revealing the next message
                }, waitDuration); // Wait before revealing the next message
            }
        }, animationDuration / targetText.length);
    }

    function revealText() {
        let targetText = messages[currentMessageIndex];
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < targetText.length) {
                textElement.textContent = targetText.substring(0, currentIndex + 1) + textElement.textContent.substring(currentIndex + 1);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(animateToGibberish, waitDuration); // Wait before animating to gibberish
            }
        }, animationDuration / targetText.length);
    }

    function animateToMessage() {
        let targetText = messages[currentMessageIndex];
        textElement.textContent = randomGibberish(targetText.length); // Start with gibberish
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < targetText.length) {
                textElement.textContent = textElement.textContent.substring(0, currentIndex) + randomGibberish(1) + textElement.textContent.substring(currentIndex + 1);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(revealText, waitDuration); // Wait before revealing the text
            }
        }, animationDuration / targetText.length);
    }

    animateToMessage(); // Start the animation
});
