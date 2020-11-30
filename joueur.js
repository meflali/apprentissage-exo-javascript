var joueur = {
    nom : "Hulk",
    description : "Le meilleur du joueur",
    carac : {
        force : 8,
        agilite : 7,
        intel : 5,
    }
}



afficherInfoJoueur(joueur);
function afficherInfoJoueur(player){
    for( var proportie in player){
        if(typeof(player[proportie]) !== "object"){
            console.log(proportie + " : " + player[proportie]);
        } else {
            for( var subproportie in player[proportie]){
                console.log(subproportie + " : " + player[proportie][subproportie]);
            }
        }
    }
}