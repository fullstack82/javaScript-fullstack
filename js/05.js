

// Objeto
const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true
}
console.log(producto)
console.log(producto.nombreProducto) // Acceder a las diferentes propiedades del proyecto;

// Segunda manera 
console.log(producto['precio']);


// Agregar nuevas propiedades;
producto.imagen = 'imagen.jpg';


// Eliminar propiedades ;
delete producto.imagen;




console.log(producto)