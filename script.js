let condition=true;
let guesses = [];
let misses = 0;
let guessInput;
let guessButton;
let hangmanWord;
let hangmanHint;
let randomWordObject;
let missArr = [];
let startTime;
let displayWord;

function randomWord() {
  if (!easterWords || easterWords.length === 0) {
    console.error('Words not loaded or empty array.');
    return null;
  }
  let randomIndex = Math.floor(Math.random() * easterWords.length);
  return easterWords[randomIndex];
};


function setup() {
  textFont(customFont);
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);

 guessInput = createInput();
 guessInput.position(50, 100);

  guessButton = createButton("Guess");
 guessButton.position(240, 100);
//guessInput=select("#myInput");
//guessButton=select("#myButton");
  guessButton.mousePressed(makeGuess);

  randomWordObject = randomWord();
  hangmanWord = randomWordObject.word;
  hangmanHint = randomWordObject.hint;
}
function styles(){
  guessButton.style()
}

function makeGuess() {
  let guessLetter = guessInput.value().toLowerCase();
  if (guessLetter.length !== 1 || !/[a-z]/.test(guessLetter)) return;
  if (!guesses.includes(guessLetter)) {
    guesses.push(guessLetter);
    if (!hangmanWord.includes(guessLetter)) {
      misses++;
      missArr.push(guessLetter);
    }
  } else {
    alert("You already guessed that letter");
  }
  guessInput.value("");
}


function draw() {
  background('#FCEEB5');
  //textSize(24);
  textSize(50);
  text("Easter themed Hangman", width / 3, 50);
  push();
  textSize(25);
  text("Hint: " + hangmanHint, 50, 150);
  pop();

   displayWord = "";
  for (let i = 0; i < hangmanWord.length; i++) {
    if (guesses.includes(hangmanWord[i])) {
      displayWord += hangmanWord[i];
    } else {
      displayWord += "_";
    }
    easterEggs();
    tree();
  }

  text(displayWord, 50, 250);
  textAlign(LEFT, TOP);
  push();
  textSize(24);
  text("Wrong guesses: ", 50, 200);
  const spacing = 15; // Adjust the spacing between missed letters
  const initialX = 200;
  for (let i = 0; i < misses; i++) {
    const x = initialX + (spacing * i);
    text(missArr[i], x, 200);
  }
  pop();
  strokeWeight(3);
  drawHangman();
  strokeWeight(1);
  if (displayWord === hangmanWord) {
    textSize(50);
    text("You win!", 50, 310);
    image(winImg, 220, 290, 60, 60);
    startTime=milis();
    //if (startTime===3000) return;

  } else if (misses >= 6) {
    push();
    textSize(50);
    text("You lost!", 50, 320);
    pop();
    textSize(25);
    text(`Answer: ${hangmanWord}`,50,370);
    image(loseImg, 240, 320, 50, 50);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    makeGuess();
  }
}
