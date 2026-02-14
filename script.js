// Configuration - Edit these variables
const wifeName = "My Rani"; // Change this to your wife's name
const relationshipStartDate = "2025-09-26"; // Change this to your relationship start date
const typewriterMessage = `Dear ${wifeName}, every moment with you feels like a dream come true. You are my sunflower, my everything, and the most beautiful part of my life. This little journey is just a small way to show you how much you mean to me. Ready to test how well you know your husband? 😊❤️`;

// Quiz Questions - Easy to edit
const quizQuestions = [
    {
        question: "When I texted you first ?",
        options: ["11 Aug", "12 Aug", "13 Aug", "26 Sept"],
        correctAnswer: 2
    },
    {
        question: "Where did we first meet?",
        options: ["Dombivali", "Pune", "Prime Heights", "Pimple Gurav"],
        correctAnswer: 0
    },
    {
        question: "What is the gift I bought you on first meet?",
        options: ["Sunflower", "Rose", "Painjan", "Chocolates"],
        correctAnswer: 0
    },
    {
        question: "Why did I propose you?",
        options: ["I liked your Face", "I liked your Body", "I liked your Behaviour and thoughts", "I liked your smile" ,"I liked everthing about you" ,  "All of above"],
        correctAnswer: 5
    },
    {
        question: "What I gift you on birthday?",
        options: ["Painjan", "Zhumke", "Earbuds", "Gajra"],
        correctAnswer: 0
    },
    {
        question: "Which bubi I love the most ?",
        options: ["Left", "Right", "Both", "None"],
        correctAnswer: 0
    },
    {
        question: "How much I love you ?",
        options: ["10%", "69%", "100%", "Infinite"],
        correctAnswer: 3
    },
    {
        question: "Who are you?",
        options: ["Best Friend", "GirlFriend", "Wife", "Colleugue"],
        correctAnswer: 2
    }
];

// Compliments for correct answers
const compliments = [
    "You know me so well 😍",
    "Smart wife alert 🚨❤️",
    "My genius queen 👑",
    "Perfect as always! 💕",
    "You're the best! 🌟",
    "I knew you'd get it! 🎯"
];

// Global Variables
let currentQuestionIndex = 0;
let wrongAttempts = 0;
let musicPlaying = false;

// DOM Elements
const introSection = document.getElementById('introSection');
const quizSection = document.getElementById('quizSection');
const memorySection = document.getElementById('memorySection');
const finalSection = document.getElementById('finalSection');
const successSection = document.getElementById('successSection');

const startQuizBtn = document.getElementById('startQuiz');
const continueQuizBtn = document.getElementById('continueQuiz');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const loveLetterBtn = document.getElementById('loveLetterBtn');

const questionTitle = document.getElementById('questionTitle');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const compliment = document.getElementById('compliment');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');

const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const heartbeatSound = document.getElementById('heartbeatSound');

const typewriterText = document.getElementById('typewriterText');
const daysCounter = document.getElementById('daysCounter');
const countdownTimer = document.getElementById('countdownTimer');

const modal = document.getElementById('loveLetterModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeBackgroundAnimations();
    calculateDaysTogether();
    startTypewriterEffect();
    setupEventListeners();
});

// Calculate days together
function calculateDaysTogether() {
    const startDate = new Date(relationshipStartDate);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    daysCounter.textContent = daysDiff;
}

// Typewriter Effect
function startTypewriterEffect() {
    let charIndex = 0;
    typewriterText.textContent = '';
    
    function type() {
        if (charIndex < typewriterMessage.length) {
            typewriterText.textContent += typewriterMessage.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50);
        }
    }
    
    setTimeout(type, 1000);
}

// Background Animations
function initializeBackgroundAnimations() {
    createFloatingHearts();
    createRosePetals();
    createGlitterParticles();
}

function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 2000);
}

function createRosePetals() {
    const petalsContainer = document.querySelector('.rose-petals');
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 8 + 's';
        petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
        petalsContainer.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 13000);
    }, 3000);
}

function createGlitterParticles() {
    const glitterContainer = document.querySelector('.glitter-particles');
    
    setInterval(() => {
        const glitter = document.createElement('div');
        glitter.className = 'glitter';
        glitter.style.left = Math.random() * 100 + '%';
        glitter.style.top = Math.random() * 100 + '%';
        glitter.style.animationDelay = Math.random() * 3 + 's';
        glitterContainer.appendChild(glitter);
        
        setTimeout(() => {
            glitter.remove();
        }, 3000);
    }, 500);
}

