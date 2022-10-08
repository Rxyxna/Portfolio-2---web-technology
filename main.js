
// Variables
const dinoButton = document.querySelector("#Dinoimg")
const dinoCount = document.querySelector("#total-dino-amount")

//  Event listener
    dinoButton.addEventListener("click", addOneToTotalDinoAmmount)


// function count
function addOneToTotalDinoAmmount()
{
let dinoTotal = dinoCount.innerHTML
    dinoTotal++
    dinoCount.innerHTML = dinoTotal
}

// PLAY AND PAUSE AUDIO BUTTON  --> code from ( https://www.w3schools.com/jsref/met_audio_play.asp)
let playButton = document.getElementById("funkAudio");

function playAudio() {
    playButton.play();
}

function stopAudio() {
    playButton.pause();
}







