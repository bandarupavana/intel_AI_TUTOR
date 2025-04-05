function checkQuiz() {
    const answers = {
        q1: "He doesn't like apples.",
        q2: "Swum",
        q3: "The team is winning.",
        q4: "To start studying seriously",
        q5: "It's a beautiful day!"
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption && selectedOption.value === answers[key]) {
            score++;
        }
    }

    let feedbackMessage = '';

    if (score >= 4) { 
        // Store progress and allow access to the Advanced level
        localStorage.setItem('intermediatePassed', 'true'); 
        feedbackMessage = '🎉 Congratulations! You passed the Intermediate level! Now, you can access the Advanced level.';
        
        setTimeout(() => {
            window.location.href = '../index.html'; // Redirect after a delay
        }, 3000);
    } else {
        feedbackMessage = '😢 Better luck next time! Try again, and don’t worry, you can do it!';
    }

    // Show chatbot feedback instead of alert
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
