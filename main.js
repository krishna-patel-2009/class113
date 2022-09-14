function preload(){

}
function setup()
{
canvas=createCanvas(640,480);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();
tint_colour= ""; 
}
function draw()
{
image(video,0,0,640,480);
tint(tint_colour);
}
function filtertint()
{
    tint_colour = document.getElementById("colourName").value ;
}
function take_snapshot(){
    save("krishna.png");
}