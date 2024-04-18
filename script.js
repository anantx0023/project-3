var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function decreaseScore(){
  score-=5;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
      hitrn = Math.floor(Math.random()*10);
      document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = " ";

   for(var i = 1; i<=312; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
          if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
          }else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = `<h1>GAME OVER</h1>`;
          }
    },1000);
}

document.querySelector(".pbtm").addEventListener("click",function (dets) {
        var n = Number(dets.target.textContent);
        if(n===hitrn){
          increaseScore();
          makeBubble();
          getNewHit();
        }
        else{
          decreaseScore();
          makeBubble();
          getNewHit();
        }
});
runTimer();
makeBubble();
getNewHit();
