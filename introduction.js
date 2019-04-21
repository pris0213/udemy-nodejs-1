const name = 'Max';
let age = 29;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobbies)  => {
	return 'Name is ' + userName + ', age is ' + 
	userAge + ' and the user has hobbies: ' + 
	userHasHobbies + '.';
}

const add = (a,b) => a + b;
const getOlder = age => age + 1;

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1, 2));
console.log(getOlder(age));