var input;
var submit;
var output;
// 0x4a071EEe72Bc8664C81B62836932eD0d246dA82b

function setup() { 
  input = select("#input");
  submit= select("#submit");

  createCanvas(400, 400);

  input.changed(newText);
} 

function draw() { 
  background(155);
  rect(10,10,10,10);

}

function newText(){
	var str = input.value();
	console.log(str);

	var res = str.split("");
	console.log(res);
}