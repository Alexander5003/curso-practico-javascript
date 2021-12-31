//Coadigo del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado*4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado } cm`);

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrada} cm cuadrados`);
console.groupEnd();
//Codigo del triángulo
console.group('Triangulos');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`La altura del triangulo es de: ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log(`El perimetro del triántulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log(`El área del triángulo es: ${areaTriangulo}cm cuadrados`);

console.groupEnd();

//Código del círculo 
console.group('Círculos');
const radioCirculo = 4;
const diametrCirculo = radioCirculo*2;
const PI = Math.PI;
console.log(`El radio del curculo es; ${radioCirculo}`);
console.log(`El diámetro del círculo es: ${diametrCirculo}`);
console.log(`PI es: ${PI}`);

const perimetroCirculo = diametrCirculo * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log(`El área del circulo es: ${areaCirculo}`);

console.groupEnd();