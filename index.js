const calculatorlink = document.querySelector(".calculatorlink");
const randomlink = document.querySelector(".randomlink");
const githublink = document.querySelector(".githublink");
const calculator_Js2 = document.querySelector(".gcalculator_Js2link");

calculatorlink.addEventListener("click", function(){
	 window.location.href = 'https://zaphkeil.github.io/calculator/calculator/';
});

randomlink.addEventListener("click", function(){
    window.location.href = 'https://zaphkeil.github.io/calculator/randomtool/index.html';

});

githublink.addEventListener("click", function(){
    window.open('https://github.com/Zaphkeil/calculator');
});

calculator_Js2link.addEventListener("click", function(){
    window.open('https://github.com/Zaphkeil/testcalculator');
});
