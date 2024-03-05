// import Ship from "./gameLogic/ship.js";

// const destroyer = new Ship("destroyer", 2);
// const submarine = new Ship("submarine", 3);

// const ships = [destroyer, submarine];

export default function createBoard(color, user) {
  const contentDiv = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.add("gameBoard");
  container.style.backgroundColor = color;
  container.id = user;

  const size = 10;

  const gridSize = size * size;

  for (let i = 0; i < gridSize; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = i;

    container.appendChild(block);
  }

  contentDiv.appendChild(container);
}
createBoard("purple", "player");
createBoard("blue", "computer");
