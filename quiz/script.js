const quizzes = {
    quiz1: {
        title: "Quiz 1: General Knowledge",
        questions: [
            { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
            { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Jane Austen", "Mark Twain", "Charles Dickens"], answer: "Harper Lee" },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
            { question: "Who painted the Mona Lisa?", options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
            { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
            { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
            { question: "What is the smallest country in the world?", options: ["Monaco", "Nauru", "San Marino", "Vatican City"], answer: "Vatican City" },
            { question: "Who was the first man to step on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
            { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
            { question: "What element does 'O' represent on the periodic table?", options: ["Oxygen", "Osmium", "Oganesson", "Osmium"], answer: "Oxygen" }
        ]
    },
    quiz2: {
        title: "Quiz 2: Science",
        questions: [
            { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
            { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
            { question: "What gas do plants need for photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
            { question: "What is the speed of light?", options: ["299,792 km/s", "150,000 km/s", "100,000 km/s", "250,000 km/s"], answer: "299,792 km/s" },
            { question: "What organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], answer: "Mitochondria" },
            { question: "What is the chemical formula for table salt?", options: ["H2SO4", "NaCl", "KCl", "CaCO3"], answer: "NaCl" },
            { question: "What planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: "Mercury" },
            { question: "What is the atomic number of hydrogen?", options: ["1", "2", "6", "8"], answer: "1" },
            { question: "What type of bond involves the sharing of electron pairs between atoms?", options: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"], answer: "Covalent Bond" },
            { question: "What is the most abundant gas in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: "Nitrogen" }
        ]
    },
    quiz3: {
        title: "Quiz 3: History",
        questions: [
            { question: "Who was the first president of the United States?", options: ["Abraham Lincoln", "Thomas Jefferson", "John Adams", "George Washington"], answer: "George Washington" },
            { question: "In which year did the Titanic sink?", options: ["1905", "1912", "1918", "1923"], answer: "1912" },
            { question: "Who was the first Emperor of China?", options: ["Qin Shi Huang", "Han Wudi", "Kangxi", "Yuan Shikai"], answer: "Qin Shi Huang" },
            { question: "What was the main cause of World War I?", options: ["Economic Depression", "Political Alliances", "Colonial Rivalries", "Assassination of Archduke Franz Ferdinand"], answer: "Assassination of Archduke Franz Ferdinand" },
            { question: "Who was the leader of the Soviet Union during World War II?", options: ["Vladimir Lenin", "Nikita Khrushchev", "Joseph Stalin", "Leon Trotsky"], answer: "Joseph Stalin" },
            { question: "What ancient civilization built the pyramids of Giza?", options: ["Romans", "Mayans", "Egyptians", "Greeks"], answer: "Egyptians" },
            { question: "Who was the famous queen of ancient Egypt?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Tutankhamun"], answer: "Cleopatra" },
            { question: "What was the main objective of the Marshall Plan?", options: ["Rebuild Europe", "Conquer Asia", "Expand the US military", "Promote nuclear weapons"], answer: "Rebuild Europe" },
            { question: "Which country was the first to grant women the right to vote?", options: ["United States", "New Zealand", "France", "Germany"], answer: "New Zealand" },
            { question: "In which year did the Berlin Wall fall?", options: ["1989", "1991", "1985", "1979"], answer: "1989" }
        ]
    }
};


function loadQuiz(quizId) {
    const quiz = quizzes[quizId];
    const quizTitle = document.getElementById('quiz-title');
    const questionsContainer = document.getElementById('questions-container');
    const homePage = document.getElementById('home-page');
    const quizContainer = document.getElementById('quiz-container');
    const navbar = document.getElementById('navbar');
    
    quizTitle.textContent = quiz.title;
    questionsContainer.innerHTML = '';

    quiz.questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <h3>Question ${index + 1}: ${q.question}</h3>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        questionsContainer.appendChild(questionElement);
    });

    homePage.style.display = 'none';
    quizContainer.style.display = 'block';
    navbar.style.display = 'none';
}

function showHomePage() {
    const homePage = document.getElementById('home-page');
    const quizContainer = document.getElementById('quiz-container');
    const navbar = document.getElementById('navbar');
    
    homePage.style.display = 'block';
    quizContainer.style.display = 'none';
    navbar.style.display = 'flex';
}

function submitQuiz() {
    const questionsContainer = document.getElementById('questions-container');
    const resultContainer = document.getElementById('result');
    const quizTitle = document.getElementById('quiz-title').textContent;

    let correctAnswers = 0;
    const quiz = Object.values(quizzes).find(q => q.title === quizTitle);

    quiz.questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            correctAnswers++;
        }
    });

    resultContainer.style.display = 'block';
    resultContainer.textContent = `You got ${correctAnswers} out of ${quiz.questions.length} correct!`;
}
