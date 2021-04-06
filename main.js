function setup() {
    canvas = createCanvas(700, 600);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
leftwristx = "";
leftwristy = "";
rightwristx = "";
rightwristy = "";
scoreleftwrist = "";
scorerightwrist = "";

function modelLoaded() {
    console.log("model has loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        scorerightwrist = results[0].pose.keypoints[10].score;
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("score left wrist=" + scoreleftwrist + ", score right wrist=" + scorerightwrist);
        console.log("left wrist x=" + leftwristx + ", left wrist y=" + leftwristy);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log(" right wrist x=" + rightwristx + ",  right wrist y=" + rightwristy);
    }
}

sound = "";

function draw() {
    image(Video, 0, 0, 700, 600);
    stroke("#ff4d88");
    fill("#ff4d88");
   if (scoreleftwrist>0.2) {
    circle(leftwristx, leftwristy, 30);
if (leftwristy>0 && leftwristy<=100) {
    document.getElementById("volume").innerHTML="volume=0.1";
    sound.setVolume(0.1);
}
if (leftwristy>100 && leftwristy<=200) {
    document.getElementById("volume").innerHTML="volume=0.3";
    sound.setVolume(0.3);
}
if (leftwristy>200 && leftwristy<=300) {
    document.getElementById("volume").innerHTML="volume=0.5";
    sound.setVolume(0.5);
}
if (leftwristy>300 && leftwristy<=400) {
    document.getElementById("volume").innerHTML="volume=0.7";
    sound.setVolume(0.7);
}
if (leftwristy>400 && leftwristy<=500) {
    document.getElementById("volume").innerHTML="volume=0.9";
    sound.setVolume(0.9);
}
if (leftwristy>500) {
    document.getElementById("volume").innerHTML="volume=1";
    sound.setVolume(1);
}

   }
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
