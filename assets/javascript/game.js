//
let numberRandom = $("#randomNumber");
let crystal1 = 0;
let crystal2 = 0;
let crystal3 = 0;
let crystal4 = 0;
let crystalSum = 0;
let sumCrystal = $("#currentSum");
let randNum = 0;
let winCounter = $("#winCounter");
let lossCounter = $("#lossCounter");
let counterWin = 0;
let counterLoss = 0;

function randomNumber120() {
    randNum = Math.floor(Math.random() * 101 + 19);
    insertNum();
}

function randomNumber12() {
    crystalNum = Math.floor(Math.random() * 12 + 1);
    return crystalNum;

}

function insertNum() {
    numberRandom.html(randNum);
}

function assignCrystalValues() {
    crystal1 = randomNumber12();
    crystal2 = randomNumber12();
    crystal3 = randomNumber12();
    crystal4 = randomNumber12();
}

function reset() {
    randomNumber120();
    assignCrystalValues();
    crystalSum = 0;
    sumCrystal.html(crystalSum);
};

randomNumber120();
assignCrystalValues();


$('#crystal1').on("click", function(event) {
    crystalSum += crystal1;
    sumCrystal.text(crystalSum);
    console.log(crystalSum);
    console.log(crystal1);
    if (crystalSum === randNum) {
        counterWin++;
        winCounter.html(counterWin);
        reset();
    } else if (crystalSum > randNum) {
        counterLoss++
        lossCounter.html(counterLoss);
        reset();
    }
});
$('#crystal2').on("click", function(event) {
    crystalSum += crystal2;
    sumCrystal.text(crystalSum);
    console.log(crystal2);
    if (crystalSum === randNum) {
        counterWin++;
        winCounter.html(counterWin);
        reset();
    } else if (crystalSum > randNum) {
        counterLoss++;
        lossCounter.html(counterLoss);
        reset();
    }
});
$('#crystal3').on("click", function(event) {
    crystalSum += crystal3;
    sumCrystal.text(crystalSum);
    console.log(crystalSum);
    console.log(crystal3);
    if (crystalSum === randNum) {
        counterWin++;
        winCounter.html(counterWin);
        reset();
    } else if (crystalSum > randNum) {
        counterLoss++;
        lossCounter.html(counterLoss);
        reset();
    }
});
$('#crystal4').on("click", function(event) {
    crystalSum += crystal4;
    sumCrystal.text(crystalSum);
    console.log(crystalSum);
    console.log(crystal4);
    if (crystalSum === randNum) {
        counterWin++;
        winCounter.html(counterWin);
        reset();
    } else if (crystalSum > randNum) {
        counterLoss++;
        lossCounter.html(counterLoss);
        reset();
    }
});