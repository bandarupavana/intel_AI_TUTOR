function checkQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    
    let correctAnswers = 0;
    
    // Answer key
    const answers = {
        q1: "b", // "If I were you, I would go."
        q2: "a", // "To start a conversation"
        q3: "b"  // "To influence something"
    };
    
    // Check answers
    if (q1 && q1.value === answers.q1) correctAnswers++;
    if (q2 && q2.value === answers.q2) correctAnswers++;
    if (q3 && q3.value === answers.q3) correctAnswers++;

    let feedbackMessage = '';
    if (correctAnswers >= 2) {
        // Store progress and allow access to the next level
        localStorage.setItem('beginnerPassed', 'true');
        feedbackMessage = '🎉 Congratulations! You passed the Beginner level! Now, you can access the Intermediate level.';
        setTimeout(() => {
            window.location.href = '../index.html'; // Redirect after a delay
        }, 3000);
    } else {
        feedbackMessage = '😢 Better luck next time! Try again, and don’t worry, you can do it!';
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
