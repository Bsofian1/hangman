const End = (_ => {
    const state = {
        choseWord: null,
        winOrLose: null
    }

   const $hangman = document.querySelector(".hangman")

     const setState = obj => {
          state.choseWord = obj.chosenWord;
          state.winOrLose = obj.result;
        render();
     }

     const render = _ => {
          let markup = `
          <h1 class="hangman__title"> GAME OVER, YOU ${state.winOrLose.toUpperCase()}!!!</h1>
          <p class="result" > the word is : ${state.choseWord.toUpperCase()}</p>
          <button class="button hangman__trigger"> Main Menu</button>
          `
          $hangman.innerHTML = markup;
     }

     return {
         setState
     }
})();

export default End;