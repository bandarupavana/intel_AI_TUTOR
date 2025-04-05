function checkQuiz() {
    const answers = {
        q1: "Sad",
        q2: "Children",
        q3: "an",
        q4: "rises",
        q5: "hat"
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
        // No need to unlock next level here
        feedbackMessage = `🎉 Congratulations! You scored ${score}/5. Redirecting to the homepage...`;

        setTimeout(() => {
            window.location.href = "../index.html"; // Just go back to home
        }, 3000);
    } else {
        feedbackMessage = `😢 You scored ${score}/5. Try again!`;
    }

    showChatbotMessage(feedbackMessage);
}
