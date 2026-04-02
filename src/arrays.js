/*Ejercicio 1-Filtrar pares*/

const array1 = [1, 2, 3, 4, 5, 6]
const filtroPares = array1.filter((n) => n % 2 === 0)
/*const filtroPares = array1.map((n) => {
    if (n % 2 === 0) { return n }
})      //(n) => n % 2 === 0*/
//console.log(filtroPares)

/////////////////////////////////////////////////////////////
/*Ejercicio 2-Duplicar Valores*/
const duplicarValores = array1.map((n) => n * 2)
//console.log(duplicarValores)

/////////////////////////////////////////////////////////////
/*Ejercicio 3-Contar elementos (reduce)*/
const array2 = ["a", "b", "a"]
const contarElementos = array2.reduce((acc, elemento) => {
    acc[elemento] = (acc[elemento] || 0) + 1
    return acc
}, {})
//console.log(contarElementos)
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/*Ejercicio 4 - Funcion numeros pares*/
function getEvenNumbers(arr) {
    let arrayResultado = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrayResultado.push(arr[i])
        }
    }
    return arrayResultado
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]))

/*Ejercicio 5 - Funcion x2*/
function doubleNumbers(arr) {
    let arrayResultado = []
    for (let i = 0; i < arr.length; i++) {
        let multiplyNumber = arr[i] * 2
        arrayResultado.push(multiplyNumber)
    }
    return arrayResultado
}
console.log(doubleNumbers([1, 2, 3, 4, 5, 6]))

/*Ejercicio 6 - ContarLetras*/
function countLetters(arr) {
    let counter = {}

    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i]
        if (counter[letter]) {
            counter[letter] = counter[letter] + 1
        } else {
            counter[letter] = 1
        }
    }
    return counter
}

console.log(countLetters(["a", "b", "a"]))
console.log(countLetters(["x", "y", "x", "x"]))
console.log(countLetters(["h", "o", "l", "a"]))

/*Ejercicio 7 - Funcion numeros impares */

function getOddNumbers(arr) {
    let arrayResultado = []
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2 === 0)) {
            arrayResultado.push(arr[i])
        }
    }
    return arrayResultado
}

console.log(getOddNumbers([1, 3, 5, 2, 4]))