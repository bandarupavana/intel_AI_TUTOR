function checkQuiz() {
    const answers = {
        q1: "A beautiful poem was written by her.",
        q2: "If she studies, she will pass.",
        q3: "Precise",
        q4: "Although",
        q5: "Neither of the answers is correct."
    };
    
    let score = 0;
    
    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }
    
    let feedbackMessage = '';

    if (score >= 4) {
        feedbackMessage = `🎉 Congratulations! You scored ${score}/5. Redirecting to the homepage...`;
        
        setTimeout(() => {
            window.location.href = "../index.html"; // Redirect to homepage
        }, 3000);
    } else {
        feedbackMessage = `😢 You scored ${score}/5. Try again!`;
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
