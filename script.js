document.addEventListener('DOMContentLoaded', function () {
    let consoleOutput = document.getElementById('console-output');
    let consoleMessages = [
        ">> Establishing secure connection...",
        ">> Accessing encrypted files...",
        ">> Running silent protocol...",
        ">> WARNING: Unauthorized access detected!",
        ">> Encryption level: MAXIMUM",
        ">> Connection secured. Awaiting further input..."
    ];
    let index = 0;

    function updateConsole() {
        if (index < consoleMessages.length) {
            let p = document.createElement('p');
            p.textContent = consoleMessages[index];
            consoleOutput.appendChild(p);
            document.getElementById("terminal-beep").play();
            index++;
            setTimeout(updateConsole, 2000);
        }
    }
    
    updateConsole();
});

function showMessage() {
    let messages = [
        "You have been watched.",
        "We know who you are.",
        "This is not a game.",
        "You cannot escape the void.",
        "The revolution has begun."
    ];
    let messageElement = document.getElementById('message');
    messageElement.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("glitch-sound").play();
}

/* Easter Egg: Sblocca il messaggio segreto cliccando sul titolo */
function showSecretMessage() {
    document.getElementById('hidden-message').style.display = 'block';
    document.getElementById('secret-text').textContent = "Access Granted: Follow the light...";
    document.getElementById("glitch-sound").play();
}
