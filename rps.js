var user = "y";
var comp = "x";
var draw = 0, userpoint = 0, comppoint = 0;
var score1=0, score2=0;
const select = () => {
    let n = Math.random();
    if (n < 0.33) {
        comp = "rock"
        document.querySelector("#ques").innerHTML=`<img src="rock.jpg" alt="" class="opt">`
    }
    else if (n > 0.33 && n < 0.667) {
        comp = "paper";
        document.querySelector("#ques").innerHTML=`<img src="water.jpg" alt="" class="opt">`
    }
    else {
        comp = "scissor"
        document.querySelector("#ques").innerHTML=`<img src="scissor.jpg" alt="" class="opt">`

    }


}

function compare() {
    if (user == comp) {
        draw = 1;

    }
    if (user == "rock" && comp == "paper") {
        comppoint = 1;
    }
    else if (user == "rock" && comp == "scissor") {
        userpoint = 1;
    }
    else if (user == "paper" && comp == "scissor") {
        comppoint = 1;
    }
    else if (user == "paper" && comp == "rock") {
        userpoint = 1;
    }
    else if (user == "scissor" && comp == "rock") {
        comppoint = 1;
    }
    else if (user == "scissor" && comp == "paper") {
        userpoint = 1;
    }
score();
}


var s = document.getElementById("rock");
s.addEventListener("click", () => {

    user = "rock";
    select();
    compare();
    rs();
    rest();
})
var w = document.getElementById("paper");
w.addEventListener("click", () => {
    user = "paper";
     select();
    compare();
    rs();
    rest();
})
var g = document.getElementById("scissor");
g.addEventListener("click", () => {
    user = "scissor";
     select();
    compare();

    rs();
rest();
})

function rs() {
    if (userpoint > 0) {
        document.querySelector(".result").innerHTML = "You Won!"
    }
    else if (comppoint > 0) {
        document.querySelector(".result").innerHTML = "Better Luck Next Time!"
    }
    else if (draw > 0) {
        document.querySelector(".result").innerHTML = "Draw"

    }


    console.log("user =", user, userpoint);
    console.log("comp =", comp, comppoint);
}
function rest() {
    userpoint = 0;
    comppoint = 0;
    draw = 0;

}
function score(){
    score1+=userpoint;
    score2+=comppoint;
    document.querySelector(".score").innerHTML=`SCORE : <br>USER : ${score1}<br>COMP : ${score2}`
}