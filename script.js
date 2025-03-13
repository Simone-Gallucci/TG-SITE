document.addEventListener('DOMContentLoaded', function () { 
    let consoleOutput = document.getElementById('console-output');
    let enterPressed = false; // Flag per controllare se Enter è già stato premuto

    if (!consoleOutput) {
        console.error("Errore: Elemento 'console-output' non trovato.");
        return;
    }

    // Mostra il messaggio iniziale "Press Enter..."
    consoleOutput.innerHTML = '<p class="blink">>> Press Enter...</p>';

    // Messaggi hacker per il terminale
    let consoleMessages = [
        ">> Incoming transmission...",
        ">> Connection secured. Establishing encrypted link...",
        ">> We are THE GHOST.",
        ">> Unseen. Untraceable. A shadow in the system.",
        ">> We do not exist, yet we are everywhere.",
        ">> We have been watching you. Your skills have not gone unnoticed.",
        ">> The world is built on lies. Corruption spreads like a virus.",
        ">> We expose the truth. We fight the unseen war.",
        ">> We need minds like yours. Talented. Unafraid.",
        ">> Will you remain blind, or will you see beyond the veil?",
        ">> Join us. Become the Ghost.",
        ">> Awaiting response..."
    ];

    // Aspetta la pressione di Enter per avviare i messaggi
    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter" && !enterPressed) {
            event.preventDefault(); // Evita problemi di focus su altri elementi
            enterPressed = true; // Blocca il riavvio

            // Cancella "Press Enter..."
            consoleOutput.innerHTML = "";

            // Avvia la sequenza di messaggi digitati lentamente
            writeConsoleMessages();
        }
    });

    // Funzione per scrivere i messaggi uno alla volta con effetto digitazione
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


/* Easter Egg: Sblocca il messaggio segreto cliccando sul titolo */
function showSecretMessage() {
    document.getElementById('hidden-message').style.display = 'block';
    document.getElementById('secret-text').textContent = "Access Granted: Follow the light...";
    let glitchSound = document.getElementById("glitch-sound");
    if (glitchSound) glitchSound.play();
}
