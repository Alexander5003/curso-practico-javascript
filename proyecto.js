//Informacion sobre los intereses 
let infoSimple = document.getElementById('SInfo');
let infoCompuesto = document.getElementById('CInfo');
let resultados = document.getElementById('vamos');
let marcosResultados = document.getElementById('sectionVamos');
//Boton
let calcular = document.getElementById('calcular');

let simple = document.getElementById('simple');
let compuesto = document.getElementById('compuesto');

//Simple info
simple.addEventListener('mouseenter', entrada);
simple.addEventListener('mouseleave', salida);

//Simple compuesto
compuesto.addEventListener('mouseenter', entradaC);
compuesto.addEventListener('mouseleave', salidaC);

//Evento boton
calcular.addEventListener('click', mostrar)

//Ocultando informacion
infoSimple.style.display = "none";
infoCompuesto.style.display = "none";

function entrada(simpleE) {
    infoSimple.style.display = "";
    console.log('entrando');
    console.log(simpleE);
}

function salida(simple) {
    infoSimple.style.display = "none";
    console.log('saliendo');
}


function entradaC(simpleE) {
    infoCompuesto.style.display = "";
    console.log('entrando');
}

function salidaC(simple) {
    infoCompuesto.style.display = "none";
    console.log('saliendo');
}

//Funcion sobre calcular 
function mostrar(e) {
    marcosResultados.style.padding = '2rem';
    resultados.style.backgroundColor = '#ff847c';
    resultados.innerHTML += '<tr><td>joder que bueno</td><td>haber que pasa ahora</td></tr>';
}