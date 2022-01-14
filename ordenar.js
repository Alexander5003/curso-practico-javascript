let desordenado = [6,8,5,4,7,9,2,3,1];
let ordenado=[];
let comparaciones=0;

//

let tamaño = desordenado.length;


/* while (ordenado.length<tamaño) {
    for (const comparador of desordenado) {
        for (const comparado of desordenado) {
            if (comparador>comparado) {
                comparaciones=comparaciones+1;
                console.log('1');
            }
        }
        console.log('paso');
        if (comparaciones==0) {
            ordenado.push(comparador);
            console.log('g');
            for (const i in desordenado) {
                if (desordenado[i]==comparador) {
                    desordenado.splice(i,1);
                }
            }
        }
        comparaciones=0;
    }
} */

desordenado.sort(function (a,b) {
    return a-b;
});