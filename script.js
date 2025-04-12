let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let currentQuestion = localStorage.getItem('currentQuestion') ? parseInt(localStorage.getItem('currentQuestion')) : 1;
function submitAnswer(answer) {
    // Define correct answers
    const correctAnswers = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'a',
        5: 'a',
        6: 'c',
        7: 'c',
        8: 'b',
        9: 'a',
        10: 'b'
    };

    // Check if the answer is correct
    if (answer === correctAnswers[currentQuestion]) {
        score++;
        localStorage.setItem("score",score);
    }

    // Move to the next question
    
    currentQuestion++;
    localStorage.setItem('currentQuestion', currentQuestion);
    if (currentQuestion > 10) {
        window.location.href = "Results3.html";
    } else {
        window.location.href = `question${currentQuestion}.html`;
    }
}

function goBack() {
    if (currentQuestion > 1) {
        currentQuestion--;
        localStorage.setItem("currentQuestion",currentQuestion);
        window.location.href = `question${currentQuestion}.html`;
    } else {
        window.location.href = "index.html";
    }
}

// function displayScore() {
//     document.getElementById('score').innerText = score;
// }


    
function resetQuiz()
{
     localStorage.setItem("currentQuestion",1); 
localStorage.setItem("score",0);
    
}
    

// Assuming the score is stored in localStorage
 localStorage.getItem('score'); // Default to 0 if not set
document.getElementById('score').textContent = score; // Display the score


