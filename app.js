let gameSeq =[];
let userSeq =[];

let btns =["yellow","red","purple","green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    // console.log("game started");
    if(started==false){
        console.log("game is stared");
        started = true;
        levelUp()
    }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },500);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },500);
}


function levelUp(){
  userSeq = [];
  level++;
    h2.innerText = `Level ${level}`

    let ranIdx = Math.floor(Math.random() * 3)
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`)

    // console.log("ranIdx",ranIdx);
    // console.log("ranColor",ranColor);
    // console.log("ranbtn",ranbtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    //random btn choose
  gameFlash(ranbtn);
}

function checkAns(idx){
  // console.log("current level", level);
  // let idx = level - 1;
  if(userSeq[idx] == gameSeq[idx] ){
    // console.log("same value");
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
    }
  } else{
    h2.innerHTML = `Game Over !Your score was <b> ${level} </b> <br> Press any key to start.`
    reset();
  }
}

function btnPress(){
   // console.log("btn was pressed");
  //  console.log(this);
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress); 
}


function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}