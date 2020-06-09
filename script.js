// let takerInput = document.querySelector("#score-text");
// let scoreForm = document.querySelector("#score-form");
// let takerList = document.querySelector("#ttakers");
// let takerCountSpan = document.querySelector("#taker-count");

// let testtakers = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderNames();

// function renderNames() {

//     takerList.innerHTML = "";
//     takerCountSpan.text.content = testtakers.length;

//     for (let i = 0; i < testtakers.length; i++) {

//         let testtaker = testtakers[i];

//         let li = document.createElement("li");
//         li.textContent = takers;
//         takerList.appendChild(li);
//     }
// }

// scoreForm.addEventListener("submit", function(event) {

//     event.preventDefault();
//     let scoreText = takerInput.value.trim();

//     if (scoreText === "") {
//         return;
//     }
//     takers.push(scoreText);
//     takerInput.value = "";

//     renderNames();

// });




function timerFunction() {
    alert('Time Over');
}

function check() {
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let correct = 0;

    if (question1 == "correct") {
        correct++;
    }

    if (question2 == "correct") {
        correct++;
    }

    if (question3 == "correct") {
        correct++;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
}