class No{
    constructor(){
        this.input = createInput('Enter your Vaccine Batch no.');
        this.button = createButton("Submit");
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.input.position(129,150);
        this.button.position(225,200);

        this.button.mousePressed(()=>{
            gamestate = "text3";
        })
    }
}
