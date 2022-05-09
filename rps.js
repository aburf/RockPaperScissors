const rpsOptions = Array("Rock", "Paper", "Scissors")

//Randomly select from RPS array
function computerSelection(rpsArray){
    return rpsArray[Math.floor(Math.random()
        * rpsArray.length)]     
}

console.log(computerSelection(rpsOptions))

//Player input
let playerSelection = prompt("Choose Rock, Paper, or Scissors. Now.")

//Takes text and returns starting upper case first letter
//and ending in all lower cases with no spaces
function formatCaps(word){
    //Remove spaces (which shouldn't exist), and make all lower case
    let formattedWord = word.toLowerCase().trim()
    
    //remove first character from to ensure lower case second word part
    let lowerWord = formattedWord.substr(1)
    
    //single word starting upper case ending lower case
    return formattedWord.slice(0,1).toUpperCase()+lowerWord
}
console.log(formatCaps(playerSelection))

//Make sure player has provided a valid input
//boolean result to validate
function isValidInput(rpsArray,formattedInput){
    let isMatch = 0
    for(let x in rpsArray){
        if (rpsArray[x] === formattedInput){
            isMatch+=1
        }
    }
    if(isMatch > 0){return true}
    else {return false}
}

console.log("Is Valid input = "+
    isValidInput(rpsOptions,formatCaps(playerSelection)))
