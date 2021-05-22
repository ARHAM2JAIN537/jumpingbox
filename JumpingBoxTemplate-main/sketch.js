var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
    box1 = createSprite(100,590,100,20)
    box1.shapeColor = "red";
    box2 = createSprite(250,590,100,20); 
    box2.shapeColor = "blue";
    box3 = createSprite(400,590,100,20);
    box3.shapeColor = "green";
    box4 = createSprite(550,590,100,20); 
    box4.shapeColor = "yellow";                                                                                                       
    //create box sprite and give velocity
    ball = createSprite(200,200,20,20);
    ball.velocityX = 4;
    ball.velocityY = 4;
}           

function draw() {
    background(0);
    createEdgeSprites();
    //ball.bounceOff(edges);
       
    //add condition to check if box touching surface and make it box
    if(box4.isTouching(ball) && ball.bounceOff(box4)) {
        box4.shapeColor = "white";
        ball.shapeColor = "white";
    }    
    drawSprites();
}
