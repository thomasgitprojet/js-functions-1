// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.log("1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres.");

/**
 * get sum
 * @param {number} nbr1 
 * @param {number} nbr2 
 * @returns get result
 */

function sum(nbr1, nbr2) {
    const result = nbr1 + nbr2;
    return result;
}

console.log(sum(2, 3));
console.log(sum(10, 12));


/* ------------------------------------------------------*/

console.log("2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre.");

/**
 * get smallest number
 * @param {number} nbr1 
 * @param {*number} nbr2 
 * @returns litle number
 */

function getLitleNumber(nbr1, nbr2) {
 return Math.min(nbr1, nbr2)
}

console.log(getLitleNumber(20,30));
console.log(getLitleNumber(10, 5));


/* ------------------------------------------------------*/

console.log("3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau.");

const array = [
    1, 
    2, 
    3, 
    4
]

const newArray = [
    "truc",
    "bidule",
    "machin"
]

function getLastValue(array) {
    const lastValue = array[array.length-1];
    return lastValue;
}

console.log(getLastValue(array));
console.log(getLastValue(newArray));


/* ------------------------------------------------------*/

console.log("4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation.");


function getRatio(a, b) {
    return  (1 + b / 100) * a;
}

console.log(getRatio(50, 10));
console.log();


/* ------------------------------------------------------*/

console.log("5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs.");

/**
 * get max value
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns max value
 */

function getMaxValue (a, b, c) {
   if (a > b && a > c) {
    return a
   }

   if (b > a && b > c) {
    return b
   }
   else {
    return c
   }
}

console.log(getMaxValue(1, 2, 3));
console.log(getMaxValue(6, 5, 4));


/* ------------------------------------------------------*/

console.log("6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau.");

const arrayNbr = [
    10,
    20,
    30
];

let sumArray = 0;

/**
 * get sum of values array
 * @param {array} arrayName 
 * @returns {number} sum 
 */
function getSumArray(arrayName) {
    for (const number of arrayName) { 
        sumArray+= number;
    }
    return sumArray;
}

console.log(getSumArray(arrayNbr));
console.log();


/* ------------------------------------------------------*/

console.log("7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre.");
/**
 * get random number
 * @param {number} number 
 * @returns random number
 */
function getrandomNumber(number) {
    return Math.floor(Math.random() * (number+1));
}
console.log(getrandomNumber(2));
console.log(getrandomNumber(2000));


/* ------------------------------------------------------*/

console.log("8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau.");

const arrayNbraverange = [
    10,
    20,
    30
];


/**
 * get averange of array 's value
 * @param {array} array 
 * @returns {number}
 */
function getAverange(array) {
    return getSumArray(array) / array.length;
}
console.log(getSumArray(arrayNbraverange));

console.log(getAverange(arrayNbraverange));
console.log();


/* ------------------------------------------------------*/

console.log("9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes.");

/**
 * get time
 * @param {number} minute 
 * @returns {number}
 */
function getMinute (minute) {
    const convMinute = minute % 60;
    const convHour = (minute - convMinute) / 60;
    return (`${convHour} : ${convMinute}`)
}
console.log(getMinute(70));
console.log(getMinute(135));


/* ------------------------------------------------------*/

console.log("10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau.");
/**
 * get smaller value of array
 * @param {array} array 
 * @returns {number} 
 */
function getMinValueArray(array) {
    return Math.min(...array)
}
console.log(getMinValueArray([2, 87, 5, 69]));
console.log(getMinValueArray([58, 32, 7, 83]));


/* ------------------------------------------------------*/

console.log("11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale .");

/**
 * get key of max value in object
 * @param {object} object 
 * @returns {string}
 */

function getKeyOfMaxValue (object) {
    let valueMax = 0;
    let value = 0;
    let keyMax;
    for (key in object) {

        value = object[key];

        if (value > valueMax) {
            keyMax = key;
        }
    }
    return keyMax
    // return valueMax
}
console.log(getKeyOfMaxValue({age : 16, taille : 180, melon : 200}));



/* ------------------------------------------------------*/

console.log("12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau.");

/**
 * get random value of array
 * @param {array} array 
 * @returns {value}
 */

function getRandomValueOfArray (array) {
  
    const iRandom = getrandomNumber ((array.length)-1);
    const randomValue = array[iRandom]
    
    return randomValue
}

console.log(getRandomValueOfArray(["banane", "pomme", "orange"]));
console.log(getRandomValueOfArray(["Bernardo", "Zorro", "Tornado"]));


/* ------------------------------------------------------*/

console.log("13/ Implémentez une fonction qui retourne le nombre de mots dans un texte.");

function getNumberWord (txt) {
    return nbrWord = txt.split(" ").length
}

console.log(getNumberWord ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet veniam officiis rerum reiciendis deleniti repudiandae hic consequuntur at unde quisquam ut ex fugiat facere. Officiis ducimus eius numquam molestiae!"));
console.log(getNumberWord("exercices terminés"));
