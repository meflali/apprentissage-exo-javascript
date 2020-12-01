var joueur = require("./joueur");
var templateEnnemi = require(("./ennemi"))

var LesEnnemis = [];
var thanos1 = templateEnnemi.creerThanos();
var thanos2 = templateEnnemi.creerThanos();
var venom1 = templateEnnemi.creerVenom();
var venom2 = templateEnnemi.creerVenom();
LesEnnemis.push(thanos1, thanos2, venom1, venom2);

var ennemiAlea = returnEnnemiAleatoire()
ennemiAlea.afficherEnnemi();


function afficherEnnemis(){
    for(var i = 0; i < LesEnnemis.length; i++){
        LesEnnemis[i].afficherEnnemi();
    }
}

function returnEnnemiAleatoire(){
    var ennemiAaleatoire = Math.floor(Math.random() * LesEnnemis.length)
    return LesEnnemis[ennemiAaleatoire];
}




