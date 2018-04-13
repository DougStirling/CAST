function showChapter(chapter) {
	showPage(chapter, -1, -1);
}

function showSection(chapter, section) {
	showPage(chapter, section, -1);
}

function showPage(chapter, section, page) {
	doTocHighlight(chapter, section);
	
	if (hasSummaries)
		if (chapter != displayPage.ch || section != displayPage.sec) {
			showingSummary = true;
			showingVideo = false;
		}
	
	displayPage.ch = chapter;
	displayPage.sec = section;
	displayPage.page = page;
	
	updateBannerForPage();
	
	updateDisplayPage();
}

function appendQueryKey(queryString, key) {
	if (queryString.length == 0)
		return key;
	else
		return queryString + "&" + key;
}

/*
function hasLocalRestrictions() {
	return environment.isLocal && (environment.browser == "Chrome" || (environment.browser == "Safari" && environment.browserVersion >= 6) );
}
*/

function getBasePageName(fileCore) {
	var file_index = "";
	while (fileCore.length > 0) {
		var c = fileCore.charAt(fileCore.length - 1);
		if (c >= '0' && c <= '9') {
			file_index = c + file_index;
			fileCore = fileCore.substring(0, fileCore.length - 1);
		}
		else
			break;
	}
	if (fileCore.charAt(fileCore.length - 2) == '_')
		fileCore = fileCore.substring(0, fileCore.length - 2);
	return fileCore + file_index;
}


function updateDisplayPage() {
	var ref = book.objectFromIndices(displayPage.ch, displayPage.sec, displayPage.page);
	
	var contentFrame = document.getElementById("content");
	var sectionDiv = document.getElementById("section");
	
	var isSection = ref.file.indexOf("sec_") == 0;
	
//	console.log("about to open page: " + ref.directory + ", " + ref.file + "\n");

	if (isSection) {
//		alert("changing section page for: " + ref.directory + ", " + ref.file);
		sectionDiv.innerHTML = "";
		
		var head= document.getElementsByTagName('head')[0];
		var script= document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', ref.directory + "/sec/" + ref.file + ".js");
		head.appendChild(script);
		
		sectionDiv.style.display = "block";
		contentFrame.style.display = "none";
	}
	else {
		var queryString = "";
		if (hasSummaries && showingSummary)
			queryString = appendQueryKey(queryString, "isSummary");
		if (hasVideos && showingVideo)
			queryString = appendQueryKey(queryString, "isVideo");
			
		if (isWindows && !isIE)		//		IE 8 always draws applets with darker background -- writeAppletParams() does not seem to work
			queryString = appendQueryKey(queryString, "isWin");
			
		if (backgroundColor != null)
			queryString = appendQueryKey(queryString, "backgroundColor=" + backgroundColor);
			
		if (language != null)
			queryString = appendQueryKey(queryString, "language=" + language);
			
		var baseFileName = getBasePageName(ref.file);
		var variations = versions[baseFileName]
		if (variations !== undefined) {
			var variationsString = "";
			for (var i=0 ; i<variations.length ; i++) {
				if (i > 0)
					variationsString += ",";
				variationsString += variations[i];
			}
			queryString = appendQueryKey(queryString, "variations=" + variationsString);
		}
		
		var variationNames = "";
		for (var key in versionName) {
			if (variationNames.length > 0)
				variationNames += ",";
			variationNames += key + ":" + versionName[key];
		}
		queryString = appendQueryKey(queryString, "variationNames=" + variationNames);
		
		queryString = appendQueryKey(queryString, "homeDir=" + homeDir);
			
		if (!(typeof localVideos === "undefined") && localVideos)
			queryString = appendQueryKey(queryString, "localVideos");
		
		var nextPageType = isLastPage() ? 2
					: (isLastPageInSection() && !(displayPage.sec != -1 && displayPage.page == -1)) ? 1 : 0;
		var nextButton = nextButtonInfo(nextPageType);
		if (nextButton != null) {
			queryString = appendQueryKey(queryString, "nextImgCore=" + nextButton.nextImgCore);
			queryString = appendQueryKey(queryString, "nextImgWidth=" + nextButton.nextImgWidth);
		}
		else
			queryString = appendQueryKey(queryString, "nextImgCore=end");
		
		if (queryString.length > 0)
			queryString = "?" + queryString;
		
		if (showingSummary && ref.summaryDir != null && ref.summaryFile != null)
			contentFrame.src = ref.summaryDir + "/" + ref.summaryFile + ".html" + queryString;
		else if (showingVideo && ref.videoDir != null && ref.videoFile != null)
			contentFrame.src = ref.videoDir + "/" + ref.videoFile + ".html" + queryString;
		else
			contentFrame.src = ref.directory + "/" + ref.file + ".html" + queryString;
		
		contentFrame.style.display = "block";
		if (isWindows && isIE)
			setTimeout(hideSection, 100);
		else
			contentFrame.onload = hideSection;
	}
}

