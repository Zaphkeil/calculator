/**querySelector 是選取class屬性 */
/**class 可在ＨＴＭＬ文件中被多次使用 */
const lastDisplay = document.querySelector(".display-l");/**定義「顯示上一個計算結果」*/
const presentDisplay = document.querySelector(".display-p");/**定義「顯示計算結果」 */
const numbers = document.querySelector(".number")
const result = document.querySelector(".result");/**定義「結果」 */
const operation = document.querySelector(".operation");/**定義「運算方程式」 */
const equal =document.querySelector(".equal");/**定義「等於」 */
const clearall =document.querySelector(".clearall");/**定義「全部清除」 */
const clearlast = document.querySelector(".clearlast");/**定義「清除前一個數字」 */

let Num1 = "";/**定義第一個變數 */
let Num2 = "";/**定義第二個變數 */
let result = null;/**讓結果=無 */
let lastoperation = "";/**定義運算符號的變數 */
let dot =false ;/**定義小數點 */

/** 輸入數字*/
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if(e.target.innerText === "." && !havedot){
            havedot=ture;
        }
        else if (e.target.unnertext === "." && havedot)
            return;
        Num2 += e.target.innerText;
        presentDisplay.innerText =Num2;

    });
});

operationEl.forEach((operation) => {
    operation.addEventListener("click", (e) => {
      if (!Num2) return;
      haveDot = false;
      const operationName = e.target.innerText;
      if (Num1 && Num2 && lastOperation) {
        mathOperation();
      } else {
        result = parseFloat(Num2);
      }
      clearVar(operationName);
      lastOperation = operationName;
      console.log(result);
    });
  });
  function clearVar(name = "") {
    dis1Num += Num2 + " " + name + " ";
    lastDisplay.innerText = dis1Num;
    presentDisplay.innerText = "";
    dis2Num = "";
    tempResultEl.innerText = result;
  }
  
  function mathOperation() {
    if (lastOperation === "x") {
      result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
      result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
      result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
      result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
      result = parseFloat(result) % parseFloat(dis2Num);
    }
  }
  // operation();
  
  equalEl.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = "";
    dis2Num = result;
    dis1Num = "";
  });
  
  clearAllEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1El.innerText = "";
    display2El.innerText = "";
    result = "";
    tempResultEl.innerText = "";
  });
  
  clearLastEl.addEventListener("click", () => {
    display2El.innerText = "";
    dis2Num = "";
  });
  
  window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      clickButtonEl(e.key);
      // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
      clickOperation(e.key);
    } else if (e.key === "*") {
      clickOperation("x");
      // console.log(e.key)
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    // console.log(e.key)
  });
  function clickButtonEl(key) {
    numbersEl.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
  }
  function clickOperation(key) {
    operationEl.forEach((operation) => {
      if (operation.innerText === key) {
        operation.click();
      }
    });
  }
  function clickEqual() {
    equalEl.click();
  }





/** 
var value=0 
var Lvalue=0 
var answer=0 
function add(value,Lvalue){
    return(value+Lvalue)
}
<button onclick="add(3,3)"></button>
*/