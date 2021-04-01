function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.hide();
}
sound="";

function draw() {
    image(Video,0,0,600,500);
}

function preload() {
   sound=loadSound("music.mp3"); 
}

function play() {
    sound.play();
}