const DEFAULT_MODE = "black";

let currentMode;

function createGrid(size) {
  container = document.getElementById("container");
  container.replaceChildren();

  if (!size) {
    let newSize = prompt("Enter new grid size (max 100)");
    if (newSize > 100) newSize = 100;
    size = parseInt(newSize);
  }

  for (let y = 0; y < size; y++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let x = 0; x < size; x++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.darken = 0;
      row.append(square);
    }

    container.append(row);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", () => changeColour(square))
  );
}

function resetGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
    square.darken = 0;
  });
}

function changePenMode(mode) {
  const oldMode = document.querySelector(".active");
  if (oldMode) oldMode.classList.remove("active");

  document.getElementById(mode).classList.toggle("active");
  currentMode = mode;
}

function changeColour(square) {
  if (currentMode === "black") {
    square.style.backgroundColor = "black";
  } else if (currentMode === "random") {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  } else if (currentMode === "darken") {
    square.darken += 0.1;
    square.style.backgroundColor = `rgb(0, 0, 0, ${square.darken})`;
  } else {
    square.style.backgroundColor = "white";
  }
}

const gridSizeButton = document.querySelector(".grid-size");
gridSizeButton.addEventListener("click", () => createGrid());

const penModeButtons = document.querySelectorAll("#modes > button");
penModeButtons.forEach((button) => {
  button.addEventListener("click", () => changePenMode(button.id));
});

const resetGridButton = document.querySelector(".reset-grid");
resetGridButton.addEventListener("click", resetGrid);

createGrid(16);
changePenMode(DEFAULT_MODE);