function hideSection() {
	var sectionDiv = document.getElementById("section");
	sectionDiv.style.display = "none";
}

function showNamedPage(file) {
	var ref = pageRefFromFile(file);
	
	if (ref != null)
		showPage(ref.ch, ref.sec, ref.page);
}


function showPreviousPage() {
	var newRef = previousPage(displayPage.ch, displayPage.sec, displayPage.page);
	showPage(newRef.ch, newRef.sec, newRef.page);
}

function showNextPage() {
	var newRef = nextPage(displayPage.ch, displayPage.sec, displayPage.page);
	showPage(newRef.ch, newRef.sec, newRef.page);
}

function updateBannerForPage() {
	if (!displayPage)
		return;
	var chObject = book.objectFromIndices(displayPage.ch, -1, -1);
	if (displayPage.sec >= 0) {
		var secObject = book.objectFromIndices(displayPage.ch, displayPage.sec, -1);
		if (displayPage.page >= 0) {
			var pageObject = book.objectFromIndices(displayPage.ch, displayPage.sec, displayPage.page);
			changeBannerToPage(displayPage.ch, chObject.title, displayPage.sec, secObject.title, displayPage.page, pageObject.title);
		}
		else
			changeBannerToSection(displayPage.ch, chObject.title, displayPage.sec, secObject.title);
	}
	else
		changeBannerToChapter(displayPage.ch, chObject.title);
}

/*

//---------------------------------------------------------------------
//		Only needed for backward compatibility with old HTML files.
//		New HTML files write the button from pageSetup.js
//---------------------------------------------------------------------

function writeNextButton(doc) {
	var languageString = "";
	var nextPageWidth = 160;
	var nextSectionWidth = 190;
	if (language && language == "fr") {
		languageString = "_fr";
		nextPageWidth = 185;
		nextSectionWidth = 220;
	}
	else if (language && language == "es") {
		languageString = "_es";
		nextPageWidth = 220;
		nextSectionWidth = 220;
	}
	else if (language && language == "de") {
		languageString = "_de";
		nextPageWidth = 185;
		nextSectionWidth = 220;
	}
		
	if (isLastPage()) {
		doc.write('<p class="nextArrow"><img name="theEnd" border="0" src="../structure/images/theEnd.gif" width="172" height="99"></p>');
		doc.write('<p align="center">Congratulations! You have now reached the end of this CAST e-book.</p>');
	}
	else if (isLastPageInSection() && !(displayPage.sec != -1 && displayPage.page == -1)) {
		doc.write('<p class="nextArrow"><a href="javaScript:top.showNextPage()"');
		doc.write(' onMouseOut="document.nextButton.src=\'../structure/images/nextSection' + languageString + '_std.gif\'"');
		doc.write(' onMouseOver="document.nextButton.src=\'../structure/images/nextSection' + languageString + '_bold.gif\'">');
		doc.write('<img name="nextButton" border="0" src="../structure/images/nextSection' + languageString + '_std.gif" width="' + nextSectionWidth + '" height="52"></a></p>');
	}
	else {
		doc.write('<p class="nextArrow"><a href="javaScript:top.showNextPage()"');
		doc.write(' onMouseOut="document.nextButton.src=\'../structure/images/nextPage' + languageString + '_std.gif\'"');
		doc.write(' onMouseOver="document.nextButton.src=\'../structure/images/nextPage' + languageString + '_bold.gif\'">');
		doc.write('<img name="nextButton" border="0" src="../structure/images/nextPage' + languageString + '_std.gif" width="' + nextPageWidth + '" height="52"></a></p>');
	}
}

*/


