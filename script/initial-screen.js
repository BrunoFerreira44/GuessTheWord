const myScreenInitial2 = document.querySelector(".screen-initial");
const myScreenTimerInitial2 = document.querySelector(".screen-timer-initial");
const btnStart = document.querySelector(".button-start");

btnStart.addEventListener('click', () => {

   const header = myScreenInitial2.querySelector('h2');
   const footer = myScreenInitial2.querySelector('footer');


   btnStart.classList.remove('slide-in-left');

   // Aplica as animações de saída
   header.classList.add('slide-out-top');
   footer.classList.add('slide-out-bottom');
   btnStart.classList.add('slide-out-right');


   setTimeout(() => {
      myScreenTimerInitial2.classList.remove("invisible");
      myScreenInitial2.classList.add("invisible");

      header.classList.remove('slide-out-top');
      footer.classList.remove('slide-out-bottom');
      btnStart.classList.remove('slide-out-right');

      btnStart.classList.add('slide-in-left');

   }, 500);
});