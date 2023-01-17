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
      row.append(square);
    }

    container.append(row);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", () => changeColour(square))
  );
}

function changeColour(square) {
  square.style.backgroundColor = "black";
}

const gridSizeButton = document.querySelector(".grid-size");
gridSizeButton.addEventListener("click", () => createGrid());

createGrid(16);
