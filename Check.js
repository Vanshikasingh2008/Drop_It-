class Check{
    constructor(){
        this.button = createButton('Positive');
        this.button2 = createButton('Negative');
    }
    hide(){
        this.button.hide();
        this.button2.hide();
    }
    display(){
        this.button.position(50,250);
        this.button2.position(200,250);

        /*this.button.mousePressed({
            gamestate = "pstage",
        });
        this.button2.mousePressed({
            gamestate = "nestage",
        });*/
    }
}