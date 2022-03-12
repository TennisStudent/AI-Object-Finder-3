status = "";
info = [];

function setup()
{
    canvas = createCanvas(550, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 550, 450);
    if(status != "")
    {
        for(i = 0; i < info.length; i++)
        {
           confidence = info[i].confidence;
           label = info[i].label;
           x = info[i].x;
           y = info[i].y;
           text(info[i].label + " ", x, y);
           rect(x, y, info[i].width, info[i].height);
        }
    }
}
function start()
{
     object_detection = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status: Detecting Objects";
     input = document.getElementById("name").value;
     if(info[i].label == input)
     {
        video_webcamLiveView.stop();
        objectDetector.detect(gotResult);
        status = document.getElementById("status").innerHTML = input + " Found!";
        var utterThis = new SpeechSynthesisUtterance(new_status);
        utterThis.speak();
     }
     else
     {
        status = document.getElementById("status").innerHTML = "Object Mentioned Not Found!";
     }
}
function modelLoaded()
{
    console.log("Cocossd is initialized!");
    status = true;
}
function gotResult(results)
{
    console.log(results);
    info = results;
}
