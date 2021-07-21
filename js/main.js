// snack 4

var firstArray = ['uno', 'due', 'tre', 'quattro', 'cinque'];

console.log(firstArray);

var secondArray = ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto'];

console.log(secondArray);

// ciclo

for (i = 0; firstArray.length < secondArray.length; i++) {
    firstArray.push(secondArray[5]);
    firstArray.push(secondArray[6]);
    firstArray.push(secondArray[7]);
}

console.log(firstArray);





