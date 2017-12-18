//
let numberRandom = $("#randomNumberheading");
let crystal1 = $("#crystalOne");
let crystal2 = $("#crystalTwo");
let crystal3 = $("#crystalThree");
let crystal4 = $("#crystalFour");
let crystalSum = $("#yourSum");

//

function randomNumber() {
    numberRandom.text(Math.floor(Math.random() * 101 + 19));
}

function randomChoices() {
    crystal1.text(Math.floor(Math.random() * 11 + 1));
    crystal2.text(Math.floor(Math.random() * 11 + 1));
    if (crystal2 == crystal1) {
        crystal2.text(Math.floor(Math.random() * 11 + 1));
    }
    crystal3.text(Math.floor(Math.random() * 11 + 1));
    if (crystal3 == crystal1 || crystal3 == crystal2) {
        crystal2.text(Math.floor(Math.random() * 11 + 1));
    }
    crystal4.text(Math.floor(Math.random() * 11 + 1))
    if (crystal4 == crystal1 || crystal4 == crystal2 || crystal4 == crystal3) {
        crystal2.text(Math.floor(Math.random() * 11 + 1));
    }
}

crystal1.addEventListener("click", function(event) {
    crystalSum += crystal1;
});
crystal2.addEventListener("click", function(event) {
    crystalSum += crystal2;
});
crystal3.addEventListener("click", function(event) {
    crystalSum += crystal3;
});
crystal4.addEventListener("click", function(event) {
    crystalSum += crystal4;
});