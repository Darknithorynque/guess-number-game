const randomNumber = Math.floor(Math.random() * 20) + 1;

let score = document.getElementById("score");
let actualScore = parseInt(score.innerHTML)

const highscore = []
let highestScoreHtml = document.getElementById("highscore");

let difference;

let buttonActivity = document.querySelector("#checkButton").disabled = false
console.log(randomNumber);
let actualNumber = document.getElementsByClassName("actual-number")[0]


let innerofMessage = document.getElementsByClassName("too-low")[0].innerHTML
var message = document.getElementsByClassName("too-low")[0]


const displayCss = function(key,cssValue) {
      ( key!=="span" && key!==".actual-number") ?
        document.querySelector(key).style.backgroundColor=cssValue:
        document.querySelector(key).style.color=cssValue;

}

let guessNumberInput = document.getElementById("guessNumber");
function controllGame(randomN){
    let guessN = Number(guessNumberInput.value);



    if(guessN >= 1 && guessN <= 20) {



        if(guessN == randomN){
            actualNumber.innerHTML = guessN;
            highscore.push(actualScore)

                if(actualScore > localStorage.getItem("highScore") ) {
                    highestScoreHtml.innerHTML = Number( highestScore());
                }
        

            //CSS animation

            displayCss("#guessNumber","green")
            displayCss("html","green")
            displayCss(".container","green")
            displayCss("span","white")
            displayCss(".actual-number","black")
          


             document.querySelector("h1").innerHTML="Correct !"


            buttonActivity = document.querySelector("#checkButton").disabled = true    
        }
        else if(guessN != randomN) {
            actualScore--;
            score.innerHTML = actualScore

            difference = randomN - guessN;
            let actualDifference;


            if(difference >= 0) {
                actualDifference = difference*1;
            }

            if(difference < 0) {
                actualDifference = difference*(-1);
            }

               const ifTooLow = (actualDifference>10 && actualDifference<=20);
               const ifLow = (actualDifference>5 && actualDifference<=10);

               ifTooLow ? message.innerHTML = "Too Low" :
                ifLow ? message.innerHTML = "Low" : message.innerHTML = "Close"
            
            localStorage.setItem("savedText", message.innerHTML);

        }

    }

    else alert("pls enter a number between 1 and 20");
   
}


 function highestScore(){
    var highest;
        for(var i = 0; i < highscore.length; i++) {
            if(highscore.length === 1) {
                highest = highscore[0]
            }
            else if(highscore[i+1] > highestScore[i] ) {
                highest = highestScore[i+1]
            } 
        }

        localStorage.setItem("highScore",highest)
        console.log(highscore.length)
    return Number(highest);
}


document.getElementsByClassName("btn-check")[0].addEventListener("click", function(){
    controllGame(randomNumber);
});


document.getElementsByClassName("btn-again")[0].addEventListener("click",function(){
    location.reload()      
})


window.onload = function() {
    message.innerHTML = "Start Guessing ..."

        highestScoreHtml.innerHTML = localStorage.getItem("highScore")


    localStorage.setItem("savedText",message.innerHTML)

     };