// Event Listeners
function setupEventListeners() {
    startQuizBtn.addEventListener('click', startQuiz);
    continueQuizBtn.addEventListener('click', continueQuiz);
    yesBtn.addEventListener('click', handleYesClick);
    noBtn.addEventListener('click', handleNoClick);
    noBtn.addEventListener('mouseenter', moveNoButton);
    loveLetterBtn.addEventListener('click', openLoveLetter);
    closeBtn.addEventListener('click', closeLoveLetter);
    musicToggle.addEventListener('click', toggleMusic);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeLoveLetter();
        }
    });
}

// Navigation Functions
function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    section.classList.add('active');
}

function startQuiz() {
    showSection(quizSection);
    currentQuestionIndex = 0;
    wrongAttempts = 0;
    loadQuestion();
}

function continueQuiz() {
    showSection(quizSection);
    loadQuestion();
}

// Quiz Functions
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        if (currentQuestionIndex === quizQuestions.length) {
            showMemorySection();
            currentQuestionIndex++;
        } else {
            showFinalSection();
        }
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    questionTitle.textContent = question.question;
    optionsContainer.innerHTML = '';
    feedback.textContent = '';
    compliment.textContent = '';
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correctAnswer) {
        buttons[selectedIndex].classList.add('correct');
        feedback.textContent = 'Correct ❤️';
        feedback.className = 'feedback correct';
        
        // Show random compliment
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        compliment.textContent = randomCompliment;
        
        // Create heart pop animation
        createHeartPop(buttons[selectedIndex]);
        
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 2000);
    } else {
        buttons[selectedIndex].classList.add('wrong');
        feedback.textContent = 'Wrong 💔 Try again!';
        feedback.className = 'feedback wrong';
        
        wrongAttempts++;
        
        if (wrongAttempts >= 3) {
            setTimeout(() => {
                feedback.textContent = 'Are you sure? I thought you know your husband better 😜❤️';
            }, 1000);
        }
        
        setTimeout(() => {
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('wrong');
            });
            feedback.textContent = '';
        }, 2000);
    }
}

function createHeartPop(element) {
    const rect = element.getBoundingClientRect();
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = rect.left + rect.width / 2 + 'px';
    heart.style.top = rect.top + 'px';
    heart.style.fontSize = '30px';
    heart.style.color = '#ff69b4';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'float 2s ease-out forwards';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Memory Section
function showMemorySection() {
    showSection(memorySection);
}

// Final Section
function showFinalSection() {
    showSection(finalSection);
    playHeartbeatSound();
}

function handleYesClick() {
    showSection(successSection);
    createHeartExplosion();
    increaseMusicVolume();
    startCountdown();
}

function handleNoClick() {
    alert('You don\'t have a choice 😌❤️');
}

function moveNoButton() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 200;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function createHeartExplosion() {
    const explosionContainer = document.getElementById('heartExplosion');
    explosionContainer.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'exploding-heart';
        heart.innerHTML = '❤️';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 200 + Math.random() * 200;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        heart.style.setProperty('--x', x + 'px');
        heart.style.setProperty('--y', y + 'px');
        
        explosionContainer.appendChild(heart);
    }
}

// Audio Functions
function toggleMusic() {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicToggle.textContent = '🔇';
        musicPlaying = false;
    } else {
        backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        musicToggle.textContent = '🎵';
        musicPlaying = true;
    }
}

function increaseMusicVolume() {
    backgroundMusic.volume = 0.7;
}

function playHeartbeatSound() {
    heartbeatSound.play().catch(e => console.log('Heartbeat sound failed:', e));
}

// Love Letter Modal
function openLoveLetter() {
    modal.style.display = 'block';
}

function closeLoveLetter() {
    modal.style.display = 'none';
}

// Countdown Timer
function startCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let valentineDay = new Date(currentYear, 1, 14); // February 14
    
    // If Valentine's Day has passed this year, count to next year's
    if (now > valentineDay) {
        valentineDay = new Date(currentYear + 1, 1, 14);
    }
    
    function updateCountdown() {
        const currentTime = new Date();
        const timeDiff = valentineDay - currentTime;
        
        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            countdownTimer.innerHTML = `⏰ ${days} days ${hours}h ${minutes}m ${seconds}s until next Valentine's Day! 💕`;
        } else {
            countdownTimer.innerHTML = "Happy Valentine's Day! ❤️";
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
