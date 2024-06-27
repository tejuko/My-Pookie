const knuffelenButton = document.querySelector('.Knuffelenknop'); 
const pestenButton = document.querySelector('.Pestenknop');       
const slaanButton = document.querySelector('.Slaanknop');         
const gameOverButton = document.querySelector('#gameover');       
const resetButton = document.getElementById('reset');

let counter = 0;

// ChatGPT
// prompt: "Hoe zorg ik ervoor dat ik bij de slaan en pesten knop een andere image krijg"  
function updateImages(action) { // Functie om de afbeeldingen bij te werken op basis van de counter en action
  const hartImage = document.querySelector('#hart');
  const pookieImage = document.querySelector('#pookie'); 

  if (counter === 2) {
    hartImage.src = "images/hart100.png";              
    pookieImage.src = "images/Happy_pookie.png";       
  } else if (counter === 1) {
    hartImage.src = "images/hart66.png";             
    pookieImage.src = "images/Neutral_pookie.png";    
  } else if (counter === 0) {
    hartImage.src = "images/hart33.png";           
    pookieImage.src = "images/Neutral_pookie.png";    
  } else if (counter === -1) {
    hartImage.src = "images/hart0.png";           
    pookieImage.src = "images/Neutral_pookie.png"; 
// ChatGPT
// prompt: "Hoe zorg ik ervoor dat ik bij de slaan en pesten knop een andere image krijg"   
  } else if (counter === -2) {            
    hartImage.src = "images/hartx.png";   
    if (action === 'slaan') {
      pookieImage.src = "images/Angry_pookie.png";   
    } else if (action === 'pesten') {
      pookieImage.src = "images/Sad_pookie.png";  
    }
  } else if (counter === -3) {
    hartImage.src = "images/hartx.png";      
    if (action === 'slaan') {
      pookieImage.src = "images/Angrywalk_pookie.png"; 
    } else if (action === 'pesten') {
      pookieImage.src = "images/Sadwalk_pookie.png";  
    }
    gameOverButton.style.display = 'flex';    //laat de gameover "pagina"/knop zien
  }
}

//met hulp Diego
function displayReaction(text) {
  const reactie = document.querySelector('.reacties p'); 
  reactie.textContent = text;                         

  setTimeout(() => {
    reactie.textContent = "";   
  }, 1500);
}

//ChatGPT
//prompt: "Hoe zorg ik ervoor dat de counter nooit hoger dan 2 word"
// https://dlo.mijnhva.nl/d2l/le/content/536465/viewContent/2045350/View
function KnopKnuffelen() {
  if (counter < 2) {         //verhoogt de teller alleen wanneer deze minder is dan 2 
    counter++;                 
    updateImages('knuffelen');
    displayReaction("Yippie!"); 
  }
}

function KnopPesten() {
  counter--;                   
  updateImages('pesten');     
  displayReaction("Stop!");  
}

function KnopSlaan() {
  counter--;                    
  updateImages('slaan');     
  displayReaction("AUW!");     
}

gameOverButton.style.display = 'none'; //verbergt de game over knop

function opnieuw(){
  window.location.reload();  // bron: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
}

knuffelenButton.addEventListener('click', KnopKnuffelen);
pestenButton.addEventListener('click', KnopPesten);
slaanButton.addEventListener('click', KnopSlaan);
resetButton.addEventListener('click', opnieuw)