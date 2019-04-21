const person = {
	name: 'Max',
	age: 29,
	greet() {
		console.log('Hi, I am ' + this.name + '.');
	}
};

const hobbies = ['sports', 'cooking'];
// for (let hobby of hobbies) {
// 	console.log(hobby);
// }

// console.log(person);
// person.greet();
// console.log(hobbies);
// console.log(
// 	hobbies.map(hobby => hobby.toUpperCase()));

// Add to array
hobbies.push('programming');
console.log(hobbies);

// Copy array
const copiedArray = hobbies.slice();
console.log(copiedArray);
const anotherCopiedArray = [...hobbies];
console.log(anotherCopiedArray);

const toArray = (arg1, arg2, arg3) => {
	return [arg1, arg2, arg3];
};

const flexibleToArray = (...args) => {
	return args;
}

console.log(toArray(1, 2, 3));
console.log(flexibleToArray(1, 2, 3, 4))