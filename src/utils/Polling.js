const url = 'https://3taps-polling.p.rapidapi.com/anchor/?timestamp=99';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a606a5d11amshf52d8c1f2361745p152d67jsna3b55bd4304e',
		'x-rapidapi-host': '3taps-polling.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}