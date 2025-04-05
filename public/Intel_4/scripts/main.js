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
