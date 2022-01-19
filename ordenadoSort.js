let ordenado = [];
let puntoDePartida;
let volumen;
//Datos a operar 
let dato1;
let dato2;
//Resultados
let mediana;

function ordenar(desordenado) {
    ordenado = desordenado;
    ordenado.sort(function (a,b) {
        return a-b;
    });
}

function media(dato) {
    ordenar(dato);
    volumen = ordenado.length
    puntoDePartida=parseInt(volumen/2);
    
    if (volumen%2==0) {
        dato1=ordenado[puntoDePartida];
        dato2=ordenado[puntoDePartida-1];
        mediana=(dato1+dato2)/2;
    }else{
        mediana=ordenado[puntoDePartida];
    }
}