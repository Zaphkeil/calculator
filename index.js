const calculatorlink = document.querySelector(".calculatorlink");
const randomlink = document.querySelector(".randomlink");
const githublink = document.querySelector(".githublink");

calculatorlink.addEventListener("click", function(){
	 window.location.href = 'https://zaphkeil.github.io/calculator/calculator/';
});

randomlink.addEventListener("click", function(){
    window.location.href = 'https://zaphkeil.github.io/calculator/randomtool/index.html';

});

githublink.addEventListener("click", function(){
    window.open('https://github.com/Zaphkeil/calculator');
});

