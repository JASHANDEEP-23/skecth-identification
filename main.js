function preload(){
classifier = ml5.imageClassifier("DoodleNet")
}
function setup(){
canvas = createCanvas(580,430)
canvas.center();
background("white")
canvas.mouseReleased(classifyCanvas);
synth = window. speechSynthesis;



}
function clearCanvas() {
    background("white")
    document.getElementById("sketch_name").innerHTML = ""
    document.getElementById("confidence").innerHTML = ""
}
function draw(){
// SET STROKE WEIGHT TO 13
strokeWeight(13);
//set stroke color to black
stroke(0)
//if mouse is pressed, draw line between previous and current mouse positions
if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY)
}
}

function classifyCanvas() {
    classifier.classify(canvas,gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);

    }
    else{
        console.log(results)
        document.getElementById("sketch_name").innerHTML = results[0].label
        document.getElementById("confidence").innerHTML = Math.round (results[0].confidence * 100) + '%';
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }

}


