let buttonsContainer = document.querySelector(".buttons");
const computeBox = document.getElementById("compute");

let currentInput = "";
let prevInput = currentInput;
let currentOperator = "";
let operator = ["+", "-", "/", "x"];

let buttons = [
  { title: "7", value: 7 },
  { title: "8", value: 8 },
  { title: "9", value: 9 },
  { title: "DEL", value: "DEL" },
  { title: "4", value: 4 },
  { title: "5", value: 5 },
  { title: "6", value: 6 },
  { title: "+", value: "+" },
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
  { title: "-", value: "-" },
  { title: ".", value: "." },
  { title: "0", value: 0 },
  { title: "/", value: "/" },
  { title: "x", value: "x" },
  { title: "RESET", value: "RESET" },
  { title: "=", value: "=" },
];

for (let i = 0; i < buttons.length; i++) {
  const button = document.createElement("button");
  const item = buttons[i];
  button.innerText = item.title;
  button.dataset.value = item.value;
  button.classList.add("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const buttonValue = event.target.dataset.value;

    if (buttonValue === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (operator.includes(buttonValue)) {
      currentOperator = buttonValue;
      prevInput = currentInput;
      currentInput = "";
    } else if (buttonValue === "=") {
      if (currentOperator === "+") {
        return operate(prevInput, currentInput, currentOperator);
      }
      if (currentOperator === "-") {
        return operate(prevInput, currentInput, currentOperator);
      }
      if (currentOperator === "x") {
        return operate(prevInput, currentInput, currentOperator);
      }
      if (currentOperator === "/") {
        return operate(prevInput, currentInput, currentOperator);
      }
      currentInput = result;
    } else if (buttonValue === "RESET") {
      currentInput = "";
      result = "";
      prevInput = "";
    } else {
      currentInput += buttonValue;
    }

    computeBox.innerText = currentInput;
  });
  buttonsContainer.append(button);
}

function addition(value1, value2) {
  let result = value1 + value2;
  computeBox.innerText = result;
}

function subtract(value1, value2) {
  let result = value1 - value2;
  computeBox.innerText = result;
}

function multiply(value1, value2) {
  let result = value1 * value2;
  computeBox.innerText = result;
}

function divide(value1, value2) {
  let result = value1 / value2;
  computeBox.innerText = result;
}

function operate(a, b, operator) {
  let firstNum = parseFloat(a);
  let secondNum = parseFloat(b);
  if (operator === "+") return addition(firstNum, secondNum);
  if (operator === "-") return subtract(firstNum, secondNum);
  if (operator === "x") return multiply(firstNum, secondNum);
  if (operator === "/")
    return secondNum === 0 ? "Can't divide by 0!" : divide(firstNum, secondNum);
}

// const next=async()=>{
//   const res = await httpRequest()
//   operate()
//   multiply()
// }

/**
 *
 * @param {Event} event
 **/
function buttonClicked(event) {
  console.log(event.target.dataset.value);
}
