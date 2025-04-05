function checkQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    
    let correctAnswers = 0;
    
    // Answer key
    const answers = {
        q1: "b", // "Noun"
        q2: "b", // "Jumps"
        q3: "a"  // "Blue"
    };
    
    // Check answers
    if (q1 && q1.value === answers.q1) correctAnswers++;
    if (q2 && q2.value === answers.q2) correctAnswers++;
    if (q3 && q3.value === answers.q3) correctAnswers++;

    let feedbackMessage = '';
    if (correctAnswers >= 2) {
        // Store progress and allow access to the next level
        localStorage.setItem('beginnerPassed', 'true');
        feedbackMessage = '🎉 Great job! You answered most questions correctly! Keep learning and have fun! 🎈';
        setTimeout(() => {
            window.location.href = '../index.html'; // Redirect to next lesson
        }, 3000);
    } else {
        feedbackMessage = '😢 Oops! Try again! You can do it! 💪';
    }
    
    // Show chatbot feedback
    showChatbotMessage(feedbackMessage);
}

// Function to show chatbot message
function showChatbotMessage(message) {
    const chatbot = document.getElementById("chatbot");
    const chatbotMessage = document.getElementById("chatbotMessage");
    
    chatbotMessage.textContent = message;
    chatbot.style.display = "block"; // Make chatbot visible
}

// Function to close chatbot
function closeChatbot() {
    document.getElementById("chatbot").style.display = "none";
}
