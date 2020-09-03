class Register1{
    constructor(){
        this.input = createInput('Please enter your Name');
        this.input2 = createInput('Please enter your Adhar no.');
        this.button = createButton("Submit");
        this.button2 = createButton("Submit");
        this.button3 = createButton("YES");
        this.button4 = createButton("NO");
        //this.but
    }
    hide(){
        this.input.hide();
        this.input2.hide();
        this.button2.hide();
        this.button.hide();
        this.button3.hide();
        this.button4.hide();
    }
    display(){
        this.input.position(100,45);
        this.button.position(200,110);

        this.button.mousePressed(()=>{
            this.input2.position(100,205);
            this.button2.position(200,270);
            
        })
        this.button2.mousePressed(()=>{
            //push();
            gamestate = "text";
            this.button3.position(100,415);
            this.button4.position(200,415);
        })
        this.button3.mousePressed(()=>{
            this.input.hide();
            this.input2.hide();
            this.button2.hide();
            this.button.hide();
            this.button3.hide();
            this.button4.hide();
            gamestate = "thirdStageyes";
        })
        this.button4.mousePressed(()=>{this.input.hide();
            this.input2.hide();
            this.button2.hide();
            this.button.hide();
            this.button3.hide();
            this.button4.hide();
            gamestate = "thirdStageno";
        })
        }
}