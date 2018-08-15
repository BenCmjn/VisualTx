var input;
var submit;
var output;
// 0x4a071EEe72Bc8664C81B62836932eD0d246dA82b

function setup() {
    input = select("#input");
    submit = select("#submit");

    createCanvas(400, 400);
    input.changed(newText);

    // background(155);
    rect(10, 10, 10, 10);
}
//function draw() {}

function newText() {
    var address = input.value();
    console.log("address entered: " + address);
    var type = address.slice(0, 2);
    console.log("type of address: " + type);
    var hash = address.slice(2, address.length);
    console.log("rest of the hash: " + hash);

    var res = hash.split("");
    console.log(res);
}