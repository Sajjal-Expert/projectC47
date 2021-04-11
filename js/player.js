class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.positionX = windowWidth/2;
        this.positionY = windowHeight/2;
        this.orientation = 'down';
        this.score = 0;
    }
    update(){
        var playerIndex = "players/player"+this.index;
        var dbref = database.ref(roomNumber/playerIndex).set({
            name:this.name,
            positionX:this.x,
            positionY:this.y,
            orientation:this.orientation,
            score:this.score
            //add time also!!!!!!!!!!!!!!!!!!!!!!!!!!
        })
    }
    updateCount(count){
        var dbref = database.ref(roomNumber).set({
            playerCount:count
        });
    }
    getCount(){
        var dbref = database.ref('playerCount').on('value',(data)=>{
            playerCount = data.val();
        })
        console.log(playerCount);
    }
}