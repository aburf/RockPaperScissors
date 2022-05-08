const rpsOptions = Array("Rock", "Paper", "Scissors")

function computerSelection(rpsArray){
    return rpsArray[Math.floor(Math.random()
        * rpsArray.length)]     
}

console.log(computerSelection(rpsOptions))

