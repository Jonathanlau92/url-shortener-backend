const GenerateShortenedUrl = (baseUrl) => {
	const randomStr = getRandomString();
	const shortenedUrl = `${baseUrl}/${randomStr}`;
	return {
		shortenedUrl: shortenedUrl,
		urlId: randomStr,
	};
};

const getRandomString = () => {
	let randomStr =
		Math.random().toString(32).substring(2, 5) +
		Math.random().toString(32).substring(2, 5);
	return randomStr;
};

module.exports = GenerateShortenedUrl;
