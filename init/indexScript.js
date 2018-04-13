
function lookup(searchString, key) {				//		of form "key=value"
	var keyStart = searchString.indexOf(key + "=", 0);
	if (keyStart < 0)
		return "";
	var resultStart = keyStart + key.length + 1;
	var resultEnd = searchString.indexOf("&", resultStart);
	if (resultEnd < 0)
		resultEnd = searchString.length;
	return searchString.substring(resultStart, resultEnd);
}

function hasSearchOption(searchString, key) {				//		a simple "key"
	keyStart = searchString.indexOf(key, 0);
	if (keyStart < 0)
		return false;
	var startOk = (keyStart == 0) || (searchString.charAt(keyStart - 1) == "&");
	var endOk = (keyStart + key.length == searchString.length) || (searchString.charAt(keyStart + key.length) == "&");
	return startOk && endOk;
}


function parseSearchString(defaultCollection) {
	var url = window.location.href;
	
	//------		first look for direct link to file using a pseudo-anchor of the form #book,file or #book,file,toc
	var hashIndex = url.indexOf("#");
	if (hashIndex > 0) {
		var params = url.substr(hashIndex + 1);
		var commaIndex = params.indexOf(",");
		if (commaIndex > 0) {
			var book = params.substr(0, commaIndex);
			params = params.substr(commaIndex + 1);
			var tocIndex = params.indexOf(",toc");
			if (tocIndex < 0)
				window.location.href = "core/index.html?book=" + book + "&page=" + params;
			else {
				var page = params.substr(0, tocIndex);
				window.location.href = "core/index.html?book=" + book + "&page=" + page + "&toc=true";
			}
		}
	}
	else {
		var searchString = window.location.search;
		
		var book = lookup(searchString, "book");
		var module = lookup(searchString, "module");
		if (book.length != 0 || module.length != 0) {
	//------		either direct link to file using a query string of the form ?book=xxx&page=file
	//------		or direct link to book or module using a query string of the form ?book=xxx
			var page = lookup(searchString, "page");
			var showToc = lookup(searchString, "toc") == "true" || hasSearchOption(searchString, "toc");
			var itemRef = (book.length != 0) ? ("book=" + book) : ("module=" + module);
			var newLocation = "core/index.html?" + itemRef;
			if (page.length != 0) {
				newLocation += "&page=" + page;
				if (showToc)
					newLocation += "&toc=true";
			}
			window.location = newLocation;
		}
		else {
	//------		either start a collection if query string is ?collection=xxx
	//------		or start the default collection
			var collection = lookup(searchString, "collection");
			if (collection.length == 0)
				collection = defaultCollection;
			window.location = "collection_" + collection + ".html";
		}
	}
}