/*-- Set up des variable */
var a = "";
var b = 0;
var operation = "None";
var last_op_deja_exec = true;

/* Fonction permettant l'affichage du nombre en noir */
function refreshNombreActuel (arg){
    document.getElementById("nombre-actuel").innerHTML = arg;
}

/* Fonction permettant l'affichage du nombre en gris */
function refreshNombreAvant (arg){
    document.getElementById("nombre-avant").innerHTML = arg;
}            

/* Permet de rentrer les nombres de 0 a 9 */
function entrerNombre() {
    a = a + "" + this.value;
    last_op_deja_exec = false;
    refreshNombreActuel(a);
}

/* Fonction permettant d'effectuer une addition */
function addition () {
    exec_last_operation();
    operation="add";
    document.getElementById("ico_op").innerHTML = "+";
    console.log(operation);
}

/* Fonction permettant d'effectuer une soustraction */
function soustraction () {
    exec_last_operation();
    operation="sous";
    document.getElementById("ico_op").innerHTML = "-";
    console.log(operation);
}

/* Fonction permettant d'effectuer une multiplication */
function multiplication() {
    exec_last_operation();
    operation="mult";
    document.getElementById("ico_op").innerHTML = "x";
    console.log(operation);
}

/* Fonction permettant d'effectuer une division */
function division () {
    exec_last_operation();
    operation="div";
    document.getElementById("ico_op").innerHTML = "÷";
    console.log(operation);
}

/* Fonction effectuant la dernière opération souhaiter */
function exec_last_operation () {

    /* Si la dernière opération rentré n'a pas été encore fait, la faire */
    if (last_op_deja_exec == false) {

        console.log("Au début de la fonction ELO, a = ", a, " et b = ", b)


        if (operation == "add") {
            b = b + parseInt(a);
        } else if (operation == "sous") {
            b = b - parseInt(a);
        } else if (operation == "mult") {
            b = b * parseInt(a);
        } else if (operation == "div") {
            b = b / parseInt(a);
        } else {
            b = parseInt(a);
        }
        a = "";
        refreshNombreAvant(b);
        refreshNombreActuel(a);
        last_op_deja_exec = true;

        console.log("A la fin de la fonction ELO, a = ", a, " et b = ", b)

    }
    
}    

/* Permet de valider une opération */
function egal() {
    exec_last_operation ();

    operation = "None";
    document.getElementById("ico_op").innerHTML = "";
    a = "";
    b = 0;
}

/* Permet de tous remettre à 0 */
function reset () {
    a="";
    b=0;
    operation = "None";
    document.getElementById("ico_op").innerHTML = "";
    last_op_deja_exec = true;
    refreshNombreAvant(a);
    refreshNombreActuel(b);
}

/* Permet de rapidement faire le carré du nombre en cours */
function exposant_2 () {
    a=a**2;
    refreshNombreActuel(a);
}

//
/* Permet de supprimer le dernier charactère de a */
function retour () {
    a = a.substring(0, a.length - 1);
    
    refreshNombreActuel(a);
}


/*  Explication détaillé du fonctionnement de la calculatrice :
        - En gros, l'utilisateur rentre plusieurs chiffre qui s'enregistre en chaîne de charactère dans 'a'
        - Lorsque l'utilisateur cliquer sur une opération, 'a' est transformé en int pour être mis dans 'b'
        - L'opération en question est enregistré pour dire :
                "Eh, c'est moi la prochaine à être exécuter avec le prochain nombre rentré"
        - Si il y a déjà une précédente opération qui avait été selectionné, l'execute par la même occasion et enregistre le résultat dans 'b'
        - Puis, réinitialise 'a' afin de le laisser libre pour une futur entré.
        - Et on recommence jusqu'a ce que l'utilisateur clique sur égal, ce qui aura pour effet de réinitialiser toute les variables.
*/





