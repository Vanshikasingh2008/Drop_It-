class Vaccine{
    constructor(){
        this.name = null;
    }
    
    getPositive(){
        yesvref = database.ref('Vaccined');
        yesv.on("value",function(data){
            Vaccined = data.val();
        });
    }
    updatePositive(vaccine){
        database.ref('/').update({
            Vaccined : vaccine
        })
    }
    update(){
        var yesvIndex = "Vaccined/People";
        database.ref(yesvIndex).set({
            name:this.name
        });
    }
}