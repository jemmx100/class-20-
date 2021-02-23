var movingrect , fixrect


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 500, 90, 50);
  fixrect=createSprite(500,300,50,40);
  movingrect.shapeColor="green";
  fixrect.shapeColor="green";


}

function draw() {
  background("indigo"); 
 movingrect.x=mouseX
 movingrect.y=mouseY
 if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2&&
  fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2&&
  movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2&&
  fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2){
    movingrect.shapeColor="black";
    fixrect.shapeColor="yellow";

  }
 else {movingrect.shapeColor="green";
 fixrect.shapeColor="green"; }
 
  drawSprites();
}