img="";
status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    object_detector.detect(img,gotResults);

}
function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
}

function draw(){
    image(img,0,0,600,400);
    fill("red");
    text("Dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);

    fill("red");
    text("cat",320,120);
    noFill();
    stroke("red");
    rect(300,90,270,320);

}