

function calcuarMediaAritmetica(lista) {
/*     let sumalista = 0;
    for (const i of lista) {
        sumalista=sumalista+i;
    } */
//Este es equivalente al for, recorre los elementos y se pede operar entre ellos
    const sumalista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promediolista = sumalista/lista.length;

    console.log(sumalista);
    console.log(promediolista);

}