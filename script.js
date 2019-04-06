var p1btn=document.querySelector("#p1");
var p2btn=document.querySelector("#p2");
var resetbtn=document.querySelector("#reset");
var p1dis=document.querySelector("#p1dis");
var p2dis=document.querySelector("#p2dis");
var num=document.querySelector("input");
var p=document.querySelector("p");

var winningscoredis=document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameOver=false;
var winningScore=5;
p1btn.addEventListener("click", function(){
	if(!gameOver){
     p1score++;

if(p1score===winningScore){
	p1dis.classList.add("winner");
	gameOver=true;
}

     p1dis.textContent=p1score;
 }
});
p2btn.addEventListener("click", function(){
	if(!gameOver){
     p2score++;
     if(p2score===winningScore){
     		p2dis.classList.add("winner");

     	gameOver=true;
     }
     p2dis.textContent=p2score;
}
});
resetbtn.addEventListener("click",function(){
	reset();

});

function reset(){
	p1score=0;
	p2score=0;
	p1dis.textContent=0;
	p2dis.textContent=0;
	p1dis.classList.remove("winner");
	p2dis.classList.remove("winner");
	gameOver=false;
}
num.addEventListener("change",function(){
winningscoredis.textContent=num.value;
winningScore=Number(num.value);
});
 var x=document.getElementById("name");
x.addEventListener('change',function(){
document.getElementById('name1').textContent=x.value;
});
var x1=document.getElementById("namee");
x1.addEventListener('change',function(){
document.getElementById('name2').textContent=x1.value;
});
