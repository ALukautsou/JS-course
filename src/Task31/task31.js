function getAccept(acceptType) {
	var req = new XMLHttpRequest();
	req.open("GET", "http://eloquentjavascript.net/author", false);
	req.setRequestHeader("accept", acceptType);
	req.send(null);
	return req.responseText;
}

console.log(getAccept("text/plain"));
console.log(getAccept("text/html"));
console.log(getAccept("application/json"));
console.log(getAccept("application/rainbows+unicorns"));