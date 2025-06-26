const initialTimer = document.querySelector('.timer-initial');
const screenInitialTimer = document.querySelector(".screen-timer-initial");
const screenGame = document.querySelector(".screen-game");

let timeRemaining = 3;

function updateTimer() {

   if (timeRemaining === -1) {
      screenInitialTimer.classList.add("invisible");
      screenGame.classList.remove("invisible");
      initialTimer.innerHTML = "";
      timeRemaining = 3;
   }

   if (!screenInitialTimer.classList.contains("invisible")) {
      initialTimer.innerHTML = timeRemaining === 0 ? "JA!" : timeRemaining;

      // Reinicia a animação
      initialTimer.classList.remove("timer-animate");
      void initialTimer.offsetWidth; // Força o reflow do navegador
      initialTimer.classList.add("timer-animate");

      timeRemaining--;
   }
}

let timerInterval = setInterval(updateTimer, 1050);
