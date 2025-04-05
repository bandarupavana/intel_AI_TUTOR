// Check if the student passed the Beginner level
window.onload = function() {
    if(localStorage.getItem('beginnerPassed') === 'true') {
        // Unlock the Intermediate level if Beginner is passed
        document.getElementById('intermediate').disabled = false;
        document.getElementById('intermediate').querySelector('.locked').style.display = 'none';
    }

    if(localStorage.getItem('intermediatePassed') === 'true') {
        // Unlock the Advanced level if Intermediate is passed
        document.getElementById('advanced').disabled = false;
        document.getElementById('advanced').querySelector('.locked').style.display = 'none';
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const level = localStorage.getItem("userLevel");
    if (!level) return;

    // Unlock levels based on stored level
    if (level === "Intermediate" || level === "Advanced") {
        document.getElementById("intermediate").removeAttribute("disabled");
    }
    if (level === "Advanced") {
        document.getElementById("advanced").removeAttribute("disabled");
    }

    // Show user's grade and level
    const grade = localStorage.getItem("userGrade") || "Unknown";
    document.body.insertAdjacentHTML("afterbegin", `<p>📚 Grade: ${grade} | Level: ${level}</p>`);
});
