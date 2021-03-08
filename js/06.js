const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}
// Forma anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;


// Forma actual (destructuring)
const { precio, nombreProducto, disponible } = producto;
console.log(producto)

