const fetchData = () => {
	const promise = new Promise((resolve, reject) => {	
		setTimeout(() => {
			resolve('Fetch Data is done!');
		}, 1500);
	});
	return promise;
};

setTimeout(() => {
	console.log('Timer is done!');
	fetchData()
	.then(text => {
		console.log(text);
	});
}, 2000);

console.log('Hello!');
console.log('Hi!');