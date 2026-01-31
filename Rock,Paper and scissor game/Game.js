let userscore = 0;
let computerscore = 0;


let uscore = document.getElementById("yourscore");
let cscore = document.getElementById("compscore");


const choices = document.querySelectorAll(".choice");

function playgame(userchoice) {
    const message = document.getElementById("msg");

    const options = ["rock", "paper", "scissor"];
    let compindx = Math.floor(Math.random() * 3);
    const computerchoice = options[compindx];

    console.log("User:", userchoice, "Computer:", computerchoice);

    if (userchoice === computerchoice) {
        message.innerText = "Draw! Try again 😐";
    } 
    else if (
        (userchoice === "rock" && computerchoice === "scissor") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissor" && computerchoice === "paper")
    ) {
        message.innerText = "You won 🎉";
        userscore++;
        uscore.innerText = userscore;
    } 
    else {
        message.innerText = "Oops! You lose 😬";
        computerscore++;
        cscore.innerText = computerscore;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id").toLowerCase();
        playgame(userchoice);
    });
});




