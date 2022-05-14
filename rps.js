const rpsOptions = Array("Rock", "Paper", "Scissors");

 
//Randomly select from RPS array, defaults to RPS
function computerSelection(rpsArray=Array("Rock", "Paper", "Scissors"))
{
    return rpsArray[Math.floor(Math.random()
        * rpsArray.length)]     
}


//Formats text to first letter upper case; the rest lower case
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

//Prompt player for input, and ensure it is valid, return formatted
function promptPlayer(){
    let playerSelection = prompt("Choose Rock, Paper, or Scissors. Now.")
    let frmtPlayerSelection = formatCaps(playerSelection)
    if (isValidInput(rpsOptions,frmtPlayerSelection)=== false)
        {
            console.log(`"${playerSelection}" is an invalid input, you big goof.`);
            promptPlayer()
        }
    else 
        {
        return frmtPlayerSelection  
        }  
}


//Play a round of rock paper scissors
function playRound(){
    let computerInput = computerSelection()
    let frmtPlayerSelection = promptPlayer()
    let loseWinDraw = ""

    //Pairings where first column wins vs second
    let winOutcomes = [
        ["Rock", "Scissors"]
        ,["Scissors","Paper"]
        ,["Paper","Rock"]
        ]
    
    if(computerInput===frmtPlayerSelection){
        return loseWinDraw = [frmtPlayerSelection
                            ,computerInput
                            ,"draw"
                            ];
    }
    else{//go through all winOutcomes to see if play wins
        let iLoopCountNoBreaks = 0; //if no win occurs; going over zero means loss
        for(let i=0; i<=2; i++){
            if(
                frmtPlayerSelection === winOutcomes[i][0]
                &&
                computerInput === winOutcomes[i][1]
                ){
                    return loseWinDraw = [frmtPlayerSelection
                                        ,computerInput
                                        ,"win"
                                        ];
                    break;
                }
            else{iLoopCountNoBreaks++}
        }

        //loss if iLoopCountNoBreaks = 3 with no break
        if(iLoopCountNoBreaks = 3){
            return loseWinDraw = [frmtPlayerSelection
                                ,computerInput
                                ,"lose"
                                ];
        }
    }
}

//results == loseWinDraw from playRound()
function announceResults(results){
    let human = results[0];
    let cpu = results[1];
    let WLD = results[2]; //WLD = lose/win/draw
    switch(WLD){
        case "win":console.log(`You win! ${human} beats ${cpu}.`);
            break;
        case "lose": console.log( `You lose! ${cpu} beats ${human}.`);
            break;
        case "draw": console.log( "This one's a draw!");
    }
}
                    
/*
console.log(computerSelection())
console.log(playRound(computerSelection()))
console.log(tellResults(playRound(computerSelection())))
*/

//play five rounds of RPS; declare a winner
function game(){
    let playerScore = 0;
    let cpuScore = 0;
    //play five round and tally scores
    for (let i = 0; i<5; i++){
        let results = playRound();
        results[2] === "lose"
        if (results[2] === "win"){playerScore += 1 }
        else if (results[2] === "lose"){cpuScore += 1}
        announceResults(results);
    }
    

    //declare winner
    if(playerScore>cpuScore){console.log(`Score is ${playerScore}:${cpuScore}. Bruh, you win.`)}
    else if (playerScore<cpuScore){console.log(`Score is ${playerScore}:${cpuScore}. You lose. Bruh.`)}
    else {console.log(`Score is ${playerScore}-${cpuScore}. Draws can happend with odd numbers of rounds too!`)}
}

game()


