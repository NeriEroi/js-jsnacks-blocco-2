var myNameList = ['Luca', 'Fabio', 'Anna', 'Erica'];

var mySurnameList = ['Rossi', 'Bianchi', 'Verdi', 'Gialli'];

for (i = 0; i < 4; i++) {

    var randomName = myNameList[Math.floor(Math.random() * myNameList.length)];

    var randomSurname = mySurnameList[Math.floor(Math.random() * mySurnameList.length)];

    console.log(randomName + ' ' + randomSurname);

}