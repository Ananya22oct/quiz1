class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCountRef = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCountRef: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allcontestants = data.val();
      })
    }
  }