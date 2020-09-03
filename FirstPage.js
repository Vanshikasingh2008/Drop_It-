class FirstPage{
    constructor(){
        this.button = createButton('Register');
        this.button2 = createButton('Check');
        this.button3 = createButton('Game');
        //this.title = createElement('h2');
    }
    hide(){
        this.button.hide();
        this.button2.hide();
        //this.title.hide();
    }
    display(){
        //this.tiltle.html("Check It!");
        //this.title.position(displayWidth/2-30,300);

        this.button.position(50,285);
        this.button2.position(200,285);
        this.button3.position(135,350);

        this.button.mousePressed(()=>{
            gamestate = "secondStage";
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
        })
        this.button2.mousePressed(()=>{
            gamestate = "checkStage1";
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
        })
        this.button3.mousePressed(()=>{
            gamestate = "serve";
            this.button.hide();
            this.button2.hide();
            this.button3.hide();
        })
    }
}