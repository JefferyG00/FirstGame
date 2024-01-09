const jsControlled = document.getElementById('js-controlled');

jsControlled.innerHTML = 'Sucessfully Controlled by JavaScript'

let btnRef = document.querySelectorAll("button-option")
let popupRef = document.querySelector(".popup");
let newgamneBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//winning Pattern Arrary
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3 ,4, 5],
    [1 ,4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
//player 'X' plays first
let xTurn = true;
let count = 0;

//Disable All Buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
    disableButtons();
};

//Win Logic
const winChecker = () => {
    //Loop through all win patterns
    for ( let i of winningPattern) {
        let [element1, element2, element3] = [
          btnRef[i[0]].innerText,
          btnRef[i[1]].innerText,
          btnRef[i[2]].innerText,
        ];
        //check if elemrnts are filled
        //If 3 empty elements are same and would give win as would
        if (element1 != "" && element2 != "") & (element3 != "") {
            if (element1 == element2 && element2 == element3) {
            //If all 3 buttons have same values then pass the value to winFunction
            winFunction(element1);
        }
    }
}

//Display X/0 on click
btnRef.forEach((element) => {
    element.addEventListener("click," () => {
    if (xTurn) {
     xTurn = false;
     //Display X
     element.innerText = "X";
     element.disabled = true;
     } else {
     xTurn = true;
     //Display Y
     element.innerText = "O";
     element.disabled = true;
}
//Increment count on each click
count += 1;
if (count === 9){
  //It's a draw since there are a total of 9 boxed
}
//Check for win on every click
winChecker();
 });
});