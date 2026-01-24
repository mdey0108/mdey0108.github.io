const allQuestions = [
    {
        question: "You encounter a merge conflict. What is your immediate reaction?",
        options: [
            { text: "Carefully review both changes and merge.", type: "10x" },
            { text: "git push --force and pray.", type: "Chaos" },
            { text: "Delete the repository and clone it again.", type: "Lazy" },
            { text: "Stare at the screen until it fixes itself.", type: "Ghante" }
        ]
    },
    {
        question: "What is the best way to fix a memory leak?",
        options: [
            { text: "Use a profiler to find the source.", type: "10x" },
            { text: "What runs in memory?", type: "Ghante" },
            { text: "Restart the server every 30 minutes (Cron job).", type: "Chaos" },
            { text: "Switch to a language with Garbage Collection.", type: "WorksOnMyMachine" }
        ]
    },
    {
        question: "Your code works on the first try. What happened?",
        options: [
            { text: "I am a genius.", type: "10x" },
            { text: "I forgot to save the file.", type: "Ghante" },
            { text: "It's a trap.", type: "WorksOnMyMachine" },
            { text: "I'm actually dreaming.", type: "Lazy" }
        ]
    },
    {
        question: "How do you center a <div>?",
        options: [
            { text: "display: flex; justify-content: center; align-items: center;", type: "10x" },
            { text: "margin: 0 auto;", type: "WorksOnMyMachine" },
            { text: "Use <center> tag.", type: "Ghante" },
            { text: "Copy-paste random CSS from StackOverflow until it looks okay.", type: "Lazy" }
        ]
    },
    {
        question: "What is the most essential tool in your development kit?",
        options: [
            { text: "IDE / Text Editor.", type: "10x" },
            { text: "Git.", type: "WorksOnMyMachine" },
            { text: "Mouse jiggler.", type: "Ghante" },
            { text: "Google / ChatGPT.", type: "Lazy" }
        ]
    },
    {
        question: "Tabs or Spaces?",
        options: [
            { text: "Spaces, obviously. Consistency is key.", type: "10x" },
            { text: "Tabs. I care about file size.", type: "WorksOnMyMachine" },
            { text: "Mix them. I like to watch the world burn.", type: "Chaos" },
            { text: "I use Microsoft Word.", type: "Ghante" }
        ]
    },
    {
        question: "How do you exit Vim?",
        options: [
            { text: ":wq", type: "10x" },
            { text: "Unplug the computer.", type: "Chaos" },
            { text: "Close the terminal window.", type: "Lazy" },
            { text: "What is Vim?", type: "Ghante" }
        ]
    },
    {
        question: "What's your stance on comments in code?",
        options: [
            { text: "Code should be self-documenting, but I add them for complex logic.", type: "10x" },
            { text: "// TODO: Fix this later", type: "Lazy" },
            { text: "Comments are for the weak. Reads pure hex.", type: "Chaos" },
            { text: "I comment every single line explaining what the syntax does.", type: "Ghante" }
        ]
    },
    {
        question: "A producer reports a bug in production. You:",
        options: [
            { text: "Check the logs and roll back if necessary.", type: "10x" },
            { text: "It works on my machine.", type: "WorksOnMyMachine" },
            { text: "Ignore it until they file a ticket.", type: "Lazy" },
            { text: "Ask them to reboot their computer.", type: "Ghante" }
        ]
    },
    {
        question: "You need to name a variable for a loop counter.",
        options: [
            { text: "i, j, k (standard convention).", type: "10x" },
            { text: "loopCounterVariableForUserList", type: "WorksOnMyMachine" },
            { text: "var1", type: "Ghante" },
            { text: "thingy", type: "Chaos" }
        ]
    },
    {
        question: "The build failed. Why?",
        options: [
            { text: "I'll investigate the CI logs.", type: "10x" },
            { text: "Cosmic rays.", type: "Chaos" },
            { text: "I deleted the wrong folder.", type: "Ghante" },
            { text: "Just run it again, it's flaky.", type: "Lazy" }
        ]
    },
    {
        question: "How do you handle CSS?",
        options: [
            { text: "BEM or Utility classes, structured and scalable.", type: "10x" },
            { text: "!important everywhere.", type: "Chaos" },
            { text: "Bootstrap/Tailwind defaults.", type: "Lazy" },
            { text: "I only use inline styles.", type: "Ghante" }
        ]
    },
    {
        question: "Your database is slow. Solution?",
        options: [
            { text: "Analyze query execution plans and add indices.", type: "10x" },
            { text: "Cache everything.", type: "WorksOnMyMachine" },
            { text: "Store data in a text file instead.", type: "Ghante" },
            { text: "Switch to NoSQL because it's 'web scale'.", type: "Lazy" }
        ]
    },
    {
        question: "Favorite dark mode theme?",
        options: [
            { text: "Dracula / Nord / One Dark.", type: "10x" },
            { text: "High Contrast Black.", type: "WorksOnMyMachine" },
            { text: "I use Light Mode.", type: "Chaos" },
            { text: "I invert my screen colors.", type: "Ghante" }
        ]
    },
    {
        question: "What is your opinion on Unit Tests?",
        options: [
            { text: "Essential for maintainability.", type: "10x" },
            { text: "I write them if I have time (never).", type: "Lazy" },
            { text: "Mock everything, test nothing real.", type: "WorksOnMyMachine" },
            { text: "What is a 'Unit'?", type: "Ghante" }
        ]
    },
    {
        question: "HTML is...",
        options: [
            { text: "A markup language.", type: "10x" },
            { text: "A programming language.", type: "Ghante" },
            { text: "Easy.", type: "WorksOnMyMachine" },
            { text: "Something I generate with JS.", type: "Lazy" }
        ]
    },
    {
        question: "How do you debug JS?",
        options: [
            { text: "Chrome DevTools debugger breakpoints.", type: "10x" },
            { text: "console.log('here')", type: "Lazy" },
            { text: "console.log('AAAAAA')", type: "Chaos" },
            { text: "I guess and check for 4 hours.", type: "Ghante" }
        ]
    },
    {
        question: "What's in your `node_modules`?",
        options: [
            { text: "Only what I specifically installed.", type: "10x" },
            { text: "A black hole heavier than the sun.", type: "Lazy" },
            { text: "Vulnerabilities.", type: "Chaos" },
            { text: "I deleted it because it was too big.", type: "Ghante" }
        ]
    },
    {
        question: "Agile is...",
        options: [
            { text: "A methodology to iterate quickly.", type: "10x" },
            { text: "Meetings. Lots of meetings.", type: "Lazy" },
            { text: "A yoga pose?", type: "Ghante" },
            { text: "A suggestion.", type: "Chaos" }
        ]
    },
    {
        question: "You accidentally deleted a production table.",
        options: [
            { text: "Restore from backup immediately.", type: "10x" },
            { text: "Update resume.", type: "Lazy" },
            { text: "I thought it was the dev database.", type: "Ghante" },
            { text: "Run away and live in the woods.", type: "Chaos" }
        ]
    },
    {
        question: "How do you manage passwords?",
        options: [
            { text: "Password Manager with 2FA.", type: "10x" },
            { text: "admin123", type: "Ghante" },
            { text: "Same password for everything.", type: "Lazy" },
            { text: "Post-it note on monitor.", type: "WorksOnMyMachine" }
        ]
    },
    {
        question: "Best OS?",
        options: [
            { text: "Linux/Unix based.", type: "10x" },
            { text: "Windows XP.", type: "Ghante" },
            { text: "Mac.", type: "Lazy" },
            { text: "TempleOS.", type: "Chaos" }
        ]
    },
    {
        question: "Code Reviews are for...",
        options: [
            { text: "Ensuring quality and sharing knowledge.", type: "10x" },
            { text: "Nitpicking syntax.", type: "WorksOnMyMachine" },
            { text: "Finding someone to blame.", type: "Ghante" },
            { text: "Asserting dominance.", type: "Chaos" }
        ]
    },
    {
        question: "Internet Explorer is...",
        options: [
            { text: "Dead. Let it go.", type: "10x" },
            { text: "The best browser for downloading Chrome.", type: "Lazy" },
            { text: "What I develop for first.", type: "Ghante" },
            { text: "Compatible with my legacy app.", type: "WorksOnMyMachine" }
        ]
    },
    {
        question: "Regular Expressions (Regex) are...",
        options: [
            { text: "Powerful text processing tools.", type: "10x" },
            { text: "I just avoid them.", type: "Ghante" },
            { text: "Magic spells copied from the internet.", type: "Lazy" },
            { text: "What I use to parse HTML.", type: "Chaos" }
        ]
    },
    {
        question: "What is a 'feature'?",
        options: [
            { text: "A documented capability of the software.", type: "10x" },
            { text: "A bug with a tuxedo.", type: "WorksOnMyMachine" },
            { text: "I don't know, I just write code.", type: "Ghante" },
            { text: "An undocumented hidden level.", type: "Chaos" }
        ]
    },
    {
        question: "Documentation is...",
        options: [
            { text: "Crucial for onboarding.", type: "10x" },
            { text: "Outdated the moment it's written.", type: "WorksOnMyMachine" },
            { text: "Non-existent.", type: "Lazy" },
            { text: "I printed it out once.", type: "Ghante" }
        ]
    },
    {
        question: "Best time to deploy?",
        options: [
            { text: "Tuesday morning.", type: "10x" },
            { text: "Friday at 5pm.", type: "Chaos" },
            { text: "When the boss is watching.", type: "Ghante" },
            { text: "Never. If it ain't broke...", type: "Lazy" }
        ]
    },
    {
        question: "How do you start a new project?",
        options: [
            { text: "Read requirements, design architecture.", type: "10x" },
            { text: "`npx create-react-app .`", type: "Lazy" },
            { text: "Download a zip file from a random tutorial.", type: "Ghante" },
            { text: "Start coding in `main` without a repo.", type: "Chaos" }
        ]
    },
    {
        question: "What is AI?",
        options: [
            { text: "Machine Learning models trained on data.", type: "10x" },
            { text: "Robots taking over.", type: "Ghante" },
            { text: "Magic.", type: "Lazy" },
            { text: "My replacement.", type: "Chaos" }
        ]
    }
];

