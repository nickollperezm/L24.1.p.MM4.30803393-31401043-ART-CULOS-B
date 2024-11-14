/*
En una tienda se procesan los datos de varios artículos: departamento, nombre, precio y
existencia. Se sabe que hay 3 departamentos: 1=niños, 2=damas, 3=caballeros.
Considerando que los datos se cargan en un array de objetos (Ej. estructura de cada objeto:
{departamento: 2, nombre: ‘Pijama’, precio: 15, existencia: 2}), se requiere una función que
indique cual de 2 departamentos dados tiene la mayor cantidad de artículos sin existencia.
Función: departamentoMasInexistencia.
Parámetros: articulos (array de objetos articulo), departamentoA (un número),
departamentoB (un número).
Retorno: El número del departamento que tiene más inexistencia.
Sugerencia: usar la función cantidadArticulosSinExistencia 
*/

let cantidadArticulosSinExistencia = (articulos,departamento) => {
    let sinExistencia = 0;
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].departamento == departamento && articulos[i].existencia == 0) {
            sinExistencia++;
        }
    }
    return sinExistencia;
};

let departamentoMasInexistencia = (articulos, departamentoA, departamentoB) => {
    let cantidadA = 0;
    let cantidadB = 0;
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].departamento == departamentoA) {
            cantidadA += cantidadArticulosSinExistencia(articulos, departamentoA);
        } else if (articulos[i].departamento == departamentoB) {
            cantidadB += cantidadArticulosSinExistencia(articulos, departamentoB);
        }
    }
    if (cantidadA > cantidadB) {
        return departamentoA;
    } if (cantidadB > cantidadA) {
        return departamentoB;
    } else {
        return "Ambos departamentos tienen la misma cantidad de artículos sin existencia";
    }
};

let articulos = [
    {departamento: 2, nombre: 'Pijama', precio: 15, existencia: 2},
    {departamento: 2, nombre: 'Camisa', precio: 10, existencia: 5},
    {departamento: 1, nombre: 'Pantalon', precio: 20, existencia: 0},
    {departamento: 3, nombre: 'Franela', precio: 12, existencia: 0},
    {departamento: 1, nombre: 'Camisa', precio: 10, existencia: 5},
    {departamento: 2, nombre: 'Sueter', precio: 18, existencia: 0},
    {departamento: 1, nombre: 'Vestido', precio: 25, existencia: 0},
    {departamento: 3, nombre: 'Corbata', precio: 12, existencia: 0},
    {departamento: 3, nombre: 'Camisa', precio: 10, existencia: 4},
];

let salida = document.getElementById("salida");
salida.innerHTML = `El número del departamento que tiene más inexistencia es: ${departamentoMasInexistencia(articulos, 1, 2)}`;