//---------------------------------------------------------------------


function isFirstPage() {
	if (!displayPage)
		return false;
	return book.isFirstPage(displayPage.ch, displayPage.sec, displayPage.page);
}

function isLastPage() {
	if (!displayPage)
		return false;
	return book.isLastPage(displayPage.ch, displayPage.sec, displayPage.page);
}

function isLastPageInSection() {
	if (!displayPage)
		return false;
	var nextPage = book.nextRef(displayPage.ch, displayPage.sec, displayPage.page);
	return (displayPage.ch != -1 && nextPage.ch != displayPage.ch) || (displayPage.sec != -1 && nextPage.sec != displayPage.sec);
}


var indexWindow = null;
function showIndex(page) {
	if (indexWindow && !indexWindow.closed) {
		indexWindow.focus();
	}
	else {
		var absFile = homeDir + "/book_index.html";
		indexWindow = top.open(absFile, homeDir + "_index", "width=400,height=700,status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=yes");
	}
}

var datasetsWindow = null;
function showDatasets(page) {
	if (datasetsWindow && !datasetsWindow.closed) {
		datasetsWindow.focus();
	}
	else {
		var absFile = homeDir + "/book_dataSets.html";
		datasetsWindow = top.open(absFile, homeDir + "_datasets", "width=600,height=700,status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=yes");
	}
}

function closeWindows() {
	if (indexWindow && !indexWindow.closed)
		indexWindow.close();
	if (datasetsWindow && !datasetsWindow.closed)
		datasetsWindow.close();
}


//---------------------------------------------------------------------


function getCopyrightString() {			//		Copies are also in pageSetup.js and without the link in introPage.js
		return '<p class="footnote">&nbsp;<br><a class="footnote" href="javascript:top.showNamedPage(\'aboutCast3\')">&copy;2000-2017 W. Douglas Stirling, Massey University</a></p>';
}

function nextButtonInfo(nextPageType) {			//	nextPageType: 2 = end of book, 1 = sectionNext, 0 = pageNext
	if (nextPageType == 2)											//	height is always 52
		return null;
	
	var languageString = "";
	var imgWidth = (nextPageType == 1) ? 190 : 160;
	
	if (language != null && language == "fr") {
		languageString = "_fr";
		imgWidth = (nextPageType == 1) ? 220 : 185;
	}
	else if (language != null && language == "es") {
		languageString = "_es";
		imgWidth = (nextPageType == 1) ? 220 : 220;
	}
	else if (language != null && language == "de") {
		languageString = "_de";
		imgWidth = (nextPageType == 1) ? 220 : 185;
	}
	
	var coreImgString = (nextPageType == 1) ? "nextSection" + languageString
												: "nextPage" + languageString;
	
	return {
		nextImgCore: coreImgString,
		nextImgWidth: imgWidth
	};
}

