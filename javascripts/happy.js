"use strict";

console.log( "happy.js" );

let happy = true;

function getHappy() {
	return happy;
}

function setHappy(val) {
	happy = val;
}

module.exports = {getHappy, setHappy};