const personas = {
    "10x": {
        title: "The 10x Engineer",
        description: "You dream in binary. Documentation writes itself when you enter the room. You are the one who knocks... on the deployment pipeline."
    },
    "Chaos": {
        title: "The Chaos Monkey",
        description: "Some men just want to watch the server burn. You believe that if it compiles, it's production-ready. Testing is for those who lack faith."
    },
    "Lazy": {
        title: "The StackOverflow Copy-Paster",
        description: "Why reinvent the wheel when `ctrl+c` and `ctrl+v` exist? You've built an entire career on other people's code snippets. Efficiency is your middle name, or it would be if you bothered to type it out."
    },
    "WorksOnMyMachine": {
        title: "The 'It Works on My Machine' Certified Developer",
        description: "Ticket closed: Cannot Reproduce. You are the master of environment variables and the guardian of localhost:3000. If it breaks in prod, that's Ops' problem."
    },
    "Ghante": {
        title: "Ghante ka Engineer",
        description: "You have a degree, maybe? You think Java and JavaScript are related like Car and Carpet. Your code doesn't just fail; it fails to find a purpose in life. HR is still wondering how you got hired."
    }
};

let questions = [];
let currentQuestion = 0;
let scores = {
    "10x": 0,
    "Chaos": 0,
    "Lazy": 0,
    "WorksOnMyMachine": 0,
    "Ghante": 0
};

