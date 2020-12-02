var readline = require("readline-sync");
var joueur = require("./joueur");
var templateEnnemi = require(("./ennemi"));

var LesEnnemis = [];
var thanos1 = templateEnnemi.creerThanos();
var thanos2 = templateEnnemi.creerThanos();
var venom1 = templateEnnemi.creerVenom();
var venom2 = templateEnnemi.creerVenom();
LesEnnemis.push(thanos1, thanos2, venom1, venom2);

var choix = 0;
while (choix !== 9){
    afficheMenu();
    var choix = readline.questionInt("Quel est votre choix?");
    switch (choix){
        case 1 : joueur.afficherMonJoueur();
            break;
        case 2 : afficherEnnemis();
            break;
        case 3 : combattreEnnemi();
            break;
        case 9 : console.log('A bientot');
            break;
        default : console.log("Cas non compris");
            break;
    }
}


function afficheMenu(){
    var txt = "";
    txt += "1 - Afficher le joueur \n";
    txt += "2 - Afficher liste ennemi \n";
    txt += "3 - Combattre un ennemi \n";
    txt += "9 - Quitter le programme ";
    console.log(txt);
}

function afficherEnnemis(){
    for(var i = 0; i < LesEnnemis.length; i++){
        LesEnnemis[i].afficherEnnemi();
    }
}

function returnEnnemiAleatoire(){
    var ennemiAaleatoire = Math.floor(Math.random() * LesEnnemis.length)
    return LesEnnemis[ennemiAaleatoire];
}


function combattreEnnemi(){
    var ennemiAlea = returnEnnemiAleatoire()
    ennemiAlea.afficherEnnemi();
}

