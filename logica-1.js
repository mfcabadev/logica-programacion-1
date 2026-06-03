

import promptSync from 'prompt-sync';

const prompt = promptSync();


const num1 = parseInt(prompt('Ingrese un número: '));
const num2 = parseInt(prompt('Ingrese un número: '));
const num3 = parseInt(prompt('Ingrese un número: '));

if (num1 === num2 && num2 === num3) {

    console.log('Números iguales.');

} else {
    
    let numero1, numero2, numero3;

    if (num1 >= num2 && num1 >= num3) {
        numero1 = num1;

    } else if (num2 >= num1 && num2 >= num3) {
        numero1 = num2;

    } else {
        numero1 = num3;
    }


    if (num1 <= num2 && num1 <= num3) {
        numero2 = num1;

    } else if (num2 <= num1 && num2 <= num3) {
        numero2 = num2;

    } else {
        numero2 = num3;
    }



    if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
        numero3 = num1;

    } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
        numero3 = num2;

    } else  {
        numero3 = num3;
    }

    console.log('=>', numero1, numero2, numero3);
    console.log('<=', numero3, numero2, numero1);

};


