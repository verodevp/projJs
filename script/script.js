//Variabili
let numCpu=document.querySelector(".numRandom span");
numCpu.innerHTML=0;
let pulsante=document.getElementById("play");
let count = 0;
let myNumber= document.getElementById("myNumber");
let myScore=0;
let cpuScore=0;
let boxMyScore = document.getElementById("myScore");
let boxCpuScore = document.getElementById("scoreCpu");
boxMyScore.innerHTML=myScore;
boxCpuScore.innerHTML=cpuScore;



//console.log(typeof(myNumber));
let sendButton= document.getElementById("send");
let result =document.querySelector(".result");
//console.log(result);

//console.log(typeof(myNumber.innerHTML));
let numRandom; 

let again = document.getElementById("again");



 //creazione bottone +
const option = document.querySelector('.options');
const addBtn = document.createElement('button');
addBtn.className = 'add';
const addBtnText = document.createTextNode('+');
addBtn.appendChild(addBtnText);
option.appendChild(addBtn);


//creazione bottone -

const minusBtn = document.createElement('button');
minusBtn.className='minus';
const minusBtnText = document.createTextNode ('-');
minusBtn.appendChild(minusBtnText);
option.appendChild(minusBtn);

//creazione bottone reset

const resetBtn = document.createElement('button');
resetBtn.className='reset';
const resetBtnText= document.createTextNode('reset');
resetBtn.appendChild(resetBtnText);
option.appendChild(resetBtn);



pulsante.addEventListener("click", start);


function start(){
    numCpu.style.visibility="hidden";
    numCpu.innerHTML = Math.round(Math.random()*9)+1; //estrazione casuale di un numero da 1 a 10
    numRandom = parseInt(numCpu.innerHTML);
    //console.log(numRandom);
    // console.log(typeof(numRandom)); number
}

again.addEventListener("click", newMatch);

function newMatch(){
    numCpu.innerHTML=0;
    numCpu.style.visibility="visible";
    result.style.visibility="hidden";
}

addBtn.addEventListener("click", add);

function add(){
    console.log("hai fatto click sul +")
    count++;
    myNumber.innerHTML=count;
    
}

minusBtn.addEventListener("click", subtract);

function subtract(){
    
    count--; 
    myNumber.innerHTML=count;

}

resetBtn.addEventListener("click", restore);

function restore(){
    
    count= 0;
    myNumber.innerHTML=count;
}



sendButton.addEventListener("click", sendYourNumber);



function sendYourNumber(){
   

    if (myNumber.innerHTML == numRandom){
       
        myScore++;
        boxMyScore.innerHTML=myScore;
        result.style.visibility="visible";
        result.innerHTML= "<p> Congratulations, you guessed the number</p>";
        document.querySelector(".result p").classList.add("win");



    } else{
        
        cpuScore++;
        boxCpuScore.innerHTML=cpuScore;
        result.style.visibility="visible";
        result.innerHTML= "<p>Failed attempt!</p>";
        document.querySelector(".result p").classList.add("lost");
        numCpu.style.visibility="visible";

    }

}











