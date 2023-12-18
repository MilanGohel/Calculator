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
let memory = 0;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
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
      display.innerText += item.id;
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
  isDark = !isDark;
}