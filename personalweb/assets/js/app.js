const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const cursorEffect = document.getElementById("cursor-effect");

let CursorTimer = null;
let cursorVisible = true;
let CursorDisplayed = true;

function startBlinking() {
    if (CursorTimer) return; // Prevent multiple timers

    CursorTimer = setInterval(() => {
        cursorEffect.style.visibility = cursorVisible ? "hidden" : "visible";
        cursorVisible = !cursorVisible;
    }, 500);
}

startBlinking();



let typingInterval = null;


function TypeTerminalText(text) {

    if (typingInterval !== null) {
        clearInterval(typingInterval);
    }

    terminalOutput.textContent = '';

    let charCount = 0;

    typingInterval = setInterval(function () {

        terminalOutput.textContent = text.substring(0, charCount + 3);

        charCount += 3;

        if (charCount >= text.length) {
            clearInterval(typingInterval);
            typingInterval = null;
        }

    }, 20);
}

function TypeTerminalHTML(plainText, htmlText) {
    if (typingInterval !== null) {
        clearInterval(typingInterval);
    }

    terminalOutput.textContent = '';

    let charCount = 0;

    typingInterval = setInterval(function () {
        terminalOutput.textContent = plainText.substring(0, charCount + 3);
        charCount += 3;

        if (charCount >= plainText.length) {
            clearInterval(typingInterval);
            typingInterval = null;
            terminalOutput.innerHTML = htmlText;
        }
    }, 20);
}


// ABOUT ME
function PrintAboutMe() {

    if (CursorDisplayed) {
        cursorEffect.style.display = "none";
        CursorDisplayed = false;
        clearInterval(CursorTimer);
    }

    terminalInput.textContent = 'C:\\source>choose 0';

    TypeTerminalText(
        'I am a software development student at Nádasdy Tamás Technikum, expected to graduate in 2027. My primary programming language is C#, and I also have experience with Python and PHP. I am a fast learner with a strong interest in problem-solving and continuous professional development. I enjoy exploring new technologies, tackling unfamiliar challenges, and expanding my technical knowledge through practical experience.'
    );
}


// CONTACTS
function PrintContacts() {
    if (CursorDisplayed) {
        cursorEffect.style.display = "none";
        CursorDisplayed = false;
        clearInterval(CursorTimer);
    }

    terminalInput.textContent = 'C:\\source>choose 1';

    TypeTerminalHTML(
        'You can reach me through the following channels:\n- Email: aczelmihaly@proton.me\n- LinkedIn: linkedin.com/in/mihalyaczel/\n- GitHub: github.com/HiroshiKurogane',
        'You can reach me through the following channels:<br>' +
        '- Email: aczelmihaly@proton.me<br>' +
        '- LinkedIn: <a style="text-decoration: none;" href="https://linkedin.com/in/mihalyaczel" target="_blank" rel="noopener noreferrer">linkedin.com/in/mihalyaczel</a><br>' +
        '- GitHub: <a style="text-decoration: none;" href="https://github.com/HiroshiKurogane" target="_blank" rel="noopener noreferrer">github.com/HiroshiKurogane</a>'
    );
}


// PROJECTS
function PrintProjects() {
    if (CursorDisplayed) {
        cursorEffect.style.display = "none";
        CursorDisplayed = false;
        clearInterval(CursorTimer);
    }


    terminalInput.textContent = 'C:\\source>choose 2';

    TypeTerminalHTML('Some of my projects can be found on my GitHub profile:\n- RandomFoodGenerator\n- TempFolderCleaner',

        'Some of my projects can be found on my GitHub profile:<br>' +
        '- <a style="text-decoration: none;" href="https://github.com/HiroshiKurogane/RFG" target="_blank" rel="noopener noreferrer">RandomFoodGenerator</a><br>' +
        '- <a style="text-decoration: none;" href="https://github.com/HiroshiKurogane/TempFolderCleaner" target="_blank" rel="noopener noreferrer">TempFolderCleaner</a>'
    );
}


// KNOWLEDGE
function PrintKnowledge() {
    if (CursorDisplayed) {
        cursorEffect.style.display = "none";
        CursorDisplayed = false;
        clearInterval(CursorTimer);
    }

    terminalInput.textContent = 'C:\\source>choose 3';

    TypeTerminalText(
        '- C#\n- Python\n- PHP\n- SQL\n- Git/GitHub\n- Object-Oriented Programming (OOP)'
    );
}