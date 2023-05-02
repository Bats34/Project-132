imgt="";
status="";
objectDetector="";

function preload() {
    imgt=loadImage('picture_2.jpg');

}
function setup() {
    canvas=createCanvas(500,430);
    canvas.position(410,230);
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model has loaded!!");
    status=true;
    objectDetector.detect(imgt,gotResult);
}
function draw() {
    image(imgt,0,0,500,430);
}
function gotResult(error,results) {
    if(error) {
        console.error(error);
    }else{
        console.log(results);
    }
    }
