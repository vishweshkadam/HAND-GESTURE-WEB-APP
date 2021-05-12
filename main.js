prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    Height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='result_img' src='" + data_uri + "'>";
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassfier("https://teachablemachine.withgoogle.com/models/1bv1JXzw1/", modelLoaded());

function modelLoaded() {
    console.log('Model Loaded!');
}

