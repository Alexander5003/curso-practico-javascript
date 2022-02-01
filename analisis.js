const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
); 

const salariosOrdenados = salariosCol.sort(
    function (a, b) {
    return a - b;
});

let salariosOrdenadosParaTop = salariosOrdenados;

let medianaRespuesta;
let dato1;
let dato2;
let puntoMedio;

function espar(elemento) {
    return (elemento.length/2==0)
}

//Mediana general de salarios

medianaRespuesta = mediana(salariosOrdenados);
function mediana(dato) {
    let parOImpar = espar(salariosOrdenados);

    if (parOImpar) {
        puntoMedio=parseInt(dato.length/2);

        dato1=dato[puntoMedio];

        return dato1
    }else{
        puntoMedio=parseInt(dato.length/2);

        dato1 = dato[puntoMedio];
        dato2 = dato[puntoMedio-1];

        return (dato1+dato2)/2
    }
} 

//top 10 de salarios

let topSalariosArray=[];

function topSalarios(dato) {
    let indice = dato.length-1;
    console.group('Top 10 salarios');
    for (let i = 0; i < 10; i++) {
        topSalariosArray.push(dato[indice-i]);
    }
    console.groupEnd();
}

topSalarios(salariosOrdenados);
//Salarios 10 por ciento
let datoStart = salariosOrdenadosParaTop.length*0.9;
let datoCantidad = salariosOrdenadosParaTop.length-datoStart;

let top10Salarios = salariosOrdenadosParaTop.splice(datoStart, datoCantidad);

let medianaTop10 = mediana(top10Salarios);