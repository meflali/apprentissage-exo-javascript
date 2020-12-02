var joueur = {
    nom : "Hulk",
    description : "Le meilleur du joueur",
    level : 1,
    pv : 5,
    carac : {
        force : 2,
        agilite : 7,
        intel : 5,
    },
    afficherMonJoueur: function (){
    console.log(" Nom : " + this.nom);
    console.log(" Description : " + this.description);
    console.log(" Points de vie : " + this.pv);
    console.log(" Level : " + this.level);
    console.log(" Force : " + this.carac.force);
    console.log(" Agility : " + this.carac.agilite);
    console.log(" Intelligence : " + this.carac.intel);
    },

    levelUp : function(){
        this.level++;
        this.pv += 10;
        this.carac.force += 2;
        this.carac.agilite ++;
    }
}
module.exports = joueur;



//afficherInfoJoueur(joueur);
//function afficherInfoJoueur(player){
    //for( var proportie in player){
       // if(typeof(player[proportie]) !== "object"){
           // console.log(proportie + " : " + player[proportie]);
       // } else {
            //function afficherInfoJoueur(player[proportie]){

           // }
        //}
    //}
//}