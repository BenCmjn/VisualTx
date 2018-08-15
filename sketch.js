var input;
var submit;

var shapeCoef = 25; // maximumHEX = F(=16), 16*25 = 400 (canvasSize); 
var colorCoef = 16; // maximumHEX = F(=16), 16*16 = 256 (max color); 

function setup() {
    noLoop();
    // noStroke();
    input = select("#input");
    submit = select("#submit");

    createCanvas(400, 400);
    input.changed(newAddress);
}

function draw() {
    background(255);

}

function newAddress() {
    var address = input.value();
    var type = address.slice(0, 2);
    var hash = address.slice(2, address.length);
    console.log("address entered: " + address + "\ntype of address: " + type + "\nrest of hash: " + hash);

    var result = hash.split(""); // put each char of the hash in an array
    var coord = unhex(result); // transform those char from HEX to NUMBERS
    var output = Array.from(coord, x => x += 1); // add "1" to each of these numbers.
    drawShape(output);
    return output; // go to draw something cool with this array.
}

function drawShape(info) {
    redraw();
    print("info to draw with: " + info + "\nsize: " + info.length);; // expected output: Array without any 0
    var scale = Array.from(info, x => x = x * shapeCoef); // draw it big
    var col   = Array.from(info, x => x = x * colorCoef); // draw it bright

    var c1 = color(col[0],col[1],color[2],col[3]);
    var c2 = color(col[4],col[5],col[6],  col[7]);
    var c3 = color(col[8],col[9],col[10],col[11]);
    var c4 = color(col[36],col[37],col[38],col[39]);

    fill(c1);
    var f1 = triangle(scale[12],scale[13],scale[14],scale[15],scale[16],scale[17]);
    fill(c2);
    var f2 = triangle(scale[18],scale[19],scale[20],scale[21],scale[22],scale[23]);
    fill(c3);
    var f3 = triangle(scale[24],scale[25],scale[26],scale[27],scale[28],scale[29]);
    fill(c4);
    var f4 = triangle(scale[30],scale[31],scale[32],scale[33],scale[34],scale[35]);
    
};