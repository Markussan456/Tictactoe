const gameboard = (()=>{




let gameboard = ["-","-","-",
                 "-","-","-",
                 "-","-","-"];

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
gameboard[index] = symbol;
if(symbol == "x"){
    gameboardcheckz[index] = true;
}else if (symbol == "o"){
    gameboardcheckz[index] = false;
    
}
checkwin();
};



const playerchoice = ()=>{
    console.clear();
    showboard();
    if(!gameboardcheckz.includes(null)) return; //Checks if board isnt full 
const indexo = prompt("Where do you want to put the X?")
if(gameboardcheckz[indexo] == null){
changesymbol(indexo,"x");
}else if (gameboardcheckz[indexo] !== null){
    playerchoice();
}



};



const computerchoice =  ()=>{
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
if(gameboard[a] === gameboard[b]&&
    gameboard[b] == gameboard[c]&&
    gameboard[a] !== "-"){
        gamended = true;
        console.clear();
        showboard();
         console.log("And the winner is -> " + gameboard[a]);
         return;
    }
};
if(!gameboard.includes == "-"){
    console.log("DRAW!")
    gamended = true;
}
};

const restart = ()=>{
gameboard = ["-","-","-",
                 "-","-","-",
                 "-","-","-"];

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
playround,restart

};







})();
let againbtn = document.getElementById("playagbtn");
let playbtn = document.getElementById("playbtn");
playbtn.addEventListener("click",()=>{
gameboard.playround();

});
againbtn.addEventListener("click",()=>{
gameboard.restart();
});
