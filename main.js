noseX = 0;
noseY = 0;
answer = [];
function preload(){
    boy = loadImage('https://i.postimg.cc/cCsYGZTh/BOY.png');
    girl = loadImage('https://i.postimg.cc/XJkzKfJv/lipstick.png');
}

function setup(){
    Canvas = createCanvas(300 , 300);
    Canvas.center()
    cam = createCapture(VIDEO);
    cam.size(300 , 300);
    cam.hide();
    PoseNet = ml5.poseNet(cam , loaded);
    PoseNet.on('pose' , gotPoses);
}

function loaded(){
    console.log("Pose Net Initialized!");
}

function draw(){
    image(cam , 0 , 0 , 300 , 300);
    opt = document.getElementById("drop1").value;
    if(opt == "BOY"){
        noseX = answer[0].pose.nose.x - 50;
        noseY = answer[0].pose.nose.y;
        image(boy , noseX , noseY , 100 , 40);
    }
    else{
        noseX = answer[0].pose.nose.x - 23;
        noseY = answer[0].pose.nose.y + 10;
        image(girl , noseX , noseY , 55 , 35);
    }
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        answer = result;
    }
}

function save1(){
    save('filter.png');
}