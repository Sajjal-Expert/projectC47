class Form{
    constructor(){
        this.button = createButton('play');
        this.title = createElement('h1');
    }
    hide(){
        this.button.hide();
    }
    display(){
        this.button.position(300,300);
        this.button.mousePressed(()=>{
            gameState2='play';
            gameState = 'play';
            this.hide();
        })
    }
}