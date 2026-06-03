

// import promptSync from 'prompt-sync'; // Comentado para usar html

// const prompt = promptSync(); // comentado para usar html


const num1 = parseInt(prompt('Ingrese un número: '));
const num2 = parseInt(prompt('Ingrese un número: '));
const num3 = parseInt(prompt('Ingrese un número: '));

if (num1 === num2 && num2 === num3) {

    document.getElementById('resultado-iguales').innerText = 'Los números son iguales';

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

    // console.log('=>', numero1, numero2, numero3);
    // console.log('<=', numero3, numero2, numero1);

    document.getElementById('mayor-a-menor').innerText = 
        'De mayor a menor (=>): ' + numero1 + ' - ' + numero3 + ' - ' + numero2;

    document.getElementById('menor-a-mayor').innerText = 
        'De menor a mayor (<=): ' + numero2 + ' - ' + numero3 + ' - ' + numero1;

};


