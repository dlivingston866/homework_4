




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
//Add person's name and score to list.
function addLi() {

    var txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

}
