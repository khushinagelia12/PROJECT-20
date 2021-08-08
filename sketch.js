var bgImg;
var catimg1,mouseimg1,catimg2,mouseimg2;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadImage("images/cat2.png","images/cat3.png");
    mouseimg2 = loadImage("images/mouse3.png");

}

function setup(){
    createCanvas(1000,800,1000,1000);
    //create tom and jerry sprites here
    cat = createSprite(750,650);
    cat.addImage(catimg1);
    cat.scale =0.2;
    mouse = createSprite(100,650);
    mouse.addImage(mouseimg1);
    mouse.scale =0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catimg2);
        cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
  
  if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseimg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }

}
