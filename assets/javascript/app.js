var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 60;
var intervalId = 0;
var audio = 0;

var questionsArr = [
    { theQuestion: "What is the hottest planet in the solar system?", choice1: "Mercury", choice2: "Earth", choice3: "Venus", theAnswer: "Venus", yourAnswer: "" },
    { theQuestion: "What is the name of the most powerful geyser located in Yellowstone National Park?", choice1: "Steamboat Geyser", choice2: "Castle Geyser", choice3: "Giant Geyser", theAnswer: "Steamboat Geyser", yourAnswer: "" },
    { theQuestion: "Glass is made of what?", choice1: "Rock", choice2: "Sand", choice3: "Marble", theAnswer: "Sand", yourAnswer: "" },
    { theQuestion: "What is the lowest in North America at 282 feet below sea level?", choice1: "Badwater Basin", choice2: "Salton Sea", choice3: "Dead Sea", theAnswer: "Badwater Basin", yourAnswer: "" },
    { theQuestion: "Almost _ of the earths surface is covered by water.", choice1: "one-half", choice2: "three-fourths", choice3: "two-thirds", theAnswer: "two-thirds", yourAnswer: "" },
];
$(document).ready(function () {
    $("#done").on("click",endGame);
    //function to load the game & questions
    function loadGame() {
        for (var i = 0; i < questionsArr.length; i++) {
            $("#divToInsert").append(`<h2><b>${questionsArr[i].theQuestion}</b></h2>
            <p><input type="radio" name="q${i}" id="q${i}" value="${questionsArr[i].choice1}"> ${questionsArr[i].choice1} &nbsp;&nbsp;&nbsp;
            <input type="radio" name="q${i}" id="q${i}" value="${questionsArr[i].choice2}"> ${questionsArr[i].choice2} &nbsp;&nbsp;&nbsp;
            <input type="radio" name="q${i}" id="q${i}" value="${questionsArr[i].choice3}"> ${questionsArr[i].choice3} &nbsp;&nbsp;&nbsp;
            </p>`);
        }
        clearInterval(intervalId);
        intervalId = setInterval(countTime, 1000);
    }
    //function to count the timer & insert it to myTimer
    function countTime() {
        $("#myTimer").text(time);
        time--;
    }
    //function to end game hide questions div & show scores div
    function endGame() {
        clearInterval(intervalId);
        compareAnswers();
        $("#questions").hide();
        $("#tallies").show();
    }
    //
    function compareAnswers() {
        for (var i = 0; i < questionsArr.length; i++) {
            var ans = $("#q"+i+":checked").val();
            console.log("#q"+i+" = "+$("#q"+i+":checked").val());
            if (!ans) {
                unanswered++;
            } else if (ans===questionsArr[i].theAnswer) {
                correct++;
            } else if (ans!==questionsArr[i].theAnswer) {
                incorrect++;
            }
        }
        if (correct>=3) {loadSong(1);}
        else {loadSong(0);}
        $("#correct").text(correct);
        $("#incorrect").text(incorrect);
        $("#noAnswer").text(unanswered);
    }
    //function to load different sound clips on different scenarios
    function loadSong(flag) {
    var audioToPlay = "";
    if (flag==0) audioToPlay = "assets/audio/SadTrombone.mp3";
    else if (flag==1) audioToPlay = "assets/audio/Applause.mp3";
    audio = new Audio(audioToPlay);
    audio.play();
}
    //End game after 60 seconds
    setTimeout(endGame, 62000);
    loadGame();
});