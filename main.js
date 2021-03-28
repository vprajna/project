var roverx=0;
var rovery=0;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function add() {
  backgroundimg = new Image();
  rover = new Image();
  backgroundimg.src = "mars.jpg";
  rover.src = "rover.png";
  backgroundimg.onload = uploadbackground;
  rover.onload = uploadrover;
}
function uploadbackground() {
  ctx.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
  ctx.drawImage(rover,roverx, rovery, 100, 90);
}
window.addEventListener("keydown", fnkeydown);
function fnkeydown(e) {
  var keycode = e.keyCode;
  console.log(keycode);
  if(keycode==37){
 left();
  }
  if(keycode==38){
 up();
  }
  if(keycode==39){
right();
  }
  if(keycode==40){
down();
  }
}
function left(){
  console.log("moving left");
  if (roverx>0) {
    roverx=roverx-10;
  uploadbackground();
  uploadrover();
  }
}
function up(){
 console.log("moving up");
 if(rovery>0){
  rovery=rovery-10;
  uploadbackground();
  uploadrover();
 }

}
function right(){
  console.log("moving right");
 if (roverx<700) {
  roverx=roverx+10;
  uploadbackground();
  uploadrover(); 
 }
}
function down(){
  console.log("moving down");
  if (rovery<500) {
    rovery=rovery+10;
  uploadbackground();
  uploadrover();
  }
}