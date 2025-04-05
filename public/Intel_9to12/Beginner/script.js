function checkQuiz() {
    let score = 0;
    let mistakes = [];
    let answers = {
        "q1": { correct: "an", category: "Grammar" },
        "q2": { correct: "Joyful", category: "Vocabulary" },
        "q3": { correct: "Play football", category: "Comprehension" }
    };

    for (let question in answers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected) {
            if (selected.value === answers[question].correct) {
                score++;
            } else {
                mistakes.push(answers[question].category); // Store incorrect category
            }
        } else {
            mistakes.push(answers[question].category); // If unanswered, mark as wrong
        }
    }

    let resultText = document.getElementById("result");
    let chatMessage = document.getElementById("chatMessage");

    let feedback = "";
    
    if (score >= 2) {
        feedback = "Great job! 🎉 You answered " + score + "/3 correctly. You can move forward!";
    } else {
        feedback = "Better luck next time! You scored " + score + "/3. Keep practicing! 😊";
    }

    if (mistakes.length > 0) {
        let uniqueMistakes = [...new Set(mistakes)]; // Remove duplicates
        let suggestions = "Focus on: <b>" + uniqueMistakes.join(", ") + "</b> to improve. ";
        suggestions += "<br>Don't worry! Keep practicing, and you'll get better. 💪";
        feedback += "<br><br>" + suggestions;
    }

    resultText.innerHTML = "<b>" + feedback + "</b>";
    chatMessage.innerHTML = feedback;

    // Show chatbot response
    document.getElementById("chatbot").style.display = "block";
}
