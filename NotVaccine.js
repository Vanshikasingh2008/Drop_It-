class NotVaccine{
    constructor(){
        this.name = null;
    }

    getNegative(){
        notvref = database.ref('NotVaccined');
        notref.on("value",function(data){
            NotVaccined = data.val();
        });
    }
    updateNegative(negative){
        database.ref("/").update({
            NotVaccined : negative
        })
    }
    update(){
        var notvIndex= "NotVaccined/People";
        database.ref(notvIndex).set({
          name:this.name
        });
      }
}