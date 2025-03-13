document.addEventListener('DOMContentLoaded', function () {
    let consoleOutput = document.getElementById('console-output');
    let enterPressed = false; // Controlla se Enter è già stato premuto

    // Messaggi da mostrare dopo Enter (MODIFICA QUI)
    let consoleMessages = [
        ">> Establishing secure connection...",
        ">> Accessing encrypted files...",
        ">> Running silent protocol...",
        ">> WARNING: Unauthorized access detected!",
        ">> Encryption level: MAXIMUM",
        ">> Connection secured. Awaiting further input..."
    ];

    // Messaggi casuali per "Join Us"
    let randomMessages = [
        "You have been watched.",
        "We know who you are.",
        "This is not a game.",
        "You cannot escape the void.",
        "The revolution has begun."
    ];
    
    // Ascolta la pressione del tasto Enter
    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter" && !enterPressed) {
            enterPressed = true; // Blocca il riavvio

            // Rimuove il messaggio iniziale "Press Enter..."
            consoleOutput.innerHTML = "";

            // Avvia l'animazione dei messaggi
            writeConsoleMessages();
        }
    });

    // Funzione per scrivere i messaggi uno alla volta con effetto digitazione e suono
    function writeConsoleMessages() {
        let index = 0;

        function typeMessage() {
            if (index < consoleMessages.length) {
                let p = document.createElement('p');
                consoleOutput.appendChild(p);
                typeText(p, consoleMessages[index], 0, function () {
                    document.getElementById("terminal-beep").play(); // Riproduce il suono beep
                    index++;
                    setTimeout(typeMessage, 1500); // Pausa tra i messaggi
                });
            }
        }

        typeMessage();
    }

    // Effetto digitazione carattere per carattere
    function typeText(element, text, i, callback) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => typeText(element, text, i + 1, callback), 50);
        } else if (callback) {
            callback();
        }
    }
});

// Funzione per mostrare messaggi casuali con il pulsante "Join Us"
function showMessage() {
    let messageElement = document.getElementById('message');
    let messages = [
        "You have been watched.",
        "We know who you are.",
        "This is not a game.",
        "You cannot escape the void.",
        "The revolution has begun."
    ];
    messageElement.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("glitch-sound").play(); // Effetto sonoro glitch
}

/* Easter Egg: Sblocca il messaggio segreto cliccando sul titolo */
function showSecretMessage() {
    document.getElementById('hidden-message').style.display = 'block';
    document.getElementById('secret-text').textContent = "Access Granted: Follow the light...";
    document.getElementById("glitch-sound").play();
}
