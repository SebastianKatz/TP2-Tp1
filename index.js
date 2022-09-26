import fs from 'fs'

const leerArchivoComoString = function(ruta='./Archivos/datos.txt') {
    return fs.readFileSync(ruta, 'utf-8')
}

const escribirTextoEnArchivo = function(ruta, texto = 'Este es el texto por default', flag) {
    var escribir = true
    try{
        leerArchivoComoString()
    } catch(e) {
        escribir = flag
    }
    if (escribir) {
    fs.writeFileSync(ruta,texto)
    } else {
    throw "el archivo no existe"
    }
}

const transformarStringEnArrayDeNumeros = function(cadena, separador) {
    let array = cadena.split(separador)
    array = array.map( elemento => Number(elemento))
    array = array.filter( elemento => !isNaN(elemento))
    return array
}

const transformarArrayDeNumerosAUnSoloString = function(array, separador) {
    let dev = array.reduce((previousValue, currentValue) => previousValue + separador + currentValue);
    return dev
}

const combinarDosArrays = function(array1, array2) {
    let sumaTotal = array1.length + array2.length
    let nuevoArray = []
    for (let i = 0; i < sumaTotal; i++) {
        if(array1[0] < array2[0]) {
            nuevoArray.push(array1.shift())
        } else {
            nuevoArray.push(array2.shift())
        }
    } 
    return nuevoArray
}

const combinarNArrays = function(listaDeArrays) {
    let array = listaDeArrays.flat()
    array = (array.sort((a,b) => a - b))
    return array
}


export {
    leerArchivoComoString, 
    escribirTextoEnArchivo, 
    combinarDosArrays, 
    combinarNArrays, 
    transformarArrayDeNumerosAUnSoloString, 
    transformarStringEnArrayDeNumeros
}