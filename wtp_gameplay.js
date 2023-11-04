// this will make buttons correspond to new answer 
let playerScore = 0;
let timeLeft = 10;
const quiz_bank = [
    {
        question: "que es?",
        answers: [
            {
                text: "cheese",
                correct: false,
            },
            {
                text: "watermelon",
                correct: true,
            },
        ]
    }
]

function loaded(){
    const current = quiz_bank[0];

    document.getElementById('quiz').innerHTML += `
    <div>
        ${current.question}
        <div>
         <button onclick="selected(${current.answers[0].correct})">${current.answers[0].text}</button>
         <button onclick="selected(${current.answers[1].correct})">${current.answers[1].text}</button>

        </div>
    </div>
    `;

    let timer = setInterval(function() {
        timeLeft -= 1;
        document.getElementById("timer").innerText = timeLeft;

        if(timeLeft <= 0) {
            clearInterval(timer)
        }
    }, 1000);
}

function selected(correct){
    console.log("user seleced correct value",correct)
    if(correct) playerScore+=1;
    updateScore();
}

// buttons.forEach(button => button.addEventListener("click", value)) {
//     checkCorrect(value); 
// }

// function checkCorrect() {
//     if (myElement.classList.contains("correct")) {

//     }
//         playerScore += 1; 
//         updateScore(); 
    
// }

function updateScore() {
    document.getElementById("counter").innerText = `Score: ${playerScore}`;
}

//backticks ` are template strings

// add event listener 