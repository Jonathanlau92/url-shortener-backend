const GenerateShortenedUrl = (origUrl, baseUrl) => {
	// Validate URL protocol and return a complete website link
	const longUrl = validateUrlProtocol(origUrl);
	const randomStr = getRandomString();
	const shortenedUrl = `${baseUrl}/${randomStr}`;
	return {
		longUrl: longUrl,
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

const validateUrlProtocol = (origUrl) => {
	// Use REGEX to validate protocol and urls
	let protocolCondition =
		origUrl.startsWith("http://") || origUrl.startsWith("https://");
	if (protocolCondition) {
		return origUrl;
	} else {
		let newUrl = "https://" + origUrl;
		return newUrl;
	}
};

module.exports = GenerateShortenedUrl;
