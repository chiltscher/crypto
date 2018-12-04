import Caesar from "./Caesar/Caesar";


const TEST_STRING = "Ides of March";
let Coder = new Caesar(1);

console.log("Caesar cipher");
console.log("#########################");

let enc = Coder.encipher(TEST_STRING);
console.log(enc);
console.log(Coder.decipher(enc));