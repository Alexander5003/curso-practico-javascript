//Informacion sobre los intereses 
let infoSimple = document.getElementById('SInfo');

let simple = document.getElementById('simple');
simple.addEventListener('mouseenter', entrada);
simple.addEventListener('mouseleave', salida)

function entrada(simpleE) {
    infoSimple.style.display = "";
}

function salida(simple) {
    infoSimple.style.display = "none";
}