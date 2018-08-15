var input;
var submit;
var output;
var shapeCoef = 25; // maximumHEX = F(=16), 16*25 = 400 (canvasSize); 
var colorCoef = 16; // maximumHEX = F(=16), 16*16 = 256 (max color); 

function setup() {
    noLoop();
    input = select("#input");
    submit = select("#submit");

    createCanvas(400, 400);
    input.changed(newText);


}

function draw() {
	background(255);

}

function newText() {
	redraw();
    var address = input.value();
    console.log("address entered: " + address);
    var type = address.slice(0, 2);
    console.log("type of address: " + type);
    var hash = address.slice(2, address.length);
    console.log("rest of the hash: " + hash);

    var res = hash.split(""); 	// put each char of the hash in an array
    var coord = unhex(res); 	// transform those char from HEX to NUMBERS
    var numbersArr = Array.from(coord, x => x+=1); // add "1" to each of these NUMBERS

    print("TRANSFORMED ARRAY: "+numbersArr); // expected output: Array without any 0
    var scaled = Array.from(numbersArr, x => x=x*shapeCoef); 	// draw it big
    var colorReady = Array.from(numbersArr, x => x=x*colorCoef);// draw it bright

    var fig1 = scaled.slice(0, 6);

    console.log("FIG.1: "+fig1);
    // fill();
    triangle(fig1[0],fig1[1],fig1[2],fig1[3],fig1[4],fig1[5],fig1[6]);

    // var fig1coord = 


    // console.log(fig1coord[0]);
    // console.log(res[0]);
    // return res;
}





