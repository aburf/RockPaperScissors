const rpsOptions = Array("Rock", "Paper", "Scissors")

//Randomly select from RPS array, defaults to RPS
function computerSelection(rpsArray=Array("Rock", "Paper", "Scissors"))
{
    return rpsArray[Math.floor(Math.random()
        * rpsArray.length)]     
}

//Prompt player for input
function promptPlayer(){
    let playerSelection = prompt("Choose Rock, Paper, or Scissors. Now.")
    return playerSelection    
}


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


//Play a round of rock paper scissors
function playRound(computerInput){
    //format playerInput
    let frmtPlayerSelection = formatCaps(promptPlayer())
    let loseWinDraw = ""

    //initialize for later
    //only play if input is valid (rock paper scissors)
    if (isValidInput(rpsOptions,frmtPlayerSelection)=== true)
    {
        switch(computerInput){
            case "Rock":
                switch(frmtPlayerSelection){
                    case "Rock":
                        loseWinDraw="draw";
                        break;
                    case "Paper":
                        loseWinDraw="win";
                        break;
                    case "Scissors":
                        loseWinDraw="lose";
                        break;
                };
                break;
            case "Paper":
                switch(frmtPlayerSelection){
                    case "Rock":
                        loseWinDraw="lose";
                        break;
                    case "Paper":
                        loseWinDraw="draw";
                        break;
                    case "Scissors":
                        loseWinDraw="win";
                        break;
                };
                break;
            case "Scissors":
                switch(frmtPlayerSelection){
                    case "Rock":
                        loseWinDraw="win";
                        break;
                    case "Paper":
                        loseWinDraw="lose";
                        break;
                    case "Scissors":
                        loseWinDraw="draw";
                        break;
                };
                break;

        }
        ///give text depending on victory condition
        switch(loseWinDraw){
            case "win": return `You win! ${frmtPlayerSelection} beats ${computerInput}.`
            case "lose": return `You lose! ${computerInput} beats ${frmtPlayerSelection}.`
            case "draw": return "This one's a draw!"                
        }
    }
    
    else {return "Invalid input, you big goof."}
}

