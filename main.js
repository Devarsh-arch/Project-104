Webcam.set({
    width: 400,
    height: 325,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach( '#camera' )

function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result_image").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log("ml5 version:", ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rYzsjeGDB/model.json', modelLoaded)