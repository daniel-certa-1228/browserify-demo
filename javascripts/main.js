"use strict";

console.log( "main.js" );

let mainHappy = require("./happy.js");

console.log( "happy", mainHappy );
console.log( "mainHappy.getHappy", mainHappy.getHappy );

mainHappy.setHappy("super");
console.log(  mainHappy.getHappy() );