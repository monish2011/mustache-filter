noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('data:image/jpeg;base64,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');


}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();   
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);


} 
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
console.log("Pose Net is initialized!");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
}
}