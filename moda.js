let lista1 = [];
let lista1Count = {};

let moda;


function encontrarModa(dato) {
    lista1=dato;
    //Primer paso
    lista1.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] +=1;
            }else{
                lista1Count[elemento]=1;
            }
        }
    );
    //Paso final
    let listaArray = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1]-elementoB[1];
        }
    )
    
    moda = listaArray[listaArray.length-1];
    console.log(moda);
}