import {
    leerArchivoComoString, 
    escribirTextoEnArchivo, 
    transformarStringEnArrayDeNumeros, 
    transformarArrayDeNumerosAUnSoloString, 
    combinarDosArrays, 
    combinarNArrays 
} from './index.js'

leerArchivoComoString()
escribirTextoEnArchivo('./Archivos/datos.txt', 'Prueba4', true)
leerArchivoComoString()
transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', '|')
transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ',')
combinarDosArrays([1, 5, 10],[2, 3, 8, 11])
combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]])