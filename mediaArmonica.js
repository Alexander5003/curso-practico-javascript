let datos = [];
let numeroDeDatos;
let suma=0;
let mediana;

function mediaArmonica(dato) {
    datos=dato;
    numeroDeDatos=datos.length;

    datos.map(
        function (elemento) {
            suma = suma + (1/elemento); 
            console.log(elemento);
        }
    );

    mediana=numeroDeDatos/suma;
}