// Metodos con arrays

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const carrito = [
    {
        nombre: 'pantalla plana',
        precio: 250,
        disponibilidad: true
    },
    {
        nombre: 'portatil lennovo',
        precio: 550,
        disponibilidad: true
    },
    {
        nombre: 'secadora',
        precio: 650,
        disponibilidad: true
    },
    {
        nombre: 'tablet',
        precio: 99,
        disponibilidad: true
    },
    {
        nombre: 'altavoz de sobremesa',
        precio: 150,
        disponibilidad: true
    }
]

// foreach 
meses.forEach(function(mes) {
    if(mes == 'marzo') {
        console.log('Marzo si existe')
    }
})

// Includes
let resultado = meses.includes('diciembre');



// "Some" ideal para arreglos de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'tablet'
});



// Reduce
resultado = carrito.reduce(function(total, producto) {
    return  total + producto.precio
}, 0);




// Filter 
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
})


resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'tablet'
})


console.log(resultado)
