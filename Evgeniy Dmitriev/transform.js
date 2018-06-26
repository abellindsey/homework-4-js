const baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = transform(baseArray);

function transform(baseArray) {
	let newArray = [];
	for (let i = 0; i < baseArray.length; i++) {
		newArray[i] = () =>
			 baseArray[i];
	}
	return newArray;
}
console.log(newArray[0]());
console.log(newArray[3]());
console.log(newArray[9]());
