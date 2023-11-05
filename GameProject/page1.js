const Container = document.getElementById("container");
const color = ["#FF0000","#000080","#0000FF","#00FFFF",
                "#008000","#FFFF00","#000000","#DE3163"];
// console.log(color);
const flippedcards = [];
let matchcount = 0;

const mycard = [...color, ...color];
shuffleCard(mycard);
// console.log(mycard);

function shuffleCard(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }  
    createdata(mycard);  
    
}
function createdata(randomArr){
    
    for(let i=0;i<randomArr.length;i++){
        const cardmatch = document.createElement("div");
        cardmatch.setAttribute("id", i);
        
        cardmatch.style.backgroundColor = randomArr[i]; 
        cardmatch.classList.add('cardback');
        cardmatch.classList.add('active');
        Container.appendChild(cardmatch);
        cardmatch.addEventListener('click',flipcard);
    
        
    }
            
}

function flipcard(){
    if(flippedcards.length < 2 && this.classList.contains('active')){
    let cardId = this.getAttribute('id');
    
    flippedcards.push(this);
    this.classList.remove('cardback');
    this.innerHtml = mycard[cardId].mycard;
    if(flippedcards.length==2){
        
        setTimeout(checkmatch, 1000);
    }

    }
    
}
function checkmatch(){
    const card1Id = flippedcards[0].getAttribute('id');
    const card2Id = flippedcards[1].getAttribute('id');
    if(mycard[card1Id] === mycard[card2Id]){
        flippedcards[0].style.border = 'none';
        flippedcards[0].style.backgroundColor = '#FFFFFF';
        flippedcards[0].innerHTML = '';
        flippedcards[0].classList.remove('active'); // Remove the click event listener
        flippedcards[1].classList.remove('active');
        flippedcards[1].style.border = 'none';
        flippedcards[1].style.backgroundColor = '#FFFFFF';
        flippedcards[1].innerHTML = '';
        matchcount++;
        gameover();
    }
    else{
        flippedcards[0].innerHTML = '';
        flippedcards[0].classList.add('cardback');
        flippedcards[1].innerHTML = '';
        flippedcards[1].classList.add('cardback');

    }
    flippedcards.length = 0;

}
function gameover(){
    if (matchcount == mycard.length/2){
        while(Container.firstChild){
            Container.removeChild(Container.firstChild)
        }
        Container.innerHTML = 'YOU WON';
        Container.classList.remove('cardDisplay');
        Container.classList.add('won');

    }
}


        











