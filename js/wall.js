class Wall{
    constructor(x,y,width,height){
        this.sprite = createSprite(x,y,width,height);
        //this.sprite.addImage('wall',verticalImg);
        this.sprite.shapeColor = 'red';
        this.x = x;
        this.y = y;
        this.width = width;
        this.height =height;
    }
    display(){
        image(verticalImg,this.x,this.y,this.width,this.height);
    }
    bounce(x){
        this.sprite.bounce(x);
        //this.sprite.x = this.x;
        
    }
}