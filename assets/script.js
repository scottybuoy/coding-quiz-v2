var greenCheck = document.querySelector("#green-check");
var redX = document.querySelector("#red-x");
var currentTime = 50;
var timerLabel = $("#timer-label");
var timerCountdown = $("#timer-countdown");
var clock;
var main = document.querySelector("#card");
var card = $("#card");
var timer = document.querySelector("#timer-container");
// var startButton = document.querySelector("#start-button");
var buttonCont = $("#buttonCont");
var startButton = $("#start-button");
var button1 = $("<button>", {"id" : "button1", "class" : "btn incorrect"});
var button2 = $("<button>", {"id" : "button2", "class" : "btn incorrect"});
var button3 = $("<button>", {"id" : "button3", "class" : "btn incorrect"});
var button4 = $("<button>", {"id" : "button4", "class" : "btn incorrect"});
var buttonReset = $("<button>", {"id" : "reset", "class" : "btn"});
var header1 = $("#main-head");
var desc = $("<p>", {"id" : "description2"});
var initialsCont = $("<div>", {"id" : "initials-container"});
var initialsPrompt = $("<p>", {"id" : "initials-prompt"});
var initialsInput = $("<input>", {"id" : "initials", "type" : "text"});
var initialsButton = $("<button>", {"id" : "initials-button"});
var initialsStorage = document.querySelector("#initials");
var description = $("#description");
var scoresList = $("<ul>", {"id" : "scores-list"});
var scoresListItem = $("<li>");


    

// Display green checkmark on selection of correct answer
function correct() {
    greenCheck.setAttribute("style", "display: block");
        setTimeout(function() {
        greenCheck.style.display = "none";
    }, 500);
}

// Display red x and subtract 5 from timer on selection of incorrect answer
function incorrect() {
    currentTime = currentTime - 5;
    timerCountdown.text(currentTime);
    redX.setAttribute("style", "display: block");
        setTimeout(function() {
        redX.style.display = "none";
    }, 500);
}

// array of question objects //
const quizQuestions = [
    {
        question: "Which is not a Javascript data type?",
        answers: {
            a: "a.  Boolean",
            b: "b.  DOM",
            c: "c.  String",
            d: "d.  Number",
        },
        correctAnswer: "b"
    },
    {
        question: "What is a variable?",
        answers: {
            a: "a. A cool ass skateboard trick",
            b: "b. A set of code that performs a given task when invoked",
            c: "c. Built-in functions that are properties of an object",
            d: "d. Containers for storing data values",
        },
        correctAnswer: "d"
    },
    {
        question: "Which symbols enclose the code to be executed in a function?",
        answers: {
            a: "a. ( )",
            b: "b. \" \"",
            c: "c. { }",
            d: "d. & &",
        },
        correctAnswer: "c"
    },
    {
        question: "True or False: Booleans store values of either 'true' or 'false'?",
        answers: {
            a: "a. Yep thas right!",
            b: "b. Nah cuz, that ain't it",
            c: "Placeholder 3",
            d: "Placeholder 4",
        },
        correctAnswer: "a"
    },
    {
        question: "Where does the link to the .js file go in the HTML file?",
        answers: {
            a: "a. <link>",
            b: "b. <script>",
            c: "c. <title>",
            d: "d. <a>",
        },
        correctAnswer: "b"
    }
]


$("#timer-container").remove();


$("#start-button").on("click", transition1);

function transition1() {
    
    currentTime = 50;

    clock = setInterval(tickTock, 1000);
    timerCountdown.text(currentTime);

    function tickTock() {
        timerCountdown.text(currentTime);
        currentTime --;
    };

    document.body.insertBefore(timer, main);
    $("#start-button").remove();
    $("#description").remove();
    header1.attr("style", "text-align: left");
    header1.text(quizQuestions[0].question);
    $("#buttonCont").append([button1, button2, button3, button4]);
    button1.text(quizQuestions[0].answers.a);
    button2.text(quizQuestions[0].answers.b);
    button3.text(quizQuestions[0].answers.c);
    button4.text(quizQuestions[0].answers.d);
    button2.attr("class", "correct");
    $(".btn").on("click", transition2);
    $(".incorrect").on("click", incorrect);
    
    
}


function transition2() {
    header1.text(quizQuestions[1].question);
    button1.text(quizQuestions[1].answers.a);
    button2.text(quizQuestions[1].answers.b);
    button3.text(quizQuestions[1].answers.c);
    button4.text(quizQuestions[1].answers.d);
    $(".btn").on("click", transition3);
}

function transition3() {
    header1.text(quizQuestions[2].question);
    button1.text(quizQuestions[2].answers.a);
    button2.text(quizQuestions[2].answers.b);
    button3.text(quizQuestions[2].answers.c);
    button4.text(quizQuestions[2].answers.d);
    $(".btn").on("click", transition4);
}

function transition4() {
    header1.text(quizQuestions[3].question);
    button1.text(quizQuestions[3].answers.a);
    button2.text(quizQuestions[3].answers.b);
    button3.remove();
    button4.remove();
    $(".btn").on("click", transition5);
}

function transition5() {
    $("#buttonCont").append([button3, button4]);
    header1.text(quizQuestions[4].question);
    button1.text(quizQuestions[4].answers.a);
    button2.text(quizQuestions[4].answers.b);
    button3.text(quizQuestions[4].answers.c);
    button4.text(quizQuestions[4].answers.d);
    $(".btn").on("click", transition6);
}


function transition6() {
    header1.attr("style", "text-align: center");
    header1.text("Finished!");
    // $("#buttonCont").remove();
    button1.remove(), button2.remove(), button3.remove(), button4.remove();
    card.append(desc);
    desc.text(`Your score is ${currentTime}`);
    clearInterval(clock);
    card.append(initialsCont);
    initialsCont.append([initialsPrompt, initialsInput, initialsButton]);
    initialsPrompt.text("Enter initials: ");
    initialsButton.text("Submit");
    initialsButton.on("click", submitScore);
}

// Submit score to leaderboard
function submitScore() {

    var initialsInputStor = document.querySelector("#initials");
  
    // var scoresEntry = localStorage.getItem(initialsStorage.value);
    localStorage.setItem(initialsInputStor.value, currentTime);
    header1.text("Highscores");
    card.append(scoresList);
    scoresList.append(scoresListItem);
    initialsInput.remove();
    initialsButton.remove();
    initialsPrompt.remove();
    desc.remove();
    $("#timer-container").remove();
    scoresListItem.text(initialsInputStor.value.toUpperCase());
    console.log(initialsInputStor.value);
    card.append(buttonReset);
    buttonReset.text("Take again");
    buttonReset.on("click", reset);
}


function reset() {
    buttonReset.remove();
    scoresList.remove();
    header1.text("Javascript Quiz");
    $("#buttonCont").append(startButton);
    card.append(description);
    description.text("Each incorrect answer takes 5s off the clock!");
    // card.append(buttonCont);
    $("#start-button").on("click", transition1);
    currentTime === 50;
}

