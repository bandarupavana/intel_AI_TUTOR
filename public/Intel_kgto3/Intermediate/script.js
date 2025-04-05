function checkQuiz() {
    let score = 0;

    // Correct answers for Intermediate level
    let answers = {
        q1: "Small",
        q2: "C",
        q3: "Something easy"
    };

    // Check user answers
    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    let feedbackMessage = '';
    
    if (score >= 2) {
        // Unlock Advanced level
        localStorage.setItem('intermediatePassed', 'true');
        feedbackMessage = '🎉 Great job! You’ve completed the Intermediate level! Advanced level is now unlocked. 🌟';

        setTimeout(() => {
            window.location.href = '../index.html'; // Or wherever you want to redirect
        }, 3000);
    } else {
        feedbackMessage = '😢 Almost there! Try again and level up! 💪';
    }

    // Show chatbot feedback
    showChatbotMessage(feedbackMessage);
}
