export default class XScript {
	constructor() {}
	
	init() {
		const xBuild = new XScript();
	}
	
	// BOM playground
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
			xBuild.throw("Error", "Something went wrong with XScript.");
		}
	}
	
	// Console playground
	throw(error, details) {
		if (!details) {
			details = "Unknown Error";
		}
		console.log("${error}: ${details}");
	}
	
	// Math playground
	multiply(xList) {
		const { xIndex, xCount } = 0;
		for (xIndex == 0, xIndex < xList.length, xIndex++) {
			xCount *= xList[xIndex];
			xIndex += 1;
		}
	}
	addtog(xList) {
		const { xIndex, xCount } = 0;
		for (xIndex == 0, xIndex < xList.length, xIndex++) {
			xCount += xList[xIndex];
			xIndex += 1;
		}
	}
	substract(xList) {
		const { xIndex, xCount } = 0;
		for (xIndex == 0, xIndex < xList.length, xIndex++) {
			xCount -= xList[xIndex];
			xIndex += 1;
		}
	}
	divide(xList) {
		const { xIndex, xCount } = 0;
		for (xIndex == 0, xIndex < xList.length, xIndex++) {
			xCount /= xList[xIndex];
			xIndex += 1;
		}
	}
	
	// DOM Playground
	select(query) {
		if (query.startsWith("#")) {
			return byId(query);
		} else if (query.startsWith(".")) {
			return byClass(query);
		} else if (query.includes("(") && query.includes(")")) {
			return query;
		} else if (!query) {
			return "Error";
		} else {
			return byTag(query);
		}
	}
	byId(query) {
		return document.getElementById(query);
	}
	byClass(query) {
		return document.getElementsByClassName(query);
	}
	byTag(query) {
		return document.getElementsByTagName(query);
	}
}
