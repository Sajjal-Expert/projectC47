/*var database;
var numberOfRooms;
var playerCount;
var roomNumber;
var menu,player,game*/

var verticalImg, perpendicularImg, turnImg;
var orientation1 = 'right';
var player;
var gameState = 'home';
var score=0;
var gameState2 = 'home';


function preload(){
    verticalImg = loadImage('images/horizontalWall.png');
    perpendicularImg = loadImage('images/perpendicularWall.png');
    turnImg = loadImage('images/wallTurn.png');
    plr_right = loadImage('images/plr_right.png');
    plr_left = loadImage('images/plr_left.png');
    plr_up = loadImage('images/plr_up.png');
    plr_down = loadImage('images/plr_down.png');
    plr_upRight = loadImage('images/upRight.png');
    plr_upLeft = loadImage('images/upLeft.png');
    plr_downRight = loadImage('images/downRight.png');
    plr_downLeft = loadImage('images/downLeft.png');

    z1_Left_Img = loadImage('images/zombie/z1_L.png');
    z1_Right_Img =loadImage('images/zombie/z1_R.png'); 

    cLeftAnimation = loadAnimation('images/zombie/c/c1_L.png','images/zombie/c/c2_L.png','images/zombie/c/c3_L.png','images/zombie/c/c4_L.png','images/zombie/c/c5_L.png','images/zombie/c/c6_L.png');
    cRightAnimation = loadAnimation('images/zombie/c/c1_R.png','images/zombie/c/c2_R.png','images/zombie/c/c3_R.png','images/zombie/c/c4_R.png','images/zombie/c/c5_R.png','images/zombie/c/c6_R.png');
    c_die_L_Img = loadImage('images/zombie/c/c_dieL.png');

    bulletRImg = loadImage('images/bullet_R.png');
    bulletLImg = loadImage('images/bullet_L.png');
    bulletUImg = loadImage('images/bullet_U.png');
    bulletDImg = loadImage('images/bullet_D.png');
    bullet_UR_Img = loadImage('images/bullet_UR.png');
    bullet_UL_Img = loadImage('images/bullet_UL.png');
    bullet_DR_Img = loadImage('images/bullet_DR.png');
    bullet_DL_Img = loadImage('images/bullet_DL.png');

    blastImg = loadImage('images/blast.png');

    gunShotSound = loadSound('sounds/shot2.mp3');
}

function setup(){
    createCanvas(600,600);

    cLeftAnimation.frameDelay = 10;
    cRightAnimation.frameDelay = 10;

    player = createSprite(200,400,10,10);
    player.addImage(plr_right);
    player.scale = 0.2;
    player.setCollider('rectangle',0,0,150,120);
    
    //wall1 = new Wall(100,230,20,300)
    //wall2 = new Wall(150,530,300,20);
    //wall3 = new Wall(200,200,200,20)
    //wall4 = new Wall(400,150,20,300)
    //wall5 = new Wall(450,400,300,20);

    zombieGroup = new Group();
    bulletGroup = new Group();

    form = new Form();
}

function draw(){
    background(169,132,79);
    imageMode(CENTER);
    angleMode(DEGREES);
    
    if(gameState==='play'){
        movement();
        createBullet();
        //spawnZombies();
    }

    if(gameState==='end'){
        textSize(25);
        fill('red');
        text("Game Over",200,300);
    }
    if(gameState2==='play'){
        drawSprites();
        push();
        fill('red');
        textSize(20);
        text('Score: '+score,100,50);
        pop();
    }

    if(gameState2==='home'){
        form.display();
    }
    
    

    
}



function movement(){
    var speed = 0;
    if(keyDown(LEFT_ARROW)){
        player.x -= speed;
        player.addImage(plr_left);
        orientation1 = 'left';
    }
    if(keyDown(RIGHT_ARROW)){
        player.x += speed;
        player.addImage(plr_right);
        orientation1 = 'right';
    }
    if(keyDown(UP_ARROW)){
        player.y -= speed;
        player.addImage(plr_up);
        orientation1 = 'up';
    }
    if(keyDown(DOWN_ARROW)){
        player.y += speed;
        player.addImage(plr_down);
        orientation1 = 'down';
    }
    if(keyDown(UP_ARROW)&&keyDown(RIGHT_ARROW)){
        player.addImage(plr_upRight);
        orientation1 = 'upRight';
    }
    if(keyDown(UP_ARROW)&&keyDown(LEFT_ARROW)){
        player.addImage(plr_upLeft);
        orientation1 = 'upLeft';
    }
    if(keyDown(DOWN_ARROW)&&keyDown(RIGHT_ARROW)){
        player.addImage(plr_downRight);
        orientation1 = 'downRight';
    }
    if(keyDown(DOWN_ARROW)&&keyDown(LEFT_ARROW)){
        player.addImage(plr_downLeft);
        orientation1 = 'downLeft';
    }
    

    
}

