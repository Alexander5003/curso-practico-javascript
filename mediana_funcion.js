let lista1;
let mitadLista1;
let mediana;

//Calcular promedio
function calcuarMediaAritmetica(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promediolista = sumalista/lista.length;

    console.log(sumalista);
    console.log(promediolista);
    return promediolista;

};
//Fin funcion

function esPar(numero) {
    if (numero%2===0) {
        return true;
    }else{
        return false;
    }
};


function calcularMediana(lista) {
    lista1=lista;
    mitadLista1= parseInt(lista1.length/2);
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1-1];
        const elemento2 = lista1[mitadLista1];
        const promedioElemeto1y2 = calcuarMediaAritmetica([elemento1,elemento2]);
        mediana = promedioElemeto1y2;
    }else{
        mediana = lista1[mitadLista1];
    }
};