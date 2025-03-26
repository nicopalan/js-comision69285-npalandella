// Array con la información de los títulos/libros de Stephen King y su cantidad/stock disponible
let libros = [
    { titulo: "Revival", cantidad: 10, precio: 25000 },
    { titulo: "Apocalipsis", cantidad: 10, precio: 20000 },
    { titulo: "La Larga Marcha", cantidad: 10, precio: 33000 },
    { titulo: "Cuento de Hadas", cantidad: 10, precio: 55000 }
];

// Función para que el usuario seleccione de un menú el libro que quiere comprar
function elegirLibro() {
    let opcion;
    let libroElegido;

    while (true) {
        opcion = prompt("Elige un libro:\n1. Revival\n2. Apocalipsis\n3. La Larga Marcha\n4. Cuento de Hadas");

        if (opcion === "1") {
            libroElegido = "Revival";
            break;
        } else if (opcion === "2") {
            libroElegido = "Apocalipsis";
            break;
        } else if (opcion === "3") {
            libroElegido = "La Larga Marcha";
            break;
        } else if (opcion === "4") {
            libroElegido = "Cuento de Hadas";
            break;
        } else {
            console.log("Opción inválida.");
        }
    }
    return libroElegido;
}

function calcularPrecioFinal(libro, cantidad) {
    // En futuras entregas quiero incluir validación de si hay o no stock (por el momento no encontré la forma de hacerlo), y la actualización del stock posterior a una compra.

    let precioUnitario;

    if (libro === "Revival") {
        precioUnitario = 25000;
    } else if (libro === "Apocalipsis") {
        precioUnitario = 20000;
    } else if (libro === "La Larga Marcha") {
        precioUnitario = 33000;
    } else if (libro === "Cuento de Hadas") {
        precioUnitario = 55000;
    } else {
        console.log("Libro no encontrado.");
        return;
    }

    const precioTotal = precioUnitario * cantidad;
    console.log(`El precio total de ${cantidad} unidades de ${libro} es: $${precioTotal}`);
}

let libroSeleccionado = elegirLibro();
let cantidadCompra;

while (true) {
    cantidadCompra = parseInt(prompt("¿Cuántos libros quieres comprar?"));
    if (!isNaN(cantidadCompra)) {
        calcularPrecioFinal(libroSeleccionado, cantidadCompra);
        break;
    } else {
        console.log("Por favor, ingresa una cantidad válida.");
    }
}