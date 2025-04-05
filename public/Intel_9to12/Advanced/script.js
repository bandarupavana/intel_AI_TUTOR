function checkQuiz() {
    let score = 0;

    // Correct answers for advanced quiz
    let answers = {
        q1: "b",
        q2: "b",
        q3: "b"
    };

    // Check answers
    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    // Display result
    let resultText = "";
    if (score >= 2) {
        resultText = `🎉 Excellent! You scored ${score}/3. You've completed the Advanced Level! 🌟`;
        showChatbot("Outstanding work! You're mastering English at an advanced level! Keep pushing forward! 💪");
    } else {
        resultText = `😔 You scored ${score}/3. Don't worry, try again and you'll improve!`;
        showChatbot("Looks like you need more practice with advanced topics. Keep working, you will improve with time! ✨");
    }

    document.getElementById("result").innerText = resultText;
}

// Show chatbot with message
function showChatbot(message) {
    let chatbotMessage = document.getElementById("chatbotMessage");
    let chatbot = document.getElementById("chatbot");

    chatbotMessage.innerText = message;
    chatbot.style.display = "block";
}

// Close chatbot window
function closeChatbot() {
    let chatbot = document.getElementById("chatbot");
    chatbot.style.display = "none";
}
