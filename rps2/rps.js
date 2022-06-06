
let userScoreVal = 0;
let compScoreVal = 0;
let drawScoreVal = 0;


//document.getElementByClass("playerScore") = 0;
const scoreContainer = document.querySelector('#scoreContainer');
const userScoreDiv = document.createElement('div');
const hyphenDiv1 = document.createElement('div');
const compScoreDiv = document.createElement('div');
const hyphenDiv2 = document.createElement('div');
const drawDiv = document.createElement('div');

userScoreDiv.classList.add('userScoreDiv');
userScoreDiv.textContent = userScoreVal;

hyphenDiv1.classList.add('hyphenDiv1');
hyphenDiv1.textContent = '-';

compScoreDiv.classList.add('compScoreDiv');
compScoreDiv.textContent = compScoreVal;

hyphenDiv2.classList.add('hyphenDiv2');
hyphenDiv2.textContent = '-';

drawDiv.classList.add('drawDiv');
drawDiv.textContent = drawScoreVal;

scoreContainer.appendChild(userScoreDiv);
scoreContainer.appendChild(hyphenDiv1);
scoreContainer.appendChild(compScoreDiv);
scoreContainer.appendChild(hyphenDiv2);
scoreContainer.appendChild(drawDiv);


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log(button.id);
    let roundResult = playRound(button.id)[2];
    console.log(roundResult);
    if (roundResult==='win'){userScoreVal++}
    else if (roundResult==="lose"){compScoreVal++}
    else {drawScoreVal++}
    userScoreDiv.textContent = userScoreVal;
    compScoreDiv.textContent = compScoreVal;
    drawDiv.textContent = drawScoreVal;
  });
});

/*
const btn = document.getElementById('btn');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Button clicked';
});
*/

//Randomly select from RPS array, defaults to RPS
function computerSelection(rpsArray=Array("Rock", "Paper", "Scissors"))
{
    return rpsArray[Math.floor(Math.random()
        * rpsArray.length)]     
}



/*
// no longer needed due to clicking input
//Formats text to first letter upper case; the rest lower case
function formatCaps(word){
    //Remove spaces (which shouldn't exist), and make all lower case
    let formattedWord = word.toLowerCase().trim();
    
    //remove first character from to ensure lower case second word part
    let lowerWord = formattedWord.substr(1);
    
    //single word starting upper case ending lower case
    return formattedWord.slice(0,1).toUpperCase()+lowerWord;
}

//Make sure player has provided a valid input
//boolean result to validate
function isValidInput(rpsArray,formattedInput){
    let isMatch = 0;
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
        return frmtPlayerSelection ; 
        }  
}
*/


/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////





/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////




//Play a round of rock paper scissors
function playRound(userInput){
    let computerInput = computerSelection();
    //let frmtPlayerSelection = button.id; //promptPlayer();
    
    let loseWinDraw = "";

    //Pairings where first column wins vs second
    let winOutcomes = [
        ["Rock", "Scissors"]
        ,["Scissors","Paper"]
        ,["Paper","Rock"]
        ]
    
    if(computerInput===userInput){
        return loseWinDraw = [userInput
                            ,computerInput
                            ,"draw"
                            ];
    }
    else{//go through all winOutcomes to see if play wins
        let iLoopCountNoBreaks = 0; //if no win occurs; going over zero means loss
        for(let i=0; i<=2; i++){
            if(
                userInput === winOutcomes[i][0]
                &&
                computerInput === winOutcomes[i][1]
                ){
                    return loseWinDraw = [userInput
                                        ,computerInput
                                        ,"win"
                                        ];
                    break;
                }
            else{iLoopCountNoBreaks++}
        }

        //loss if iLoopCountNoBreaks = 3 with no break
        if(iLoopCountNoBreaks = 3){
            return loseWinDraw = [userInput
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
    let WLD = results[2]; //WLD = win/lose/draw
    switch(WLD){
        case "win":console.log(`You win! ${human} beats ${cpu}.`);
            break;
        case "lose": console.log( `You lose! ${cpu} beats ${human}.`);
            break;
        case "draw": console.log( "This one's a draw!");
    }
}

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
