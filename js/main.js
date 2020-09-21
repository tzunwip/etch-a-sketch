function generateStart() {
  const newInputDiv = document.createElement("div");
  newInputDiv.setAttribute("class", "input");

  const newInputTitle = document.createElement("div");
  newInputTitle.setAttribute("class", "input__title");
  newInputTitle.textContent = `Etch-a-Sketch`;

  const newInputLabel = document.createElement("div");
  newInputLabel.setAttribute("class", "input__label");
  newInputLabel.textContent = "Enter tiles per side:";

  const newInputBox = document.createElement("input");
  newInputBox.setAttribute("class", "input__box");
  newInputBox.setAttribute("placeholder", "64");
  newInputBox.addEventListener("change", () => {
    if (Number.parseInt(newInputBox.value) > 0) {
    body.textContent = "";
    generateCanvas(Number.parseInt(newInputBox.value));
    } else {
      console.log("input error");
      alert("Please enter a number");
    }
  });

  const newCanvas = document.createElement("div");
  newCanvas.setAttribute("class", "canvas");

  newInputDiv.appendChild(newInputTitle);
  newInputDiv.appendChild(newInputLabel);
  newInputDiv.appendChild(newInputBox);
  
  body.appendChild(newInputDiv);
}

function generateCanvas(canvasLength) {
  const newContainer = document.createElement("div");
  newContainer.setAttribute("class", "container");

  const newBtnContainer = document.createElement("div");
  newBtnContainer.setAttribute("class", "btnContainer");

  const newRestartBtn = document.createElement("button");
  newRestartBtn.setAttribute("class", "restartBtn btn");
  newRestartBtn.textContent = "Restart";
  newRestartBtn.addEventListener("click", () => {
    body.textContent = "";
    generateStart();
  });

  const newClearBtn = document.createElement("button");
  newClearBtn.setAttribute("class", "clearBtn btn");
  newClearBtn.textContent = "Clear";
  newClearBtn.addEventListener("click", () => {
    let oldTiles = document.querySelectorAll(".canvas__tile");
    oldTiles.forEach((oldTile) => {
      oldTile.style.background = "inherit";
    });

    penRGB = 25;
  });

  const newCanvas = document.createElement("div");
  newCanvas.setAttribute("class", "canvas");
  newCanvas.setAttribute("style", 
    `grid-template-columns: repeat(${canvasLength}, 1fr);
    grid-template-rows: repeat(${canvasLength}, 1fr)`);
  
  let penRGB = 25;
  
  for (i = 1; i <= canvasLength**2; i++) {
    const newTile = document.createElement("div");

    function applyInk() {
      newTile.style.background = `RGB(${penRGB},${penRGB},${penRGB})`;
      if (penRGB < 250) {penRGB += 25;};
    };

    newTile.setAttribute("class", "canvas__tile");
    newTile.setAttribute("id", `tile${i}`);
    newTile.addEventListener("mouseover", () => {
      this.onkeydown = applyInk;
      this.onclick = applyInk;
    })
    newCanvas.appendChild(newTile);
  }

  const newInstructions = document.createElement("div");
  newInstructions.setAttribute("class", "instructions");
  newInstructions.innerHTML = "<span>Instructions: </span><span>Hover over canvas, click or hold any keyboard key to draw. Have fun!</span>";

  newBtnContainer.appendChild(newRestartBtn);
  newBtnContainer.appendChild(newClearBtn);

  newContainer.appendChild(newBtnContainer);
  newContainer.appendChild(newCanvas);
  newContainer.appendChild(newInstructions);

  body.appendChild(newContainer);
}

const body = document.querySelector("body");
generateStart();