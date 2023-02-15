const screen = document.querySelector(".screen");
screen.innerHTML = "0";

const calcButtons = document.querySelectorAll(".buttons > button");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["+", "-", "x", "/", "="];
const funcs = ["del", "reset"];

let savedScreen = "";
let lastOperation = "";
let wasLastOp = false;

calcButtons.forEach((calcButton) => {
  if (numbers.includes(calcButton.innerHTML)) {
    calcButton.addEventListener("click", (event) => {
      hundleNumber(calcButton.innerHTML);
      console.log("number button clicked " + calcButton.innerHTML);
    });
  } else if (operations.includes(calcButton.innerHTML)) {
    calcButton.addEventListener("click", (event) => {
      hundleOperation(calcButton.innerHTML);
      console.log("operation button clicked " + calcButton.innerHTML);
    });
  } else {
    //if (funcs.includes(calcButton.innerHTML))
    calcButton.addEventListener("click", (event) => {
      hundleFuncs(calcButton.innerHTML);
      console.log("funcs button clicked " + calcButton.innerHTML);
    });
  }
});

function hundleNumber(number) {
  if (wasEqual) {
    hundleFuncs("reset");
  }
  if (!wasLastOp) {
    if (screen.innerHTML.includes(".") && number == ".") return;

    if (screen.innerHTML == "0" && number != ".") {
      screen.innerHTML = number;
    } else {
      screen.innerHTML += number;
    }
  } else {
    savedScreen = screen.innerHTML;
    screen.innerHTML = number == "." ? "0." : number; // ternary operator
  }

  wasLastOp = false;
}

let wasEqual = false;

function hundleOperation(op) {
  if (lastOperation && !wasLastOp && (!wasEqual || op == "=")) {
    let result;
    if (lastOperation == "+") {
      result = Number(savedScreen) + Number(screen.innerHTML);
    } else if (lastOperation == "-") {
      if (wasEqual && op == "=") result = screen.innerHTML - savedScreen;
      else result = savedScreen - screen.innerHTML;
    } else if (lastOperation == "x") {
      result = savedScreen * screen.innerHTML;
    } else if (lastOperation == "/") {
      if (wasEqual && op == "=") result = screen.innerHTML / savedScreen;
      else result = savedScreen / screen.innerHTML;
    }
    savedScreen = op == "=" && wasEqual ? savedScreen : screen.innerHTML;
    screen.innerHTML = result;
  } //else if(){

  // }
  lastOperation = op == "=" ? lastOperation : op;
  wasLastOp = op == "=" ? false : true;
  wasEqual = op == "=";
}

function hundleFuncs(func) {
  if (func == "reset") {
    screen.innerHTML = "0";
    wasEqual = false;
    wasLastOp = false;
    savedScreen = "";
  } else if (func == "del") {
    if (!wasLastOp && !wasEqual) {
      let x = screen.innerHTML;
      screen.innerHTML = x.slice(0, -1);
      if (!screen.innerHTML) screen.innerHTML = "0";
    }
  }
}
