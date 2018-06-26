function sum(...arr) {
	let total = 0;
	if (arr.length === 1) {
		total = +arr[0];
	} else {
		total = arr.shift() + sum(...arr)
	}
	return total;
}

console.log(sum(1,5,10,16));