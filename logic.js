const gameboard = (()=>{
let label = document.getElementById("winorlose");






let gameboardcheckz = [null,null,null,null,null,null,null,null,null,];

let gamended = false;

let winningcombos = [
     [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // main diagonal
  [2, 4, 6]  // anti-diagonal
];


const showboard = ()=>{
    
    console.log(gameboard[0],gameboard[1],gameboard[2]);
    console.log(gameboard[3],gameboard[4],gameboard[5]);
    console.log(gameboard[6],gameboard[7],gameboard[8])
};



const changesymbol = (index,symbol)=>{
displaycontroller.squares[index].textContent = symbol;
if(symbol == "x"){
    gameboardcheckz[index] = true;
}else if (symbol == "o"){
    gameboardcheckz[index] = false;
    
}
checkwin();
};



const playerchoice = (indexo)=>{
    if(gamended) return;
    console.clear();
    showboard();
    if(!gameboardcheckz.includes(null)) return; //Checks if board isnt full 

if(gameboardcheckz[indexo] == null){
changesymbol(indexo,"x");
}else if (gameboardcheckz[indexo] !== null){
    playerchoice();
}



};



const computerchoice =  ()=>{
    if(gamended) return;
    if(!gameboardcheckz.includes(null)) return; //Checks if board isnt full 

let randnum = Math.floor(Math.random()*9);

if(gameboardcheckz[randnum] == null){
    changesymbol(randnum,"o");

}else if (gameboardcheckz[randnum] !== null){
    computerchoice();
}
};

const checkwin = ()=>{
for (let [a,b,c] of winningcombos){
if(displaycontroller.squares[a].textContent === displaycontroller.squares[b].textContent&&
    displaycontroller.squares[b].textContent == displaycontroller.squares[c].textContent&&
    displaycontroller.squares[a].textContent !== ""){
        gamended = true;
        console.clear();
        showboard();
        
         label.textContent ="And the winner is -> " + displaycontroller.squares[a].textContent;
         return;
    }
};
if(!gameboardcheckz.includes(null)){
    label.textContent = "DRAW!";
    gamended = true;
}
};

const restart = ()=>{
for(let i of displaycontroller.squares){
    i.textContent ="";

}

label.textContent = "";
gameboardcheckz = [null,null,null,null,null,null,null,null,null,];
gamended = false;
playround();
};

const playround = ()=>{
   if (gamended) return;
playerchoice();
if(gamended) return;
computerchoice();
if(gamended) return;
console.clear();
showboard();
    

};

return {
playround,restart,playerchoice,computerchoice,showboard,gamended

};







})();
let againbtn = document.getElementById("playagbtn");

againbtn.addEventListener("click",()=>{
gameboard.restart();
});


const displaycontroller = (()=>{
    const squares = [];
const domboard = () => {
let kont = document.getElementById("contiks");
for(let i = 0;i <9;i++){
let square = document.createElement("div");
square.classList.add("squares");
square.id = `square-${i}`;

kont.appendChild(square);
squares.push(square);
square.addEventListener("click",()=>{
    if (gameboard.gamended) return;
gameboard.playerchoice(i);
if(gameboard.gamended) return;
gameboard.computerchoice();
if(gameboard.gamended) return;
console.clear();
gameboard.showboard();
});
}



};
domboard();
return{
squares
};
})();