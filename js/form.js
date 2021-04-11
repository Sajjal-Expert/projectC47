class Menu{
    constructor(){
        this.title = createElement('h1');
        this.setting = createButton('#');
        this.input = createInput('Enter Name');
        this.createRoomB = createButton('Create Room');
        
    }
    hide(){
        this.createRoomB.hide();
    }
    display(){
        this.title.html('Man Vs Zombie');
        this.title.position(displayWidth/2, displayHeight/20);
        this.setting.position(20,20);
        this.createRoomB.position(displayWidth/2,displayHeight*5/8);
        this.input.position(displayWidth/2,displayHeight/2);

        this.createRoomB.mousePressed(()=>{
            console.log(roomNumber);
            this.hide();
            player.name = this.input.value();
            playerCount+= 1;
            console.log(playerCount);
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })
    }
    getNumberOfRooms(){
        var dbref = database.ref('numberOfRooms').on('value',(data)=>{
            numberOfRooms = data.val();
            roomNumber = numberOfRooms+1;
        })
    }
}