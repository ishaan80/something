
var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var analogPin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var outpin = new mraa.Gpio(8);
var analogValue = 0;

while(true){
outpin.dir(mraa.DIR_OUT);
outpin.write(1);

analogValue = analogPin0.read(); //read the value of the analog pin
console.log("Analog should be 1, but val is : " + analogValue); //write the value of the analog pin to the console
outpin.write(0);

analogValue = analogPin0.read(); //read the value of the analog pin
console.log("Analog should be 0, but val is : " + analogValue); //write the value of the analog pin to the console
}
