function expandHeading(section) {
	var paragraph = document.getElementById(section);
	var wasExpanded = paragraph.style.display == "block";
	paragraph.style.display = wasExpanded ? "none" : "block";
	var arrow = document.getElementById(section + "Arrow");
	arrow.src = wasExpanded ? "../init/images/closedHover.gif" : "../init/images/openHover.gif";
}

function hiliteArrow(section, onNotOff) {
	var paragraph = document.getElementById(section);
	var isExpanded = paragraph.style.display == "block";
	var arrow = document.getElementById(section + "Arrow");
	var arrowSrc = isExpanded ? (onNotOff ? "openHover" : "openArrow")
																		: (onNotOff ? "closedHover" : "closedArrow");
	arrow.src="../init/images/" + arrowSrc + ".gif";
}


function fixServerLink(language) {
	var castLinkParagraph = document.getElementById("castLink");
	var serverUrl = castWebServerUrl;
	if (language != null)
		serverUrl += "/" + language;
	
	var linkText = "<a href='" + serverUrl + "' class='urlLink' target='castOnServer'>" + serverUrl + "</a>";
	
	castLinkParagraph.innerHTML = linkText;
}

function fixDownloadLink(id) {
	var aTag = document.getElementById(id);
	var fileName = aTag.name;
	aTag.href = castDownloadUrl + "/" + fileName;
}

function showCopyright() {			//		Copies are in ebooks.js, pageSetup.js and one with a link is in navigate.js
	var copyrightString = '<p class="footnote">&nbsp;<br>&copy;2000-2015 W. Douglas Stirling, Massey University</p>';
	document.write(copyrightString);
}