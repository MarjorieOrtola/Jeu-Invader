let selectedColor = "yellow";

function drawGrid(nbCells = 8, cellSize = 20) {
  const cellContainerElt = document.getElementById("invader");
  cellContainerElt.textContent = "";

  cellContainerElt.style.gridTemplateColumns = `repeat(${nbCells}, ${cellSize}px)`;
  cellContainerElt.style.gridTemplateRows = `repeat(${nbCells}, ${cellSize}px)`;

  for (let index = 0; index < nbCells * nbCells; index++) {
    const cellElt = document.createElement("div");
    cellElt.classList.add("cell");
    document.getElementById("invader").append(cellElt);

    cellElt.addEventListener("click", (event) => {
      const clikedCell = event.currentTarget;
      clikedCell.className = `cell color--${selectedColor}`;
    });
  }
}
const formElt = document.querySelector(".configuration");
formElt.addEventListener("submit", (SubmitEvent) => {
  SubmitEvent.preventDefault();

  const nbCellsFormUser = document.querySelector("#nbCellsByLine").value;
  const cellSizeInPixelFormUser =
    document.querySelector("#cellSizeInPixel").value;

  drawGrid(nbCellsFormUser, cellSizeInPixelFormUser);
});

const allBtnColors = document.querySelectorAll(".color");

function handleColorClick(event) {
  const oldBtnColor = document.querySelector(".color--selected");
  if (oldBtnColor) {
    oldBtnColor.classList.remove("color--selected");
  }
  const clickColorPalette = event.currentTarget;
  clickColorPalette.classList.add("color--selected");

  selectedColor = clickColorPalette.dataset.color;
}
for (const btnColor of allBtnColors) {
  btnColor.addEventListener("click", handleColorClick);
}
drawGrid();
