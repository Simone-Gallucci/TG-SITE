document.addEventListener('DOMContentLoaded', function () {
    let consoleOutput = document.getElementById('console-output');
    let enterPressed = false; // Flag per controllare se Enter è già stato premuto

    // Mostra il messaggio iniziale "Press Enter..."
    consoleOutput.innerHTML = '<p class="blink">>> Press Enter...</p>';

    // Messaggi da mostrare DOPO che l'utente preme Enter
    let consoleMessages = [
        ">> Establishing secure connection...",
        ">> Accessing encrypted files...",
        ">> Running silent protocol...",
        ">> WARNING: Unauthorized access detected!",
        ">> Encryption level: MAXIMUM",
        ">> Connection secured. Awaiting further input..."
    ];

    // Blocca l'aggiornamento automatico: ora i messaggi non vengono mostrati subito!
    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter" && !enterPressed) {
            enterPressed = true; // Blocca l'avvio multiplo

            // Cancella "Press Enter..."
            consoleOutput.innerHTML = "";

            // Avvia la sequenza di messaggi digitati lentamente
            writeConsoleMessages();
        }
    });

    // Funzione per scrivere i messaggi con effetto digitazione
    function writeConsoleMessages() {
        let index = 0;

        function typeMessage() {
            if (index < consoleMessages.length) {
                let p = document.createElement('p');
                consoleOutput.appendChild(p);

                typeText(p, consoleMessages[index], 0, function () {
                    let beepSound = document.getElementById("terminal-beep");
                    if (beepSound) beepSound.play(); // Suono "beep" dopo ogni messaggio
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
    let glitchSound = document.getElementById("glitch-sound");
    if (glitchSound) glitchSound.play(); // Effetto sonoro glitch
}

/* Easter Egg: Sblocca il messaggio segreto cliccando sul titolo */
function showSecretMessage() {
    document.getElementById('hidden-message').style.display = 'block';
    document.getElementById('secret-text').textContent = "Access Granted: Follow the light...";
    let glitchSound = document.getElementById("glitch-sound");
    if (glitchSound) glitchSound.play();
}
