//#region DOM Elements

const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const cursorEffect = document.getElementById("cursor-effect");
//#endregion

//#region Keyboard Support
document.addEventListener('keydown', (event) => {
    if (event.key == "0") {
        PrintAboutMe();
    }

    else if (event.key == "1") {
        PrintContacts();
    }
    else if (event.key == "2") {
        PrintProjects();
    }
    else if (event.key == "3") {
        PrintKnowledge();
    }
});
//#endregion

//#region Phone Virtual Keyboard Support
const terminalContainer = document.getElementById("terminal-container");
const terminalInputField = document.getElementById("terminal-input-field");

terminalContainer.addEventListener('click', () => {
    terminalInputField.focus();
    navigator.virtualKeyboard.show();
});
//#endregion

//#region Blink Cursor Effect
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
//#endregion

//#region Terminal Text Typing Effect
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
//#endregion

//#region Data Display Functions

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
        'You can reach me through the following channels:\n\n\u00A0\u00A0- Email: aczelmihaly@proton.me\n\u00A0\u00A0- LinkedIn: mihalyaczel\n\u00A0\u00A0- GitHub: HiroshiKurogane',
        'You can reach me through the following channels:<br><br>' +
        '\u00A0\u00A0- Email: aczelmihaly@proton.me<br>' +
        '\u00A0\u00A0- LinkedIn: <a style="text-decoration: none;" href="https://linkedin.com/in/mihalyaczel" target="_blank" rel="noopener noreferrer">mihalyaczel</a><br>' +
        '\u00A0\u00A0- GitHub: <a style="text-decoration: none;" href="https://github.com/HiroshiKurogane" target="_blank" rel="noopener noreferrer">HiroshiKurogane</a>'
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

    TypeTerminalHTML('Some of my projects can be found on my GitHub profile:\n\nRandomFoodGenerator: A simple food generator developed in PHP. It\'s a fun project to generate random food ideas.\n\nTempFolderCleaner: A tool for cleaning temporary folders. Developed in C#, it helps users manage and clean up their temporary files efficiently.',

        'Some of my projects can be found on my GitHub profile:<br><br>' +
        '<a style="text-decoration: none;" href="https://github.com/HiroshiKurogane/RFG" target="_blank" rel="noopener noreferrer"><span style="text-decoration: underline;">RandomFoodGenerator</span></a>: A simple food generator developed in PHP. It\'s a fun project to generate random food ideas.<br><br>' +
        '<a style="text-decoration: none;" href="https://github.com/HiroshiKurogane/TempFolderCleaner" target="_blank" rel="noopener noreferrer"><span style="text-decoration: underline;">TempFolderCleaner</span></a>: A tool for cleaning temporary folders. Developed in C#, it helps users manage and clean up their temporary files efficiently.'
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
        'Languages and Technologies:\n\u00A0\u00A0- C#: desktop and web applications\n\u00A0\u00A0- Python: automatizations, desktop apps\n\u00A0\u00A0- PHP: Simple applications\n-------------------------------------\nDatabase handling and planing:\n\u00A0\u00A0- SQL \n\u00A0\u00A0- SQLite \n\u00A0\u00A0- MSSQL \n------------------------------------- \n Version Control:\n\u00A0\u00A0- Git/GitHub'
        // \u00A0\u00A0 means (non-breaking space)*2
    );
}

//#endregion