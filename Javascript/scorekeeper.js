var oneButton = document.querySelector("#one");
var twoButton = document.querySelector("#two");
var oneDis = document.querySelector("#oneDis");
var twoDis = document.querySelector("#twoDis");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var para = document.querySelector("p span")
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore =5;

oneButton.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningScore)
		{
			oneDis.style.color = "green";
			gameOver = true;
		}
     oneDis.textContent = p1score;	
	}
});

twoButton.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningScore){
			twoDis.style.color = "green";
			gameOver = true;
		}
     twoDis.textContent = p2score;
	}
});

reset.addEventListener("click",function(){
    reset1();
});

function reset1(){
   p1score =0;
   p2score=0;
   oneDis.textContent =0;
   twoDis.textContent=0;
   oneDis.classList.remove("winner");
   twoDis.classList.remove("winner");
   gameOver = false;
}

input.addEventListener("change",function(){
    para.textContent = input.value;
    winningScore = Number(input.value);
    reset1();
});