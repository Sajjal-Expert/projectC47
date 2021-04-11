class Game{
    constructor(){

    }
    async start(){
        menu = new Menu();
        menu.getNumberOfRooms();
        menu.display();

        player = new Player();
        
        var playerCountRef = await database.ref(roomNumber/'playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            
           // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        }
        player.getCount();
    }
    update(){
        var dbref = database.ref(roomNumber).set({
            playerCount:playerCount,
            gameState: gameState
        })
    }
}