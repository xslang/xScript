export default class XScript {
	constructor() {}
	
	init() {
		let xBuild = new XScript();
	}
	
	// Url playground
	getUrl() {
		return location.href;
	}
	getPathName(url) {
		if (!url) {
			url = location.href;
		}
		if (url.startsWith("https://")) {
			return url.substr(7);
		} else if (url.startsWith("http://")) {
			return url.substr(6);
		} else if (url.startsWith("wss://")) {
			return url.substr(5);
		} else {
			return "error";
		}
	}
	
	// Cookies playground
	getCookie(input) {
		return localStorage.getItem(input);
	}
	setCookie(input, value) {
		localStorage.setItem(input, value);
		if (xBuild.getCookie(input) != value) {
			xBuild.throw("Error", "Something went xrong with XScript.");
		}
	}
	
	// Console playground
	throw(error, details) {
		console.log("${error}: ${details}");
	}
}
