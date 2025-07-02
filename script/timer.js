const timer = document.querySelector('.timer');
const start = document.querySelector(".button-start");
const myScreenGame = document.querySelector(".screen-game");
const myScreenInitial = document.querySelector(".screen-initial");

let time = 90;

function timerUpdateFunc() {

   if (time == 0) {
      myScreenGame.classList.add("invisible");
      myScreenInitial.classList.remove("invisible");
      timer.innerHTML = 90;
      time = 90;
   }

   if (time !== 0 && !myScreenGame.classList.contains("invisible")) {
      time--;
      timer.innerHTML = time;
   }

   if (myScreenGame.classList.contains("invisible")) {
      time = 90;
      timer.innerHTML = 90;
   }
}

let runTimerUpdate = setInterval(timerUpdateFunc, 1000);