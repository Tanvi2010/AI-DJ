function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
leftwristx="";
leftwristy="";
rightwristx="";
rightwristy="";

function modelLoaded() {
    console.log("model has loaded");
}

function gotPoses(results) {
    if (results.length>0) {
        leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log("left wrist x=" + leftwristx+", left wrist y=" + leftwristy);
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log(" right wrist x=" +  rightwristx+",  right wrist y=" +  rightwristy);
    }
}

sound = "";

function draw() {
    image(Video, 0, 0, 600, 500);
    stroke("#ff4d88");
    fill("#ff4d88");
    circle(rightwristx,rightwristy,30);
}

function preload() {
    sound = loadSound("music.mp3");
}

function play() {
    sound.play();
    sound.setVolume(0.5);
    sound.rate(1);

}

function pause() {
    sound.pause();
}
