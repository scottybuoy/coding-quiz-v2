var currentTime = 50;
var timerLabel = $("#timer-label");
var timerCountdown = $("#timer-countdown");
var clock;
var main = document.querySelector("#card");
var card = $("#card");
var timer = document.querySelector("#timer-container");
var button1 = $("<button>", {"id" : "button1", "class" : "btn"});
var button2 = $("<button>", {"id" : "button2", "class" : "btn"});
var button3 = $("<button>", {"id" : "button3", "class" : "btn"});
var button4 = $("<button>", {"id" : "button4", "class" : "btn"});
var header1 = $("#main-head");
var desc = $("<p>", {"id" : "description2"});







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
    $(".btn").on("click", transition2);
    
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
    $("#buttonCont").remove();
    card.append(desc);
    desc.text(`Your score is ${currentTime}`);
    clearInterval(clock);
}