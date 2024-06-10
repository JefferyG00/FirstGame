document.addEventListener('DOMContentLoaded', () => {
  const jsControlled = document.getElementById('js-controlled');
  jsControlled.innerHTML = 'Successfully Controlled by JavaScript';

  const btnRef = [];
  const popupRef = document.querySelector(".popup");
  const newgameBtn = document.getElementById("new-game");
  const restartBtn = document.getElementById("restart");
  const msgRef = document.getElementById("message");
  const container = document.querySelector(".container");

  const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let xTurn = true;
  let count = 0;

  const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
  };

  const enableButtons = () => {
    btnRef.forEach((element) => {
      element.innerText = "";
      element.disabled = false;
    });
    popupRef.classList.add("hide");
  };

  const winFunction = (letter) => {
    disableButtons();
    msgRef.innerHTML = `&#x1F389; <br> '${letter}' Wins`;
  };

  const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
  };

  const checkWin = () => {
    for (let pattern of winningPattern) {
      let [a, b, c] = pattern;
      if (btnRef[a].innerText && btnRef[a].innerText === btnRef[b].innerText && btnRef[a].innerText === btnRef[c].innerText) {
        winFunction(btnRef[a].innerText);
        return true;
      }
    }
    return false;
  };

  const handleButtonClick = (button, index) => {
    if (!button.innerText) {
      button.innerText = xTurn ? "X" : "O";
      xTurn = !xTurn;
      count++;
      if (checkWin()) return;
      if (count === 9) drawFunction();
    }
  };

  const createBoard = () => {
    for (let i = 0; i < 9; i++) {
      const button = document.createElement('button');
      button.className = 'button-option';
      button.addEventListener('click', () => handleButtonClick(button, i));
      container.appendChild(button);
      btnRef.push(button);
    }
  };

  newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });

  restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });

  createBoard();
});
