const ValidateUrlProtocol = (origUrl) => {
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

module.exports = ValidateUrlProtocol;
