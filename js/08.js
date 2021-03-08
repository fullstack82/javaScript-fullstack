// Unir dos objetos con el Spread Operator

const producto = {
    nombreProducto: 'Pantalla plana 8k',
    precio: 2400,
    disponibilidad: true
}
const medidas = {
    peso: '1kl',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas } // Une dos objetos


console.log(producto)
console.log(nuevoProducto)