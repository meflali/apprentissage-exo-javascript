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
var gameOver = false;

while (choix !== 9 && !gameOver){
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
    var ennemiAleatoire = Math.floor(Math.random() * LesEnnemis.length)
    return LesEnnemis[ennemiAleatoire];
}


function combattreEnnemi(){
    var ennemiAlea = returnEnnemiAleatoire()
    ennemiAlea.afficherEnnemi();
    joueur.pv -= ennemiAlea.force;
    ennemiAlea.pv -= joueur.carac.force;

    if(ennemiAlea.pv <= 0){
        console.log("L'ennemi est mort");
        joueur.levelUp();

    }
    if (joueur.pv <= 0){
        console.log("Tu es mort");
        gameOver = true;
    }
}

function detruireUnEnnemi(numero){
    for(var i = numero ; i < LesEnnemis.length; i++){
        LesEnnemis[i] = LesEnnemis[i+1];
    }
    LesEnnemis.pop();
}