const start = document.getElementById("refbutton");

// Add a click event listener
refbutton.addEventListener("click", function () {
  // Redirect to another page
  window.location.href = "game.html";
}); 

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const score = urlParams.get('score');
  const timer = urlParams.get('timer');
  
  const resultElement = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const timerElement = document.getElementById('timer');
  
  if (score !== null && timer !== null) {
      resultElement.textContent = 'YOU WON';
      scoreElement.textContent = `Final Score: ${score}`;
      timerElement.textContent = `Final Timer: ${timer} seconds`;
  }
};