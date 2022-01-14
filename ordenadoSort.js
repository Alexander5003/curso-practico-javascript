let ordenado = [];

function ordenar(desordenado) {
    ordenado = desordenado;
    ordenado.sort(function (a,b) {
        return a-b;
    });
}