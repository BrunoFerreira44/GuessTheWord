const btnCancel = document.querySelector(".cancel");
const btnRetry = document.querySelector(".retry");

const screenGame2 = document.querySelector(".screen-game");
const screenInitial2 = document.querySelector(".screen-initial");
const screenTimerInitial2 = document.querySelector(".screen-timer-initial");

btnCancel.addEventListener('click', () => {
   screenGame2.classList.add("invisible");
   screenInitial2.classList.remove("invisible");
});

btnRetry.addEventListener('click', () => {
   screenGame2.classList.add("invisible");
   screenTimerInitial2.classList.remove("invisible");
});