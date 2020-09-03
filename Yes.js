class Yes{
    constructor(){
        this.input = createInput('Enter your Vaccine Batch no.');
        this.button = createButton("Submit");
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.input.position(100,45);
        this.button.position(200,110);

        this.button.mousePressed(()=>{
            gamestate = "text2";
        })
    }
}