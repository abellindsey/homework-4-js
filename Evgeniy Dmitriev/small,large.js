function largest() {
	let largestNum = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		if (largestNum < arguments[i]) {
			largestNum = arguments[i];
		} else continue;
	}
	return largestNum;

}
console.log(largest(41, 6, 1, 2, 8, 9, 27))

function smallest() {
	let smallestNum = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		if (smallestNum > arguments[i]) {
			smallestNum = arguments[i];
		}
		else continue;
	}
	return smallestNum;

}
console.log(smallest(41,6,0.1,-2,8,-0.9,27))