// snack 4

var firstArray = ['uno', 'due', 'tre', 'quattro', 'cinque'];

console.log(firstArray);

var secondArray = ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto'];

console.log(secondArray);

// ciclo

for (i = 0; firstArray.length < secondArray.length; i++) {
    do {
        firstArray.push(secondArray[0]);
    } while ((firstArray.length == secondArray.length) - 1)
    
}

console.log(firstArray);





