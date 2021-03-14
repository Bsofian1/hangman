const Board = ((_) => {
  let livesLeft = null;
  let canvas;
  let context;

  const init = (_) => {
    canvas = document.querySelector(".hangman__board");
    context = canvas.getContext("2d");
    context.lineWidth = 3;
    context.strokeStyle = "white";
    line1();
    line2();
    line3();
  };

  const draw = (startX, startY, endX, endY) => {
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
  };

  const line1 = (_) => draw(0, 150, 150, 150);
  const line2 = (_) => draw(10, 0, 10, 300);
  const line3 = (_) => draw(0, 5, 70, 5);
  const rope = (_) => draw(60, 5, 60, 15);
  const head = (_) => {
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2);
    context.stroke()
  };
  const torso = (_) => draw(60, 36, 60, 70);
  const rightA = (_) => draw(60, 46, 100, 50);
  const leftA = (_) => draw(60, 46, 20, 50);
  const rightL = (_) => draw(60, 70, 100, 100);
  const leftL = (_) => draw(60, 70, 20, 100);

  const parts = [leftL, rightL, leftA, rightA, torso, head, rope];

  const setLives = (live) => {
    livesLeft = live;
    render();
  };

  const render = (_) => {
    parts[livesLeft]();
  };

  return {
    setLives,
    init,
  };
})();

export default Board;
