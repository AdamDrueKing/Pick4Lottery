function getRandom(number) {
    var randomNum = Math.round(Math.random() * number);
    randomNum = randomNum.toString();

    if (randomNum.length < 2) {
        randomNum = "0" + randomNum;
    }

    return randomNum;
}

function getPBNums() {
    document.getElementById("PB1").innerHTML = getRandom(65)
    document.getElementById("PB2").innerHTML = getRandom(65)
    document.getElementById("PB3").innerHTML = getRandom(65)
    document.getElementById("PB4").innerHTML = getRandom(65)
}