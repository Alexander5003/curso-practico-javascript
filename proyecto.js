//Informacion sobre los intereses 
let infoSimple = document.getElementById('SInfo');
let infoCompuesto = document.getElementById('CInfo');
let resultados = document.getElementById('vamos');
let marcosResultados = document.getElementById('sectionVamos');

//Check box
let selCompuesto = document.getElementById('CheckCompuesto');
let selSimple = document.getElementById('CheckSimple');
//Valores
let cantidadV = document.getElementById('cantidad');
let pagosV = document.getElementById('pagos');
let interesV = document.getElementById('interes');

//Resultados
let interes;
let pago;
let monto;
let pagado = 0;

//Operadores 
let cantidadN;
let pagosN;
let interesN;

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
    pagosN = Number(pagosV.value);
    cantidadN = Number(cantidadV.value);
    interesN = Number(interesV.value);
    interes=0;
    pago=0;
    monto=0;
    pagado=0;

    resultados.innerHTML=`
    <tr>
        <td>No. Pago</td>
        <td>Interes</td>
        <td>Fracción a pagar</td>
        <td>Monto a pagar</td>
        <td>Pagado</td>
    </tr>`;
    if (selCompuesto.checked) {
        interesCompuesto();
    }else{
        interesSimple();
    }

}

function interesSimple() {
    interes = (interesN/100)*cantidadN;
    pago = cantidadN/pagosN;
    monto = pago+interes;

    for (let i = 0; i < pagosN; i++) {
        pagado += monto;
        marcosResultados.style.padding = '2rem';
        resultados.style.backgroundColor = '#f4f1bb';
        resultados.innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${interes.toFixed(2)}</td>
            <td>${pago.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
            <td>${pagado.toFixed(2)}</td>
        </tr>`;
    }
}

function interesCompuesto() {
    pago = cantidadN/pagosN;
    for (let i = 0; i < pagosN; i++) {
        interes = (interesN/100)*cantidadN;
        monto = pago + interes;

        pagado += monto;
        marcosResultados.style.padding = '2rem';
        resultados.style.backgroundColor = '#f4f1bb';
        resultados.innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${interes.toFixed(2)}</td>
            <td>${pago.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
            <td>${pagado.toFixed(2)}</td>
        </tr>`;
        cantidadN += interes;
    }
}