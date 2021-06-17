//Create variables here
var dog,happydog, database,foodS,foodStock,dogimage1,dogimage2

function preload()
{
	//load images here
 dogimage1=loadImage("images/dogImg.png")
 dogimage2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(400,350)
  dog.addImage('dog',dogimage1)
  foodStock=database.ref('Food');
  foodStock.on("value, readStock");
}


function draw() {  
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addimage(dogHappy);
}
  drawSprites();
  //add styles here
textSize(30)
fill('blue')
text('note:move up arrow key to feed',100,50)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

