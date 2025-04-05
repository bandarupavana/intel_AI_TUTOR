function checkQuiz() {
    let score = 0;

    // Correct answers
    let answers = {
        q1: "b",
        q2: "a",
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
        resultText = `🎉 Great job! You scored ${score}/3. You can now proceed to the Advanced Level!`;
        showChatbot("Well done! You're doing great! Keep it up! 👍");
    } else {
        resultText = `😔 You scored ${score}/3. Keep practicing, and try again!`;
        showChatbot("Hmm... Looks like you could use more practice with grammar and vocabulary. Don't give up! You can do it! 💪");
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
