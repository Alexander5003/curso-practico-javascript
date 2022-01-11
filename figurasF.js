//value de los datos
//triangulo
let lado1Triangulo = document.getElementById('trianguloLado1');
let lado2Triangulo = document.getElementById('trianguloLado2');
let baseTriangulo = document.getElementById('trianguloBase');
let alturaTriangulo = document.getElementById('trianguloAltura');

//Circulo
let radioCirculo = document.getElementById('InputCirculo')



//Coadigo del cuadrado
function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//Codigo del triángulo
function perimetroTriangulo(lado1,lado2,base) {
    return lado1+lado2+base;
}

function areaTrianulo(base, altura) {
    return (base*altura)/2;
}
//Accion del boton
function calcularPerimetroTriangulo() {
    let lado1 = Number(lado1Triangulo.value);
    let lado2 = Number(lado2Triangulo.value);
    let base = Number(baseTriangulo.value);
    
    const perimetroTrianguloR = perimetroTriangulo(lado1,lado2,base);
    alert(perimetroTrianguloR);
}

function calcularAreaTriangulo() {
    let base = Number(baseTriangulo.value);
    let altura = Number(alturaTriangulo.value);

    const area = areaTrianulo(base, altura);
    alert(area);
}

//Código del círculo 
const PI = Math.PI;
function perimetroCirculo(radio) {
    let diametro = radio*2;
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio*radio)*PI;
}

//Accion del boton
function calcularPerimetroCirculo() {
    let radio = Number(radioCirculo.value);

    let perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    let radio = Number(radioCirculo.value);

    let area = areaCirculo(radio);
    alert(area);
}


//Allí va el HTML señores 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }
  