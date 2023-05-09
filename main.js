function setup() {
  canvas = createCanvas(370, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  x=ml5.imageClassifier('MobileNet',loaded);
}
function loaded(){
  console.log("model is loaded");
}
function draw(){
  image(video,0,0,370,300);
  x.classify(video,gr);
}
var pr="";

function gr(error,results){
if (error){
  console.log(error);
}
else{
  if ((results[0].confidence>0.5) && (pr!=results[0].label)){
 
  console.log(results);
  pr=results[0].label;
  var v=window.speechSynthesis;
  var sd="object detected is "+results[0].label;
  var u=new SpeechSynthesisUtterance(sd);
  v.speak(u);
  document.getElementById("o").innerHTML=results[0].label;
  document.getElementById("a").innerHTML=floor(results[0].confidence*100)+"%";
  }
}
}