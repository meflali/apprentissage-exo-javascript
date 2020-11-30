var joueur = {
    nom : "Hulk",
    description : "Le meilleur du joueur",
    force : 8,
    agilite : 7,
    intel : 5,
}


afficherInfoJoueur(joueur);





function afficherInfoJoueur(player){
    for( var proportie in player){
        console.log(proportie + " : " + player[proportie]);
    }
}