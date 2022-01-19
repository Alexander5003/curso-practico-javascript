let desordenado;
let ordenado;
let comparaciones=0;

//Mediana
let mediana;
//datos
let dato1;
let dato2;
//indice
let indice;

let tamaño;

function ordenar(datoAOrdenar) {
    ordenado=[];
    desordenado=[];
    desordenado=datoAOrdenar;
    tamaño = desordenado.length;
    while (ordenado.length<tamaño) {
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
    }

    indice=parseInt(tamaño/2);
    
    if (tamaño%2==0) {
        dato1=ordenado[indice];
        dato2=ordenado[indice-1];
        mediana=(dato1+dato2)/2
    }else{
        mediana=ordenado[indice];
    }
}
