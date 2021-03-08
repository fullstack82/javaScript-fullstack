// Arrays

const numeros = [10, 20, 30, 40, 50]


const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.table(meses);


// Acceder a los valores de un array 
//console.log(numeros[0]);

// Conocer la extension de un array
//console.log(meses.length);


// Iterando 
meses.forEach(function(mes){
    console.log(mes)
})

// Metodos para los arrays
// 1. No muy usado
numeros[5] = 60;
numeros[6] = 70;
numeros[7] = 80;
numeros[8] = 90;
numeros[9] = 100;


// 2. Push Agrega un objeto al final del array (se recomienda no modificar arreglos originales)

numeros.push(60);
numeros.push(35, 45, 55);

// 3. unshift Agrega un objeto al principio del array (se recomienda no modificar arreglos originales)
numeros.unshift(-10, -20, -30)

console.table(numeros);

// 4. Borrar elementos de un array;
meses.pop(); // Elimina el ultimo elemento del array
meses.shift(); // Elimina el primer  elemento del array
meses.splice(2, 1) // Elimina valores intermedios (primero se agrega el indice que queremos borrar, y luego cuantos desde ahi queremos borrar(1, 2, 3, etcs))
console.table(meses);


// 5. Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'enero']; // Agrega el valor sin modificar ninguno más (equivalente a push)
console.log(nuevoArreglo);


const nuevoArray = ['junio', ...meses] // Asi agrega el valor al principio sin modificar ninguno mas (equivalente a unshift)
console.log(nuevoArray)


