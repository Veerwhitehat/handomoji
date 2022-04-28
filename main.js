prediction1="";
prediction2="";


Webcam.set({

    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90

});

camera= document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
 Webcam.snap(function (data_uri) {

    document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">'
     
 })
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fP8clt0_i/model.json",modelLoaded);
function modelLoaded(){
  console.log("Perfect your model is loaded successfullyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy!") ; 
} 
function speak(){

var synth= window.speechSynthesis;
speak_data1="The first prediction is "+ prediction1;
speak_data2="The second prediction is "+ prediction2;
var utter=new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(utter);

}