let userAnswers = []; // Store question and answer details

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', startQuiz);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


let userInfo = {
    name: "",
    role: "",
    company: ""
};

function startQuiz() {
    const nameInput = document.getElementById('user-name');
    const roleInput = document.getElementById('user-role');
    const companyInput = document.getElementById('user-company');

    if (!nameInput.value || !roleInput.value || !companyInput.value) {
        alert("Please fill in all details before starting diagnostics.");
        return;
    }

    userInfo.name = nameInput.value;
    userInfo.role = roleInput.value;
    userInfo.company = companyInput.value;

    currentQuestion = 0;
    // Reset scores
    for (let key in scores) scores[key] = 0;

    // Randomly select 5 questions
    questions = shuffleArray([...allQuestions]).slice(0, 5);
    userAnswers = []; // Reset answers

    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestion];

    let html = `
        <div class="question-card">
            <h2 class="question-text">${currentQuestion + 1}. ${q.question}</h2>
            <div class="options">
                ${q.options.map((option, index) => `
                    <button class="btn option-btn" data-type="${option.type}">
                        ${String.fromCharCode(65 + index)}) ${option.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    quizContainer.innerHTML = html;

    // Add event listeners
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedType = e.target.dataset.type;
            const selectedText = e.target.innerText.substring(3); // Remove "Item) " prefix approximately

            // Find full text properly if needed, but text content is sufficient.
            // Let's store structured data
            const currentQ = questions[currentQuestion];
            const correctOption = currentQ.options.find(o => o.type === "10x");

            userAnswers.push({
                question: currentQ.question,
                selectedAnswer: selectedText,
                selectedType: selectedType,
                correctAnswer: correctOption ? correctOption.text : "N/A"
            });

            handleAnswer(selectedType);
        });
    });
}

function handleAnswer(type) {
    if (scores[type] !== undefined) {
        scores[type]++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // Determine winner
    let maxScore = -1;
    let winner = "10x"; // Default

    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            winner = type;
        } else if (scores[type] === maxScore) {
            // Tie breaker logic: Randomly pick one or prefer the current winner
            if (Math.random() > 0.5) {
                winner = type;
            }
        }
    }


    const persona = personas[winner];

    let html = `
        <div class="result-card">
            <h2>System Diagnosis Complete</h2>
            <div class="user-details" style="margin-bottom: 20px; color: #aaa; font-size: 0.9rem; text-align: left; background: #333; padding: 15px; border-radius: 5px;">
                <p><strong>Candidate:</strong> ${userInfo.name}</p>
                <p><strong>Role:</strong> ${userInfo.role}</p>
                <p><strong>Organization:</strong> ${userInfo.company}</p>
            </div>
            <div class="tagline">${persona.title}</div>
            <p class="description">${persona.description}</p>
            <button class="btn" onclick="location.reload()">Recompile Personality</button>
        </div>
    `;

    quizContainer.innerHTML = html;
}
