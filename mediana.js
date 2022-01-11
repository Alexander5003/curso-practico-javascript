const lista1 = [100,200,500,4000000,20];

const mitadLista1 = parseInt(lista1.length/2);
let mediana;

function esPar(numero) {
    if (numero%2===0) {
        return true;
    }else{
        return false;
    }
};

if (esPar(lista1.length)) {
    
}else{
    mediana = lista1[mitadLista1];
}