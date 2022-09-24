import fs from 'fs'

const leerArchivoComoString = function() {
    let datos = fs.readFileSync('./Archivos/datos.txt', 'utf-8')
    console.log(datos)
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
    console.log(array)
}

const transformarArrayDeNumerosAUnSoloString = function(array, separador) {
    let dev = array.reduce((previousValue, currentValue) => previousValue + separador + currentValue);
    console.log(dev)
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
    console.log(nuevoArray)
}

const combinarNArrays = function(listaDeArrays) {
    let array = listaDeArrays.flat()
    console.log(array.sort((a,b) => a - b))
}


export {
    leerArchivoComoString, 
    escribirTextoEnArchivo, 
    combinarDosArrays, 
    combinarNArrays, 
    transformarArrayDeNumerosAUnSoloString, 
    transformarStringEnArrayDeNumeros
}