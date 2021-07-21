// snack 3

var myArray = [5, 10, 15, 20, 25, 30, 35, 40];

var sommaDispari = 0

for (i = 0; i < myArray.length; i++) {

    if (i % 2 != 0) {
        sommaDispari = (sommaDispari + myArray[i])
    }

}

console.log(sommaDispari)