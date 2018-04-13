function hasSearchOption(searchString, key) {				//		a simple "key"
	keyStart = searchString.indexOf(key, 0);
	if (keyStart < 0)
		return false;
	var startOk = (keyStart == 0) || (searchString.charAt(keyStart - 1) == "&");
	var endOk = (keyStart + key.length == searchString.length) || (searchString.charAt(keyStart + key.length) == "&");
	return startOk && endOk;
}


function showAllElements(className) {
	var e;
	if (document.getElementsByClassName)
		e = document.getElementsByClassName(className);
	else
		e = document.querySelectorAll("." + className);
	
	for ( var i=0, len=e.length; i<len; ++i )
		e[i].style.display = (e[i].tagName == 'DIV' || e[i].tagName == 'P') ? 'block'
																	: (e[i].tagName == 'LI') ? 'list-item' : 'inline';
}

function displayUpdateMessage() {
	if (typeof server_collectionDates != 'undefined') {
		var needsUpdate = false;
		for (var collection in collectionDates) {
			var localDate = collectionDates[collection];
			var serverDate = server_collectionDates[collection];
			if (serverDate > localDate)
				needsUpdate = true;
		}
		if (typeof bookDates != 'undefined' && typeof server_bookDates != 'undefined')
			for (var book in bookDates) {
				var localDate = bookDates[book];
				var serverDate = server_bookDates[book];
				if (serverDate > localDate)
					needsUpdate = true;
			}
		if (needsUpdate) {
			var messageDiv = document.getElementById("updateMessage");
			messageDiv.style.display = "block";
		}
	}
}


function displayCorrectMessage() {
	displayUpdateMessage();
	
	var searchString = window.location.search;
	var bookHasVideos = hasSearchOption(searchString, "hasVideos");
	var bookHasSummaries = hasSearchOption(searchString, "hasSummaries");
	
	//--------------------------------------
	
	var browserSpan = document.getElementById("browser");
	browserSpan.innerHTML = environment.browser;
	
	var browserVersionSpan = document.getElementById("browserVersion");
	browserVersionSpan.innerHTML = environment.browserVersion;
	
	if (environment.os == "Mac") {		//	ignores OS versions before 10.2
		if (environment.osVersion < 10.105)
			osString = "Mac Yosemite";
		else if (environment.osVersion < 10.115)
			osString = "Mac El Capitan";
		else if (environment.osVersion < 10.195)
			osString = "a Mac running an operating system newer than El Capitan";
		else if (environment.osVersion < 10.45)
			osString = "a very old Mac operating system";
		else if (environment.osVersion < 10.55)
			osString = "Mac Leopard";
		else if (environment.osVersion < 10.65)
			osString = "Mac Snow Leopard";
		else if (environment.osVersion < 10.75)
			osString = "Mac Lion";
		else if (environment.osVersion < 10.85)
			osString = "Mac Mountain Lion";
		else if (environment.osVersion < 10.95)
			osString = "Mac Mavericks";
		else
			osString = "a Mac running an operating system newer than El Capitan";
	}
	else if (environment.os == "Windows") {
		if (environment.osVersion < 5.05)
			osString = "a very old Windows operating system";
		else if (environment.osVersion < 5.15)
			osString = "Windows XP";
		else if (environment.osVersion < 6.05)
			osString = "Windows Vista";
		else if (environment.osVersion < 6.15)
			osString = "Windows 7";
		else if (environment.osVersion < 6.25)
			osString = "Windows 8";
		else if (environment.osVersion < 6.35)
			osString = "Windows 8.1";
		else if (environment.osVersion < 10.05)
			osString = "Windows 10";
		else
			osString = "a Windows version newer than Windows 10";
	}
	else if (environment.os == "Unknown")
		osString = "an unknown operating system";
	else
		osString = environment.os + " " + environment.osVersion;
	
	var osSpan = document.getElementById("os");
	osSpan.innerHTML = osString;
	
	if (bookHasVideos || bookHasSummaries)
		showAllElements("onlyApplets");
	else
		showAllElements("nonApplets");
	
	if (environment.isLocal)
		showAllElements("localSite");
	else
		showAllElements("remoteSite");
	
	if (environment.os == 'iOS' || environment.os == 'Android')
		showAllElements("browser_tablet");
	else if (!navigator.javaEnabled())
		showAllElements("browser_noJava");
	else {
		showAllElements("browser_java");
		if (environment.os == "Windows")
			showAllElements("windows");
		else if (environment.os == "Mac") {
			showAllElements("mac");
			if (environment.osVersion < 10.65)
				showAllElements("leopard");
			else
				showAllElements("lion");
		}
		else
			showAllElements("otherOs");
		
		if (environment.isLocal)
			showAllElements("localSite");
		else
			showAllElements("remoteSite");
			
		if (environment.os == "Windows" && environment.osVersion < 5.15)
			showAllElements("windows7");
		else
			showAllElements("windows8");
		
		if (environment.browser == "IE") {
			showAllElements("ie");
			if (environment.browserVersion < 8.9 && hasVideos)
				showAllElements("ie8Videos");
		}
		else if (environment.browser == "Edge")
			showAllElements("edge");
		else if (environment.browser == "Firefox")
			showAllElements("firefox");
		else if (environment.browser == "Safari")
			showAllElements("safari");
		else if (environment.browser == "Chrome")
			showAllElements("chrome");
		else
			showAllElements("otherBrowser");
	}
}