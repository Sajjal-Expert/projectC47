class Zombie{
    constructor(x,y){
        this.sprite = createSprite(x,y,10,10);
        this.x = x;
        this.y = y;
        this.live = true;
        
    }
    display(){
        image(this.image,this.sprite.x,this.sprite.y,20,20);
    }
}