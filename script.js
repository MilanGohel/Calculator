// const display = document.querySelector('#display')
// const buttons = document.querySelector("button")

// buttons.forEach((item)=>{
//     item.onclick = () =>{
//         if(item.id == "clear"){
//             display.innerText = "";
//         }else if(item.id == "backspace"){
//             let string = display.innerText.toString();
//             display.innerText = string.substr(0,string.length - 1)
//         }else if(display.innerText == "" && item.id == "equal"){
//             display.innerText = "Empty!"
//             setTimeout(() => (display.innerText = ""),2000)
//         }else{
//             display.innerText += item.id;
//         }
//     }
// })

// const themeToggleBtn = document.querySelector(".theme-toggler")
// const calculator = document.querySelector(".calculator")
// const toggleIcon = document.querySelector(".toggler-icon")
// let isDark = true;
// themeToggleBtn.onclick = () => {
//     calculator.classList.toggle("dark");
//     themeToggleBtn.classList.toggle("active")
//     isDark = !isDark;
// };

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const sign = document.querySelector("#operator")
display.innerText = "0";
let firstNumber = 0;
let secondNumber = 0;
let operation = "";
let memory = 0;

buttons.forEach((item) => {
  item.onclick = () => {
    console.log(memory);
    if(item.id === "-" || item.id === "+" || item.id === "*" || item.id === "/"){
      sign.innerText = item.id;
      let str = display.innerText.toString();
      firstNumber = Number(str);
      operation = item.id;
      display.innerText = "0";
      // display.innerText = "";
    }
    else if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id == "backspace" && display.innerText !== "0") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id == "backspace" && display.innerText === "0") {

    } else if (display.innerText != "" && item.id == "equal") {
      secondNumber = Number(display.innerText);
      switch(operation){
        case "+":
          display.innerText = firstNumber + secondNumber;
          break;
        case "-":
          display.innerText = firstNumber - secondNumber;
          break;
        case "/":
          display.innerText = firstNumber / secondNumber;
          break;
        case "*":
          display.innerText = firstNumber * secondNumber;
          break;
      }
      sign.innerText = "="
      // display.innerText = firstNumber;
    } else if (display.innerText === "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if(item.id === "M+" && display.innerText !== ""){
      display.innerText = eval(display.innerText);
      memory += Number(display.innerText);
    } else if(item.id === "M-" && display.innerText !== ""){
      display.innerText = eval(display.innerText);
      memory -= Number(display.innerText);
    } else if(item.id === "MR"){
      display.innerText = memory.toString();
    } else if(item.id === "MC"){
      memory = 0;
    } else {
      if(display.innerText !== "0" && item.id !== "0"){
        display.innerText += item.id;
      }
      else if(display.innerText === "0" && item.id !== "0")
        display.innerText = item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
const stringScreen = display.innerText.toString();

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  stringScreen.style.color = "white";
  // sign.style.color = "white";
  isDark = !isDark;
}