var PC1AM_image;
var Enemy1_image, Enemy2_image, Enemy3_image, Enemy4_image, Enemy5_image;
var BG1_image;
var PC1bull_image, Enemy1bull_image;
var EnemyGroup;
var PC1bull1Group;
var PC1bull2Group;
var bg1_image;
var menu_im;
var GameState = 1;
var levelsb1im,levelsb2im, levelsb;
var Mars_image
function preload(){
PC1AM_image = loadAnimation("Images/PC1-1.PNG","Images/PC1-2.png","Images/PC1-3.PNG");
Enemy1_image = loadAnimation("Images/enemyam1-1.png","Images/enemyam2-1.png","Images/enemyam3-1.png");
Enemy2_image = loadAnimation("Images/enemyam1-2.png","Images/enemyam2-2.png","Images/enemyam3-2.png");
Enemy3_image = loadAnimation("Images/enemyam1-3.png","Images/enemyam2-3.png","Images/enemyam3-3.png");
Enemy4_image = loadAnimation("Images/enemyam1-4.png","Images/enemyam2-4.png","Images/enemyam3-4.png");
Enemy5_image = loadAnimation("Images/enemyam1-5.png","Images/enemyam2-5.png","Images/enemyam3-5.png");
PC1bull_image = loadImage("Images/PC1-Bullet.png");
Enemy1bull_image = loadImage("Images/enemy1-bullet.png");
bg1_image = loadImage("Images/Bg1.png");
menu_im = loadAnimation("Images/main menu am0.5 part 1.png","Images/main menu am1 part 1.png","Images/main menu am2 part 1.png","Images/main menu am3 part 1.png","Images/main menu am4 part 1.png")
levelsb1im = loadImage("Images/Levels Button Image-1.png");
levelsb2im = loadImage("Images/Levels Button Image-2.png");
Mars_image = loadAnimation("Images/Mars Image 1.png","Images/Mars Image 2.png","Images/Mars Image 3.png","Images/Mars Image 4.png","Images/Mars Image 5.png","Images/Mars Image 6.png")

}
function setup(){
    createCanvas(windowWidth,windowHeight+100)

if(GameState===3){
Pc1 = createSprite(width/2,height-60,50,50);
Pc1.addAnimation("default ship",PC1AM_image);
Pc1.scale = 0.6;
}

/*bg1 = createSprite(windowWidth, windowHeight);
bg1.addImage(bg1_image)
bg1.x = windowWidth /2;
bg1.velocityX = -(6 + 3*33/100);*/
if(GameState===1){

mainmenu = createSprite(windowWidth/2,windowHeight/2);
mainmenu.addAnimation("main menu",menu_im)
mainmenu.scale = 1.2;

Levelsb = createSprite(windowWidth/1.890,windowHeight/1.150,100,100);
Levelsb.addAnimation("Levels button",levelsb1im);
Levelsb.scale =0.2;
if(mousePressedOver(levelsb)){
GameState = 2;
windows.location.replace(Levelscreen.html);
}
}




//Enemybull = createSprite();
//Enemybull.addImage()

EnemyGroup = new Group();

}
function draw(){
background(0)

if(GameState===2){
    createEnemy1();

}
if(keyDown("d")){
    Pc1.velocityX = 20;
}
if(keyDown("a")){
    Pc1.velocityX = -20;
}
if(keyDown("s")){
    Pc1.velocityY = 20;
}
if(keyDown("w")){
    Pc1.velocityY = -20;
}
if(keyWentUp("w")){
    Pc1.velocityY = 0;
}
if(keyWentUp("a")){
    Pc1.velocityX = 0;
}
if(keyWentUp("s")){
    Pc1.velocityY = 0;
}
if(keyWentUp("d")){
    Pc1.velocityX = 0;
}

drawSprites();
}

function createEnemy1(){
if(frameCount%60===0){

var randWidth = Math.round(random(10,width));
var Enemy = createSprite(randWidth,height-600,30,30);
Enemy.scale = 0.4;
Enemy.velocityY = 2;
Enemy.lifetime = 900;


var rand = Math.round(random(1,5));
switch(rand){
    case 1: Enemy.addAnimation("1",Enemy1_image);
    break;
    case 2: Enemy.addAnimation("2",Enemy2_image);
    break;
    case 3: Enemy.addAnimation("3",Enemy3_image);
    break;
    case 4: Enemy.addAnimation("4",Enemy4_image);
    break;
    case 5: Enemy.addAnimation("5",Enemy5_image);
    break;``
    default:break;
    
}
//EnemyGroup.add()

}
}

function Bulletpc1(){

}