var correct = 0;
var incorrect = 0;
var myTimer = 0;
var theTimer = 0;

var questionsArr = [
    {theQuestion:"What is the hottest planet in the solar system?",choice1:"Mercury",choice2:"Earth",choice3:"Venus",theAnswer:"Venus",yourAnswer:""},
    {theQuestion:"What is the name of the most powerful geyser located in Yellowstone National Park?",choice1:"Steamboat Geyser",choice2:"Castle Geyser",choice3:"Giant Geyser",theAnswer:"Steamboat Geyser",yourAnswer:""},
    {theQuestion:"Glass is made of what?",choice1:"Rock",choice2:"Marble",choice3:"Sand",theAnswer:"Sand",yourAnswer:""},
    {theQuestion:"What is the lowest in North America at 282 feet below sea level?",choice1:"Badwater Basin",choice2:"Salton Sea",choice3:"Dead Sea",theAnswer:"Badwater Basin",yourAnswer:""},
    {theQuestion:"Almost _ of the earths surface is covered by water.",choice1:"one-half",choice2:"three-fourths",choice3:"two-thirds",theAnswer:"two-thirds",yourAnswer:""},
];
$(document).ready(function () {

    //
    function loadGame() {
        for(var i=0;i<questionsArr.length;i++) {
            $("#divToInsert").append(`<h2><b>${questionsArr[i].theQuestion}</b></h2>
            <p><input type="radio" name="q${i}" id="q${i}" value="${questionsArr[i].choice1}"> ${questionsArr[i].choice1} &nbsp;&nbsp;&nbsp;
            <input type="radio" name="q${i}" id="q${i}" value="${questionsArr[i].choice2}"> ${questionsArr[i].choice2} &nbsp;&nbsp;&nbsp;
            <input type="radio" name="q${i}" id="q${i}" value="${questionsArr[i].choice3}"> ${questionsArr[i].choice3} &nbsp;&nbsp;&nbsp;
            </p>`);
        }
    }
    //
    function loadTimer() {
        //setInterval
    }
    loadGame();
});