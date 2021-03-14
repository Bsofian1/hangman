import sound from "../data/sound.js";
import Home from "./home.js";
import End from "./end.js";
import Board from "./board.js";

const Game = ((_) => {
  // set the state
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const words = ["apple", "cat", "dog", "elephant", "fish", "letters"];
  let chosenWord;
  let guessingWord;
  let lives;
  let guesses;

  //cache the DOM
  const $hangman = document.querySelector(".hangman");

  const init = (_) => {
    chosenWord = chooseWord(words);
    guessingWord = Array(chosenWord.length).fill("_");
    guesses = [];
    lives = 7;
    // show the page;
    showTheInitPage();
    listeners();
    Board.init();
  };

  const listeners = (_) => {
    $hangman.addEventListener("click", function (e) {
      if (e.target.matches(".hangman__trigger")) {
        sound.click.play();
        Home.init();
      }
      if (e.target.matches(".hangman__letter")) {
        check(e.target.innerHTML);
        sound.click.play();
      }
    });
  };

  const isActiveLetter = (letter) => {
    if (guesses.includes(letter)) {
      return true;
    } else {
      false;
    }
  };

  const check = (letter) => {
    if (isActiveLetter(letter)) return;
    guesses.push(letter);

    if (chosenWord.includes(letter)) {
      updateGuessingWord(letter);
    } else {
      lives--;
      Board.setLives(lives);
    }
    render();
    isGameOver();
  };

  function hasWon(_) {
    return guessingWord.join("") === chosenWord;
  }

  function hasLost(_) {
    return lives === 0;
  }

  const isGameOver = (_) => {
    if (hasLost()) {
      sound.lose.play;
      End.setState({
        chosenWord,
        result: "lost",
      });
    } else if (hasWon()) {
      sound.win.play;
      End.setState({
        chosenWord,
        result: "win",
      });
    }
  };

  const render = (_) => {
    document.querySelector(".hangman__lives").innerHTML = lives;
    document.querySelector(".hangman__word").innerHTML = guessingWord.join("");
    document.querySelector(".hangman__letters").innerHTML = createLetters();
  };

  const updateGuessingWord = (letter) => {
    chosenWord.split("").forEach((elem, index) => {
      if (elem === letter) {
        guessingWord[index] = elem;
      }
    });
  };

  const showTheInitPage = (_) => {
    let markup = "";
    markup += `
       <p class="hangman__stats">lives:
        <span class="hangman__lives">${lives}</span>
        </p>
        <h1 class="hangman__title">Hangman</h1>
        <canvas class="hangman__board">
        </canvas>
        <div class="hangman__word">
        ${guessingWord.join("")}
        </div>
        <p class="hangman__instructions">Pick an alphabet below to guess the whole word.</p>
        <ul class="hangman__letters">
        ${createLetters()}
        </ul> 
        <button class="button hangman__trigger">New Game</button>`;
    $hangman.innerHTML = markup;
  };

  const createLetters = (_) => {
    let markup = "";
    letters.forEach((letter) => {
      let isActive = isActiveLetter(letter) ? "hangman__letter--active" : "";
      markup += `<li class="hangman__letter ${isActive}">${letter}</li>`;
    });
    return markup;
  };

  const chooseWord = (arr) => {
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
  };

  return {
    init,
  };
})();

export default Game;
Game.init();
