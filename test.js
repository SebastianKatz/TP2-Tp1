import {
    leerArchivoComoString, 
    escribirTextoEnArchivo, 
    transformarStringEnArrayDeNumeros, 
    transformarArrayDeNumerosAUnSoloString, 
    combinarDosArrays, 
    combinarNArrays 
} from './index.js'

console.log(leerArchivoComoString())
escribirTextoEnArchivo('./Archivos/datos.txt', 'Prueba5', true)
console.log(leerArchivoComoString())
console.log(transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', '|'))
console.log(transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ','))
console.log(combinarDosArrays([1, 5, 10],[2, 3, 8, 11]))
console.log(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))