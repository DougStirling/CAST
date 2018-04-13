

function expandHeading(section) {
	var paragraph = document.getElementById(section);
	var wasExpanded = paragraph.style.display == "block";
	paragraph.style.display = wasExpanded ? "none" : "block";
	var arrow = document.getElementById(section + "Arrow");
	arrow.src = wasExpanded ? "../init/images/closedHoverGreen.gif" : "../init/images/openHoverGreen.gif";
}

function hiliteArrow(section, onNotOff) {
	var paragraph = document.getElementById(section);
	var isExpanded = paragraph.style.display == "block";
	var arrow = document.getElementById(section + "Arrow");
	var arrowSrc = isExpanded ? (onNotOff ? "openHover" : "openArrow")
																		: (onNotOff ? "closedHover" : "closedArrow");
	arrow.src="../init/images/" + arrowSrc + "Green.gif";
}

function coreStart(queryString, shortName) {
	var options = "dependent=no,resizable=yes,menubar=yes";
	
	var toolbarCheck = document.getElementById("toolbarCheck");
	if (!toolbarCheck.checked)
		options += ",location=no,directories=no,toolbar=no,status=no";
	else
		options += ",location=yes,directories=yes,toolbar=yes,status=yes";
	var newWindow = window.open("../core/index.html?" + queryString, "CAST_" + shortName, options);
	newWindow.focus();
}

function startEbook(bookName) {
	coreStart("book=" + bookName, bookName);
}

function startModule(moduleName) {
	coreStart("module=" + moduleName, moduleName);
}

function showCopyright() {			//		A copy is in pageSetup.js and one with a link is in navigate.js
	var copyrightString = '<p class="footnote">&nbsp;<br>&copy;2000-2017 W. Douglas Stirling, Massey University</p>';
	document.write(copyrightString);
}