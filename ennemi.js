var templateEnnemi = {
    creerThanos: function () {
        var ennemi1 = {
            nom: "Thanos1",
            description: "Maitre du mal",
            level: 1,
            force: 2,
            pv : 7,

            afficherEnnemi: function () {
                var txt = "Nom : " + this.nom + "\n";
                txt += "Description : " + this.description + "\n";
                txt += "Level : " + this.level + "\n";
                txt += "Points de vie : " + this.pv + "\n";
                txt += "Force : " + this.force;
                console.log(txt);
            }
        }
        return ennemi1;
    },

    creerVenom : function (){
        var ennemi2 = {
            nom : "Venom",
            description : "Monstre",
            level : 2,
            force : 4,
            pv : 7,

            afficherEnnemi : function() {
                var txt = "Nom : " + this.nom + "\n";
                txt += "Description : " + this.description + "\n";
                txt += "Level : " + this.level + "\n";
                txt += "Points de vie : " + this.pv + "\n";
                txt += "Force : " + this.force ;
                console.log(txt);
            }
        }
        return ennemi2;
    }
}
module.exports = templateEnnemi;





/* MAIN   */


