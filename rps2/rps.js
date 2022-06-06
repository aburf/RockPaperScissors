
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

    if (userScoreVal===5){
            alert("Congrats! You win!");
            userScoreVal = 0;
            compScoreVal = 0;
            drawScoreVal = 0;
    }
    else if (compScoreVal===5){
        alert("Sorry, you're a loser...");
            userScoreVal = 0;
            compScoreVal = 0;
            drawScoreVal = 0;
    }
  });
});

//Randomly select from RPS array, defaults to RPS
function computerSelection(rpsArray=Array("Rock", "Paper", "Scissors"))
{
    return rpsArray[Math.floor(Math.random()
        * rpsArray.length)]     
}



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