function displayHomePage(){
    var playB = createButton('play');
    playB.position(windowWidth/2,windowHeight/2);
}

function createBullet(){
    if(keyWentDown('space')){
        var positionX;
        var positionY;
        var velocityX;
        var velocityY;
        var bulletImg;
        
        if(orientation1==='right'){
            velocityX = 6;
            velocityY=0;
            positionX = player.x+25;
            positionY = player.y+7;
            bulletImg = bulletRImg;
        }
        if(orientation1 === 'left'){
            velocityX = -6;
            velocityY=0;
            positionX = player.x -25;
            positionY = player.y-7;
            bulletImg = bulletLImg;
           }
        if(orientation1 === 'up'){
            velocityY = -6;
            velocityX=0;
            positionX = player.x+10;
            positionY = player.y-20;
            bulletImg = bulletUImg;
        }
        if(orientation1 === 'down'){
            velocityY = 6;
            velocityX=0;
            positionX = player.x-10;
            positionY = player.y+20;
            bulletImg = bulletDImg;
        }
        if(orientation1 ==='upRight'){
            velocityX = 6;
            velocityY = -6;
            positionX = player.x+30;
            positionY = player.y-20;
            bulletImg = bullet_UR_Img;
        }    console.log(orientation1);
        if(orientation1 ==='upLeft'){
            velocityX = -6;
            velocityY = -6;
            ositionX = player.x-20;
            positionY = player.y-20;
            bulletImg = bullet_UL_Img;
        }
        if(orientation1 ==='downRight'){
            velocityX = 6;
            velocityY = 6;
            positionX = player.x+15;
            positionY = player.y+20;
            bulletImg = bullet_DR_Img;
        }
        if(orientation1 ==='downLeft'){
            velocityX = -6;
            velocityY = 6;
            positionX = player.x-30;
            positionY = player.y+20;
            bulletImg = bullet_DL_Img;
        }

            

        var bullet = createSprite(positionX,positionY,5,5);
        bullet.velocityX = velocityX;
        bullet.velocityY = velocityY;
        bullet.shapeColor = 'brown';
        bullet.addImage(bulletImg);
        bullet.scale = 0.35;
            
             
        bulletGroup.add(bullet);
        bullet.lifetime = 150;

        image(blastImg,positionX,positionY,25,25);

        gunShotSound.play();
    }
}

function spawnZombies(){
    if(frameCount%100===0){

        var zombie = createSprite(random(0,600),random(0,600),20,20);
        zombie.shapeColor = 'green';
        zombieGroup.add(zombie);
        zombie.addAnimation('right',cRightAnimation);
        zombie.addAnimation('left',cLeftAnimation);
        zombie.scale = 0.5;

        
        /*zombieGroup.collide(wall1);
        zombieGroup.collide(wall2);
        zombieGroup.collide(wall3);
        zombieGroup.collide(wall4);
        zombieGroup.collide(wall5);*/

       /* wall1.bounce(zombie);
        wall2.bounce(zombie);
        wall3.bounce(zombie);
        wall4.bounce(zombie);
        wall5.bounce(zombie);*/

    }
    if(player.isTouching(zombieGroup)){
        gameState = 'end';
    }
    for(var i=0; i<zombieGroup.length; i++){
        zombieGroup.get(i);

        //player.x;

        var speed = 1;
        if(zombieGroup[i].x>player.x){
            zombieGroup[i].x -= speed;
            zombieGroup[i].changeAnimation('left',cLeftAnimation);
        }
        if(zombieGroup[i].x<player.x){
            zombieGroup[i].x += speed;
            zombieGroup[i].changeAnimation('right',cRightAnimation);
        }
        if(zombieGroup[i].y>player.y){
            zombieGroup[i].y -= speed;
        }
        if(zombieGroup[i].y<player.y){
            zombieGroup[i].y += speed;
        }
    
        if(bulletGroup.isTouching(zombieGroup.get(i))){
            zombieGroup.get(i).destroy();
           // bulletGroup.get(i).destroy();
            score += 10;
        }
    }
}