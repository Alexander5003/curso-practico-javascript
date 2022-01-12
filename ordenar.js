let desordenado = [6,8,5,4,7,9,2,3,1];
let ordenado=[];
let comaparaciones=0;


while (ordenado.length<desordenado.length) {
    for (const comparador of desordenado) {
        for (const comparado of desordenado) {
            if (comparador>comparado) {
                comaparaciones=comaparaciones+1;
            }
        }
    }
    if (comaparaciones==1) {
        ordenado.push;
    }
}