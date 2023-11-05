

const addcontainer = document.getElementById('container');
const colors  = ["#FF0000","#000080","#0000FF","#00FFFF",
                "#008000","#FFFF00","#000000","#DE3163"];
const myColors = [...colors,...colors]
shuffleArray(myColors);

function shuffleArray(array) {
     for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
     }
     createCard(array);
}

let flippedCards = [];
let matchCount = 0;

function createCard(randomArr) {
     for (let i = 0; i < randomArr.length; i++) {
          const card = document.createElement("div");
         
          card.setAttribute("id", i);
          card.classList.add('cardback');
          card.classList.add('active');
          addcontainer.appendChild(card);
          card.addEventListener('click', flipCard);
     }
}

function flipCard() {
     if (flippedCards.length < 2 && this.classList.contains('active')) {
          const cardId = this.getAttribute('id');
          flippedCards.push(this);
          this.classList.toggle('cardback');
          this.style.backgroundColor = myColors[cardId];
          if (flippedCards.length === 2) {
          setTimeout(checkMatch, 1000);
          }
     }
}
let score = 0;
function updatescore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = 'score:' + score;
}

function checkMatch() {
     const card1Id = flippedCards[0].getAttribute('id');
     const card2Id = flippedCards[1].getAttribute('id');
     if (myColors[card1Id] === myColors[card2Id]) {
          flippedCards.forEach(card => card.classList.remove('active'));   
          matchCount += 2;
          score +=1;
          updatescore();
          checkGameOver();
     } else {
          flippedCards.forEach(card => {
          card.classList.toggle('cardback');
          card.style.backgroundColor = '';
          });
     }
       flippedCards = [];
}
let timer = 0; 
function updateTimer() {
    const time = document.getElementById("timer");
    time.textContent = timer;
    timer++;
}


window.onload = function() {
    setInterval(updateTimer, 1000); 
};


function checkGameOver() {
     if (matchCount === myColors.length) {
          while(addcontainer.firstChild){
               addcontainer.removeChild(addcontainer.firstChild)
          }
          addcontainer.innerHTML = 'YOU WON';

         
          const finalScore = score;
          const finalTimer = timer;
          window.location.href = `page2.html?score=${finalScore}&timer=${finalTimer}`;
     }
}



     
   
   
