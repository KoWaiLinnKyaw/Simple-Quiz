//Variables
let startBtn = document.querySelector(".startBtn");
let start = document.querySelector(".start");
let displayContainer = document.querySelector(".displayContainer");
let correctAns = document.querySelector(".correctAns");
let wrongAns = document.querySelector(".wrongAns");
let question = document.querySelector(".question");
let answer = document.querySelector(".ans")
let preBtn = document.querySelector(".preBtn");
let nextBtn = document.querySelector(".nextBtn");
let restart = document.querySelector(".restart");
let quizCount = 0;

//Start Button
startBtn.addEventListener("click", function () {
    start.classList.add("hidden");
    displayContainer.classList.remove("hidden");
    correctAns.classList.add("hidden");
    wrongAns.classList.add("hidden");
    quizCreator(quizArray[quizCount]);
    preBtn.classList.add("hidden");
    ansChecker();
})

//Questions & Answers
const quizArray = [
    {
        question: "What is the physical address of a network interface card?",
        option: ["NIC", "MAC", "IP", "ARP"],
        correct: "MAC",
    },
    {
        question: "In a class B IP address, which two octets are reserved for the host?",
        option: ["First and Second", "Second and Fourth", "Second and Third", "Third and Fourth"],
        correct: "Third and Fourth",
    },
    {
        question: "Which of the following is a class B address?",
        option: ["10.23.54.22", "190.152.60.32", "127.55.22.34", "192.123.12.88"],
        correct: "190.152.60.32",
    },
    {
        question: "What OSI layer does a switch reside on?",
        option: ["Datalink", "Network", "Application", "Physical"],
        correct: "Datalink",
    },
    {
        question: "Which of the following ports use TCP?",
        option: ["TFTP", "DHCP", "FTP", "NTP"],
        correct: "FTP",
    }
]

//Question Creator Function
function quizCreator(x) {
    question.textContent = x.question;
    answer.innerHTML = `
    <button class="option">${x.option[0]}</button>
    <button class="option">${x.option[1]}</button>
    <button class="option">${x.option[2]}</button>
    <button class="option">${x.option[3]}</button>
`;
}

//Next Button 
nextBtn.addEventListener("click", function () {
    preBtn.classList.remove("hidden");
    correctAns.classList.add("hidden");
    wrongAns.classList.add("hidden");
    if (quizCount < quizArray.length - 1) {
        quizCreator(quizArray[++quizCount]);
    }
    if (quizCount == quizArray.length - 1) {
        nextBtn.classList.add("hidden");
        restart.classList.remove("hidden");
    }
    ansChecker();
})

//Previous Button
preBtn.addEventListener("click", function () {
    correctAns.classList.add("hidden");
    wrongAns.classList.add("hidden");
    restart.classList.add("hidden");
    quizCreator(quizArray[--quizCount]);
    nextBtn.classList.remove("hidden");
    if (quizCount == 0) {
        preBtn.classList.add("hidden");
    }
    ansChecker();
})

//Correct Answer
let option = document.getElementsByClassName("option");
function ansChecker(){
    for (let i = 0; i< option.length; i++) {  
        option[i].addEventListener("click", function(){
            if(option[i].innerHTML == quizArray[quizCount].correct){
                correctAns.classList.remove("hidden");
                wrongAns.classList.add("hidden");
            } else{
                wrongAns.classList.remove("hidden");
                correctAns.classList.add("hidden");
            }
        })
    }
}
