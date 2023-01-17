function createGrid(size) {
  container = document.getElementById("container");

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

createGrid(16);