/*
function coreNextButtonString(nextPageType, structureRel) {
																	//	structureRel is either "../../" or ""
	var languageString = "";
	var nextPageWidth = 160;
	var nextSectionWidth = 190;
	if (language != null && language == "fr") {
		languageString = "_fr";
		nextPageWidth = 185;
		nextSectionWidth = 220;
	}
	else if (language != null && language == "es") {
		languageString = "_es";
		nextPageWidth = 220;
		nextSectionWidth = 220;
	}
	else if (language != null && language == "de") {
		languageString = "_de";
		nextPageWidth = 185;
		nextSectionWidth = 220;
	}
	
	var nextString = "";
	
	if (nextPageType == 2) {					//	end of book
		nextString = '<p class="nextArrow"><img name="theEnd" border="0" src="' + structureRel + 'structure/images/theEnd.gif" width="172" height="99"></p>';
		nextString += '<p align="center">Congratulations! You have now reached the end of this CAST e-book.</p>';
	}
	else if (nextPageType == 1) {		//	end of section
		nextString = '<p class="nextArrow"><a href="javaScript:top.showNextPage()"';
		nextString += ' onMouseOut="document.nextButton.src=\'' + structureRel + 'structure/images/nextSection' + languageString + '_std.gif\'"';
		nextString += ' onMouseOver="document.nextButton.src=\'' + structureRel + 'structure/images/nextSection' + languageString + '_bold.gif\'">';
		nextString += '<img name="nextButton" border="0" src="' + structureRel + 'structure/images/nextSection' + languageString + '_std.gif" width="' + nextSectionWidth + '" height="52"></a></p>';
	}
	else {														//	other page
		nextString = '<p class="nextArrow"><a href="javaScript:top.showNextPage()"';
		nextString += ' onMouseOut="document.nextButton.src=\'' + structureRel + 'structure/images/nextPage' + languageString + '_std.gif\'"';
		nextString += ' onMouseOver="document.nextButton.src=\'' + structureRel + 'structure/images/nextPage' + languageString + '_bold.gif\'">';
		nextString += '<img name="nextButton" border="0" src="' + structureRel + 'structure/images/nextPage' + languageString + '_std.gif" width="' + nextPageWidth + '" height="52"></a></p>';
	}
	return nextString;
}

function getNextButtonString(nextPageType) {
	return coreNextButtonString(nextPageType, "../../");
}
*/

function getSectionEndString() {
	var nextPageInfo = nextButtonInfo(0);		//	assumes that a page will follow
	
	var nextString = '<p class="nextArrow"><a href="javaScript:showNextPage()"';
	nextString += ' onMouseOut="document.nextButton.src=\'' + 'structure/images/' + nextPageInfo.nextImgCore + '_std.png\'"';
	nextString += ' onMouseOver="document.nextButton.src=\'' + 'structure/images/' + nextPageInfo.nextImgCore + '_bold.png\'">';
	nextString += '<img name="nextButton" border="0" src="' + 'structure/images/' + nextPageInfo.nextImgCore + '_std.png" width="' + nextPageInfo.nextImgWidth + '" height="52"></a></p>';
	
	var s = nextString + "\n" + getCopyrightString();
	return s;
}


//---------------------------------------------------------------------


var linkedCastWindow = null;
var linkedBookName = null;

function showLinkedPage(bookName, pageName) {
	try {
		if (linkedCastWindow == null || linkedCastWindow.closed || bookName != linkedBookName) {
			if (linkedCastWindow != null && !linkedCastWindow.closed)
				linkedCastWindow.close();
			linkedCastWindow = window.open("index.html?book=" + bookName + "&page=" + pageName, "CAST_" + bookName,
															"dependent=no,resizable=yes,menubar=yes,location=no,directories=no,toolbar=no,status=no");
			linkedBookName = bookName;
		}
		else {
			linkedCastWindow.showNamedPage(pageName);
			linkedCastWindow.focus();
		}
	} catch (e) {
		var newWin = window.open("index.html?book=" + bookName + "&page=" + pageName, "CAST_" + bookName,
															"dependent=no,resizable=yes,menubar=yes,location=no,directories=no,toolbar=no,status=no");
		newWin.focus();
	}
}

function showVideo() {
	showVideoText();			//	in bannerScript.js
}


//---------------------------------------------------------------------

function commandListener(event) {
  var message = event.data;
	if (message =="showNextPage")
		showNextPage();
	else if (message =="showVideo")
		showVideo();
	else if (message.indexOf("showPage=") == 0)
		showNamedPage(message.substring(9));
	else if (message.indexOf("showLinkedPage=") == 0) {
		var linkedPage = message.substring(15);
		var bookIndex = linkedPage.indexOf(",");
		var book = linkedPage.substring(0, bookIndex);
		var page = linkedPage.substring(bookIndex + 1);
		showLinkedPage(book, page);
	}
}
 
if (window.addEventListener)
  addEventListener("message", commandListener, false);
else
  attachEvent("onmessage", commandListener);
