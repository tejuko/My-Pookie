const knuffelenButton = document.querySelector('.Knuffelenknop');
const pestenButton = document.querySelector('.Pestenknop');
const slaanButton = document.querySelector('.Slaanknop');
const gameOverButton = document.querySelector('#gameover');
const resetButton = document.getElementById('reset');

let counter = 0;

function updateImages() {
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
  } else if (counter === -2) {
    hartImage.src = "images/hartx.png";
    pookieImage.src = counter <= -2 ? "images/Sad_pookie.png" : "images/Neutral_pookie.png";
  } else if (counter === -3) {
    hartImage.src = "images/hartx.png";
    pookieImage.src = counter <= -2 ? "images/Sadwalk_pookie.png" : "images/Neutral_pookie.png";
    // Show the game over button
    gameOverButton.style.display = 'flex';
  }
}

function displayReaction(text) {
  const reactie = document.querySelector('.reacties p');
  reactie.textContent = text;

  setTimeout(() => {
    reactie.textContent = "";
  }, 1500);
}

knuffelenButton.addEventListener('click', () => {
  if (counter < 2) {
    counter++;
    updateImages();
    displayReaction("Yippie!");
  }
});
//bron ChatGPT
//prompt: hoe zorg ik ervoor dat de counter nooit boven de 2 komt?

pestenButton.addEventListener('click', () => {
  if (counter > -3) {
    counter--;
    updateImages();
    displayReaction("Stop!");
  }
});

slaanButton.addEventListener('click', () => {
  if (counter > -3) {
    counter--;
    updateImages();
    displayReaction("AUW!");
  }
});

gameOverButton.style.display = 'none';
resetButton.addEventListener('click', () => {
  window.location.reload();
});