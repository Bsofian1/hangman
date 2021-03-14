import sound from "../data/sound.js"
import Home from "./home.js"

const How = ((_) => {
  const $hangman = document.querySelector(".hangman");
  const init = (_) => {
    render();
    listeners()
  };

  const render = _ => {
       let markup = `
       <h1 class="hangman__title"> Instructions</h1>
       <button class="button hangman__trigger">New Game</button>
       `

       $hangman.innerHTML = markup;
  }

  const listeners = _ => {
    $hangman.addEventListener("click", function (e) {
        if (e.target.matches(".hangman__trigger")) {
          sound.click.play();
          Home.init();
        }
  })
}

  return {
    init,
  };
})();

export default How;
