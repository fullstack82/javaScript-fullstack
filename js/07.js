'use strict'; //  js en modo estricto

// Methods Objects

const producto = {
    nombreProducto : "Portatil Lennovo",
    precio: 400,
    disponibilidad: true
}
Object.freeze(producto); // Freeze no te va a permitir agregar nuevas propiedades a los objetos
Object.seal(producto); // No te permite eliminar ninguna propiedad, pero si modificarlos