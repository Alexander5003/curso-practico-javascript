const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
); 

const salariosOrdenados = salariosCol.sort(
    function (a, b) {
    return a - b;
});

let medianaRespuesta;
let dato1;
let dato2;
let puntoMedio;

function espar(elemento) {
    return (elemento.length/2==0)
}

function mediana(dato) {
    let parOImpar = espar(salariosOrdenados);

    if (parOImpar) {
        puntoMedio=parseInt(dato.length/2);

        dato1=dato[puntoMedio];

        mediana=dato1
    }else{
        puntoMedio=parseInt(dato.length/2);

        dato1 = dato[puntoMedio];
        dato2 = dato[puntoMedio-1];

        medianaRespuesta=(dato1+dato2)/2
    }
}

mediana(salariosOrdenados);
