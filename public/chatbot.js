function startChatbot(grade) {
    let userResponse = prompt("What is your previous knowledge level? (Beginner, Intermediate, Advanced)");
    
    if (userResponse) {
        let level = userResponse.toLowerCase();
        let validLevels = ["beginner", "intermediate", "advanced"];

        if (validLevels.includes(level)) {
            window.location.href = `/public/${grade}/${level}/index.html`;
        } else {
            alert("Invalid choice! Please type Beginner, Intermediate, or Advanced.");
        }
    }
}
async function startChatbot(grade) {
    let userId = localStorage.getItem("userId"); // Assuming user is logged in

    if (userId) {
        let response = await fetch(`/api/progress/fetch/${userId}`);
        let data = await response.json();
        
        if (data && data.level) {
            let resume = confirm(`Do you want to continue from ${data.level}?`);
            if (resume) {
                window.location.href = `/public/${grade}/${data.level}/index.html`;
                return;
            }
        }
    }

    let userResponse = prompt("What is your level? (Beginner, Intermediate, Advanced)");
    if (userResponse) {
        let level = userResponse.toLowerCase();
        let validLevels = ["beginner", "intermediate", "advanced"];

        if (validLevels.includes(level)) {
            window.location.href = `/public/${grade}/${level}/index.html`;
        } else {
            alert("Invalid choice! Please type Beginner, Intermediate, or Advanced.");
        }
    }
}
