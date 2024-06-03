const knuffelenButton = document.querySelector('.Knuffelenknop');
const pestenButton = document.querySelector('.Pestenknop');
const slaanButton = document.querySelector('.Slaanknop');
const gameOverButton = document.querySelector('#gameover');
const resetButton = document.getElementById('reset');

// Initialize a counter variable
let counter = 0;

// Function to update the images based on the counter value and button type
function updateImages(action) {
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
    // Show the game over button
    gameOverButton.style.display = 'flex';
  }
}

// Function to display reaction text and clear it after 1.5 seconds
function displayReaction(text) {
  const reactie = document.querySelector('.reacties p');
  reactie.textContent = text;

  setTimeout(() => {
    reactie.textContent = "";
  }, 1500);
}

// Add an event listener to the knuffelen button
knuffelenButton.addEventListener('click', () => {
  if (counter < 2) {
    counter++;
    updateImages('knuffelen');
    displayReaction("Yippie!");
  }
});

// Add an event listener to the pesten button
pestenButton.addEventListener('click', () => {
  counter--;
  updateImages('pesten');
  displayReaction("Stop!");
});

// Add an event listener to the slaan button
slaanButton.addEventListener('click', () => {
  counter--;
  updateImages('slaan');
  displayReaction("AUW!");
});

// Initially hide the game over button
gameOverButton.style.display = 'none';
resetButton.addEventListener('click', () => {
  // Reload the page
  window.location.reload();
});