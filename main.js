function setup(){
    canvas = createCanvas(400,400);
    canvas.position(400,300);
    

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 400, 400);
}
song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("never.mp3");
    song2 = loadSound("amongus.mp3");
}
function play(){
    song.play();
}