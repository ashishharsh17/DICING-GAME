var num=[1,2,3,4,5,6];
var x=Math.floor(Math.random()*num.length+1);
var y=Math.floor(Math.random()*num.length+1);

if(x==1){
  document.querySelector(".img1").src="images/dice1.png";
}
else if(x==2){
  document.querySelector(".img1").src="images/dice2.png";
}
else if(x==3){
document.querySelector(".img1").src="images/dice3.png";
}
else if(x==4){
  document.querySelector(".img1").src="images/dice4.png";
}
else if(x==5){
  document.querySelector(".img1").src="images/dice5.png";
}
else if(x==6){
  document.querySelector(".img1").src="images/dice6.png";
}
if(y==1){
  document.querySelector(".img2").src="images/dice1.png";
}
else if(y==2){
  document.querySelector(".img2").src="images/dice2.png";
}
else if(y==3){
document.querySelector(".img2").src="images/dice3.png";
}
else if(y==4){
  document.querySelector(".img2").src="images/dice4.png";
}
else if(y==5){
  document.querySelector(".img2").src="images/dice5.png";
}
else if(y==6){
  document.querySelector(".img2").src="images/dice6.png";
}


if(x==y){
  document.querySelector("h1").innerHTML="DRAW";
}
else if(x>y){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else{
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
