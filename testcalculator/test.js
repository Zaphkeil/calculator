/**querySelector 是選取class屬性 */
/**class 可在ＨＴＭＬ文件中被多次使用 */
/**const 為宣告一個函數，其中const 為不可重複宣告，且具有區塊性 */
const display1El = document.querySelector(".display-1");/*讀取html中的display-1按鈕*/
const display2El = document.querySelector(".display-2");/*讀取html中的display-2按鈕*/
const tempResultEl = document.querySelector(".temp-result");/*讀取html中的temp-result按鈕*/
const numbersEl = document.querySelectorAll(".number");/*讀取html中的number按鈕*/
const oops = document.querySelectorAll(".del")
const operationEl = document.querySelectorAll(".op");/*讀取html中的op按鈕*/
const EoperationEl = document.querySelectorAll(".eop")
const equalEl = document.querySelector(".equal");/*讀取html中的equal按鈕*/
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;/**是否有小數點 */
/**add~~為新增一個監聽事件，number為在這個宣告的函數下 */
/**疑問:在電腦上是無法按照字符排列的，可能使用了n1=n1*10+n2 = n1 n2*/


numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerHTML === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerHTML === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerHTML;
    display2El.innerText = dis2Num; 
    // console.log();
  });
});
oops.forEach((oops) => {
  oops.addEventListener("click", function(){
    dis2Num= dis2Num.substring(0, dis2Num.length - 1)
    display2El.innerText = dis2Num; 
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerHTML;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

EoperationEl.forEach((Eoperation) => {
  Eoperation.addEventListener("click", (e) => {
    if (lastOperation === "1/x")
    dis2Num = 1/dis2Num
    
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
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
  } else if (lastOperation === "÷") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  } else if (lastOperation === "x^n") {
    result = Math.pow(result , dis2Num);
  } else if (lastOperation === "n√x") {
      result = Math.pow(result , 1/dis2Num);
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

/**e.key 為偵測鍵盤行為，理由為div可以是字元，但button可以不用添加這函數 */
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