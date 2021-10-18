//declaration 

const randomNumber=Math.floor(Math.random()*30+1)
let chances=5;
let isWin=false;

//decleration

//-------------------imports----------------------

const Userguess=document.querySelector("#number")
const resultDiv=document.querySelector(".result")
const historyDiv=document.querySelector(".history")
const submitDiv=document.querySelector(".submit")
const resetDiv=document.querySelector(".reset")

//--------------------imports-----------------------

//main----------------

  const GuessingGame =()=>{
    const guess=Userguess.value
    let result


    if(guess > 30 || guess < 1){
    result="Guess a number between 1 to 30 "
    resultDiv.innerHTML=`<h4>${result}</h4>`
    }
    
    else if(chances && !isWin){
    if(randomNumber == guess){
        result="🎉You Won🎉";    
        isWin=true;
    }

    
    else if(randomNumber < guess){
        if(chances == 1){
            result = `Game over, The number is ${randomNumber}`
        }
    
        else{
        result="😞You too high😞"
        isWin=false
    }
}
    else if(randomNumber > guess){
        if (chances == 1){
            result = `Game over,The number is ${randomNumber}`
        }
        else{
        result="😞You too low😞 "
        isWin=false
        }
    }
    chances --;
    historyDiv.innerHTML += `<h4>You Guessed ${guess}</h4>`
    resultDiv.innerHTML=`<h4>${result}</h4>`
    return
}
}

  const Reload = ()=>{
    if(!chances || isWin)
    location.reload()
}
//main----------------
