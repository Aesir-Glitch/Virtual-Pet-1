//Create variables here
var dog,HappyDog;
var foodS,foodStock;

function preload() {
  //load images here
  dogimg = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);

  dog = createSprite(250,300,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.15;
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
} 

function draw() { 
  background(46,139,87); 
  if(keyDown(UP_ARROW)){
    dog.addImage(dogHappy);
    foodS -= 1;
    writeStock(foodS);
}
   
  drawSprites();
  text("Note:Press The UP_ARROW Key To Feed Drago Milk",150,450);
  //add styles here
  //writeStock();
}

function readStock(data){
  foodS = data.val();
  console.log(foodS);
}

function writeStock(x){
  database.ref('/').update({Food:x})  
}  