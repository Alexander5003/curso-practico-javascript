let lista1 = [1,2,3,1,2,3,4,2,2,2,1];
let lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] +=1;
        }else{
            lista1Count[elemento]=1;
        }
    }
);


let listaArray = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1]-elementoB[1];
    }
)

let moda = listaArray[listaArray.length-1];