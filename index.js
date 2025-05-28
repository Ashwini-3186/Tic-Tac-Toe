let boxes = document.querySelectorAll(".cell");
let resetbut = document.querySelector("#reset");
let newgbut = document.querySelector("#newgm");
let msgp = document.querySelector("#msg");
let msgc = document.querySelector(".msg-cont");

let turnx = true;
let gameOver = false;
let moveCount = 0;

const winpatrn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const showWinner = (winner) => {
    msgp.innerText = `congratulation winner is : ${winner}`;
    msgc.classList.remove("hide");
    gameOver = true;
};

const showDraw = () => {
    msgp.innerText = "It's a draw!";
    msgc.classList.remove("hide");
    gameOver = true;
};
//
const checkwinner = () => {
    for (let pat of winpatrn) {
        let v1 = boxes[pat[0]].innerText;
        let v2 = boxes[pat[1]].innerText;
        let v3 = boxes[pat[2]].innerText;
        if (v1 !== "" && v1 === v2 && v2 === v3) {
            showWinner(v1);
            return;
        }
    }
    // Draw check 
    if (moveCount === 9) {
        showDraw();
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (gameOver || box.innerText !== "") return;
        if (turnx) {
            box.innerText = "X";
            turnx = false;
        } else {
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        moveCount++;
        checkwinner();
    });
});

const resetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnx = true;
    gameOver = false;
    moveCount = 0;
    msgc.classList.add("hide");
};

resetbut.addEventListener('click', resetGame);
newgbut.addEventListener('click', resetGame);


