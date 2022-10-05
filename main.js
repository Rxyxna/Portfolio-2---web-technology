

const dinoButton = document.querySelector("#Dinoimg")
const dinoCount = document.querySelector("#total-dino-amount")


dinoButton.addEventListener("click", addOneToTotalDinoAmmount)

function addOneToTotalDinoAmmount()
{
let dinoTotal = dinoCount.innerHTML
    dinoTotal++
    dinoCount.innerHTML = dinoTotal
}