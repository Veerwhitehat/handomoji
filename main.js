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
function check(){
  img= document.getElementById("captured_img");
  classifier.classify(img,gotResult);
}
function gotResult(error,results) {
 
  if (error) {

    console.error(error)
    
  } else {
    
    console.log(results);
  document.getElementById("result_emotion_name1").innerHTML=results[0].label;
  document.getElementById("result_emotion_name2").innerHTML=results[1].label;

  prediction1= results[0].label;
  prediction2= results[1].label;

  speak()

  if (results[0].label=="Cheese") {
    document.getElementById("update_emoji1").innerHTML="✌";
  }
  if (results[0].label=="Hello") {
    document.getElementById("update_emoji1").innerHTML="✋";
  }
  if (results[0].label=="Great") {
    document.getElementById("update_emoji1").innerHTML="✊";
  }



  if (results[1].label=="Cheese") {
    document.getElementById("update_emoji2").innerHTML="✌";
  }
  if (results[1].label=="Hello") {
    document.getElementById("update_emoji2").innerHTML="✋";
  }
  if (results[1].label=="Great") {
    document.getElementById("update_emoji2").innerHTML="✊";
  }
  }
  
  
}