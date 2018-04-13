//------------------------------------------------------------
//		page stylesheet



function lookup(searchString, key) {
	var keyStart = searchString.indexOf(key + "=", 0);
	if (keyStart < 0)
		return null;
	var resultStart = keyStart + key.length + 1;
	var resultEnd = searchString.indexOf("&", resultStart);
	if (resultEnd < 0)
		resultEnd = searchString.length;
	return searchString.substring(resultStart, resultEnd);
}
	
function hasOption(searchString, key) {				//		a simple "key"
	keyStart = searchString.indexOf(key, 0);
	if (keyStart < 0)
		return false;
	var startOk = (keyStart == 0) || (searchString.charAt(keyStart - 1) == "&") || (searchString.charAt(keyStart - 1) == "?");
	var endOk = (keyStart + key.length == searchString.length) || (searchString.charAt(keyStart + key.length) == "&");
	return startOk && endOk;
}

var searchString = window.location.search;			//		includes "?" at start
var isSummary = hasOption(searchString, "isSummary");
var isVideo = hasOption(searchString, "isVideo");
var isWin = hasOption(searchString, "isWin");
var hasLocalVideos = hasOption(searchString, "localVideos");
var backgroundColor = lookup(searchString, "backgroundColor");
var language = lookup(searchString, "language");
var nextImgCore = lookup(searchString, "nextImgCore");
var nextImgWidth = lookup(searchString, "nextImgWidth");
var homeDir = lookup(searchString, "homeDir");

var fileVersions = lookup(searchString, "variations");
if (fileVersions != null)
	fileVersions = fileVersions.split(",");

var versionNameList = lookup(searchString, "variationNames")
if (versionNameList != null) {
	versionNameList = versionNameList.split(",");
	var versionName = new Object();
	for (var i=0 ; i<versionNameList.length ; i++) {
		var pair = versionNameList[i].split(":");
		versionName[pair[0]] = pair[1];
	}
}

//------------------------------------------------------------
//		for display of headings and applets

/*
function startApplet(appletName, wd, ht, name, bgColor) {
	document.write('<applet codebase="../java" code="' + appletName + '.class" archive="coreCAST.jar" width="' + wd + '" height="' + ht + '"');
	
	if (typeof name != "undefined" && name != "")
		document.write(' name="' + name + '">');
	else
		document.write('>');
	
	if (typeof bgColor != "undefined")
		document.write('<param name="backgroundColor" value="' + bgColor + '">');
	else if (top.backgroundColor != null)
		document.write('<param name="backgroundColor" value="' + top.backgroundColor + '">');
	
	if (top.language != null)
		document.write('<param name="language" value="' + top.language + '">');
}

function endApplet() {
	document.write('</applet>');
}
*/

// function writeAppletParams(appletName, wd, ht, name) {
function writeAppletParams() {
	if (backgroundColor != null)
		document.write('<param name="backgroundColor" value="' + backgroundColor + '">');
	
	if (language != null)
		document.write('<param name="language" value="' + language + '">');
		
	document.write('<param name="cache_archive" value="coreCAST.jar">');
}

function addModuleHeading(heading) {
	document.write('\n<div class="centred"><table class="centred" style="border:0px; margin-top:0px; margin-bottom:0px; padding:0px;">\n');
	document.write('  <tr><td width="33"><img src="../../structure/images/star.svg" width="33" height="33"></td>\n');
	document.write('  <td class="moduleHeading">' + heading + '</td><td width="33"><img src="../../structure/images/star.svg" width="33" height="33"></td></tr>\n');
	document.write('  <tr><td colspan="3" align="center"><img src="../../structure/images/moduleUnderscore.gif" width="502" height="4"></td></tr>');
	document.write('</table></div>');
}

/*
function addSectionHeading(heading) {
	document.write('\n<div class="sectionStar"><img src="../structure/images/star.gif" width="31" height="31"></div>\n');
  document.write('<div class="sectionUnderscore"><img src="../structure/images/sectionUnderscore.gif" width="443" height="4"></div>\n');
	document.write('<p class="sectionHeading">' + heading + '</p>\n');
}
*/

function addChapterHeading(heading) {
	document.write('\n<div class="centred" style="padding-bottom:12px"><table class="centred">\n');
	document.write('  <tr><td width="33"><img src="../../structure/images/star.svg" width="33" height="33"></td>\n');
	document.write('  <td class="chapterHeading">' + heading + '</td><td width="33"><img src="../../structure/images/star.svg" width="33" height="33"></td></tr>\n');
	document.write('  <tr><td colspan="3" align="center"><img src="../../structure/images/chapterUnderline.gif" width="502" height="6"></td></tr>');
	document.write('</table></div>');
}

function writeVideo(bookName, section, videoName, width, height) {
	var videoServer = hasLocalVideos ? "../.." : (castWebServerUrl + "/core");
	var videoDir = videoServer + '/' + bookName + '/videos/' + section + '/';
	document.write('\n<div class="centred">\n');
	document.write('<video poster="' + videoDir + videoName + '.png" width="' + width + '" height="' + height + '" controls="controls" preload="auto" id="' + videoName + '">\n');
	document.write('  <source src="' + videoDir + videoName + '.webm" type="video/webm" />\n');
	document.write('  <source src="' + videoDir + videoName + '.mp4" type="video/mp4" />\n');
	document.write('</video>\n');
	document.write('</div>\n');
}


//------------------------------------------------------------
//		menu stylesheet

document.write('<link rel="stylesheet" href="../../structure/pageMenu.css" type="text/css">');


//------------------------------------------------------------
//		menu creation

function at_show_aux(parent, child) {
	var p = document.getElementById(parent);
	var c = document.getElementById(child );
	
	c.style.top        = (p.offsetHeight - 1) + 'px';
	c.style.right      = '0px';
	c.style.visibility = "visible";
}


function at_show() {
	var p = document.getElementById(this["at_parent"]);
	var c = document.getElementById(this["at_child" ]);

	at_show_aux(p.id, c.id);
	clearTimeout(c["at_timeout"]);
}


function at_click() {
	var p = document.getElementById(this["at_parent"]);
	var c = document.getElementById(this["at_child" ]);
	
	if (c.style.visibility != "visible")
		at_show_aux(p.id, c.id);
	else
		c.style.visibility = "hidden";
	return false;
}


function at_hide() {
	var p = document.getElementById(this["at_parent"]);
	var c = document.getElementById(this["at_child" ]);

	c["at_timeout"] = setTimeout("document.getElementById('"+c.id+"').style.visibility = 'hidden'", 333);
}


function at_attach(parent, child) {
	var p = document.getElementById(parent);
	var c = document.getElementById(child);

	p["at_parent"]     = p.id;
	c["at_parent"]     = p.id;
	p["at_child"]      = c.id;
	c["at_child"]      = c.id;

	c.style.visibility = "hidden";

	p.onmouseover = at_show;
//		p.onclick = at_click;
	p.onmouseout  = at_hide;
	c.onmouseover = at_show;
	c.onmouseout  = at_hide;
}

//-------------------------------------------------------------------------------

var urlPrefix, /* language_code, */ dir, file_prefix, file_core, file_suffix, file_index;

function parseCurrentPageName() {
	var url = document.URL;
	var discardStart = url.indexOf(".html");
	url = url.substring(0, discardStart);
	
	var delimiter = "/";
	if (url.indexOf("\\") > 0)
		delimiter = "\\";
	
	var fileStart = url.lastIndexOf(delimiter);
	var dirStart = url.lastIndexOf(delimiter, fileStart - 1);
	var languageStart = url.lastIndexOf(delimiter, dirStart - 1);
	
	dir = url.substring(languageStart + 1, fileStart);					//		dir could be "bk/massey120" or "en/dotPlot"
	urlPrefix = url.substring(0, languageStart);
	var fileName = url.substring(fileStart + 1);
	
	file_index = "";
	while (fileName.length > 0) {
		var c = fileName.charAt(fileName.length - 1);
		if (c >= '0' && c <= '9') {
			file_index = c + file_index;
			fileName = fileName.substring(0, fileName.length - 1);
		}
		else
			break;
	}
	
	if (fileName.charAt(1) == '_') {
		file_prefix = fileName.substring(0, 2);
		fileName = fileName.substring(2);
	}
	else
		file_prefix = "";
	
	if (fileName.charAt(fileName.length - 2) == '_') {
		file_suffix = fileName.substring(fileName.length - 2);
		fileName = fileName.substring(0, fileName.length - 2);
	}
	else
		file_suffix = "_g";
	
	file_core = fileName;
//		alert("urlPrefix:\"" + urlPrefix + "\"\nlanguage_code:\"" + language_code + "\"\ndir:\"" + dir + "\"\nfile_core: \"" + file_core + "\"\nfile_prefix: \"" + file_prefix + "\"\nfile_suffix: \"" + file_suffix + "\"\nfile_index: \"" + file_index + "\"");
}

parseCurrentPageName();

function displayAlternativePage(suffix) {
	var newPage;
	if (suffix.charAt(0) == '+') {
		var actualSuffix = (suffix.charAt(1) == 'g') ? "" : ("_" + suffix.charAt(1));
		newPage = homeDir + "/" + file_prefix + file_core + actualSuffix + file_index;
	}
	else {
		var actualSuffix = (suffix == "_g") ? "" : suffix;
		var otherDir = language + "/" + file_core;
		var newPage = otherDir + "/" + file_prefix + file_core + actualSuffix + file_index;
	}
//		alert("Showing page:\n" + newPage);
	window.location.href = urlPrefix + "/" + newPage + ".html" + window.location.search;
}

//---------------------------------------------------------------
//    standard material at start and end of page

function writePageStart() {
	if (isSummary || isVideo)
		return;
	
	if (fileVersions == null)
		return;
	
	var htmlString = "<div id='attach_menu_parent' class='menu'><img src='../../structure/images/menuArrow.svg'></div>\n";
	htmlString += "<div id='attach_menu_child'>\n";
	
	var delimiter = "/";
	if (dir.indexOf("\\") > 0)
		delimiter = "\\";
	var coreDir = language + delimiter + file_core;
	
	for (var i=0 ; i<fileVersions.length ; i++) {
		var v = fileVersions[i];
		var vName = (v.charAt(0) == '+') ? versionName['++'] : versionName[v];
		var isCurrentPage = (v.charAt(0) == '+' && dir == homeDir)
								|| (v.charAt(0) == '_' && dir == coreDir && file_suffix == v);
		
		var className = (i == 0) ? 'firstMenuItem' : 'menuItem';
		
		htmlString += "<a class='" + className + "' href='javascript:displayAlternativePage(\"" + v + "\");'>";
		if (isCurrentPage)
			htmlString += "<img class='tick' src='../../structure/images/menuTick.gif' width='17px' height='16px' border='0px'>";
		htmlString += vName + "</a>";
	}
	
	htmlString += "</div>\n";
	
//		alert(htmlString);
	document.write(htmlString);
	
	at_attach("attach_menu_parent", "attach_menu_child");
}

function showCopyright() {				//	date also referenced in ebooks.js, navigate.js and introPage.js
	var copyrightString = '<p class="footnote">&nbsp;<br><a class="footnote" href="javascript:showNamedPage(\'aboutCast3\')">&copy;2000-2015 W. Douglas Stirling, Massey University</a></p>';
	document.write(copyrightString);
}

function writeNextButton() {
	var nextString = "";
	
	if (nextImgCore == "end") {					//	end of book
		nextString = '<p align="center" style="font-size:150%;font-weight:bold;margin-top:50px; padding:10px 50px; background-color:#FFFFFF; border:1px solid #EEEEEE">Congratulations! You have now reached the end of this CAST e-book.</p>';
	}
	else {		//	end of section or page
		nextString = '<p class="nextArrow"><a href="javaScript:showNextPage()"';
		nextString += ' onMouseOut="document.nextButton.src=\'../../structure/images/' + nextImgCore + '_std.png\'"';
		nextString += ' onMouseOver="document.nextButton.src=\'../../structure/images/' + nextImgCore + '_bold.png\'">';
		nextString += '<img name="nextButton" border="0" src="../../structure/images/' + nextImgCore + '_std.png" width="' + nextImgWidth + '" height="52"></a></p>';
	}
	document.write(nextString);
}

function writePageEnd() {
	writeNextButton();
	showCopyright();
}

function writeVideoButton(buttonText) {
	var nextString = '<p class="eqn" style="padding-top:15px; padding-bottom:15px"><a class="videoButton" href="javaScript:showVideo()">';
	nextString += buttonText;
	nextString += '</a></p>';
	document.write(nextString);
}


function addPageControls() {			//	only needed for old Frameset version
	writePageStart()
}

function showNamedPage(file) {
	top.postMessage("showPage=" + file, "*");
}

function showNextPage() {
	top.postMessage("showNextPage", "*");
}

function showVideo() {
	top.postMessage("showVideo", "*");
}

function showLinkedPage(bookName, pageName) {
	top.postMessage("showLinkedPage=" + bookName + "," + pageName, "*");
}


//------------------------------------------------------------
//		stylesheet for lecturer notes


if (file_prefix == "l_")
	document.write('<link rel="stylesheet" href="../../structure/lecturerNotes.css" type="text/css">');


//------------------------------------------------------------
//		lecturer notes

var withDataNotes = true;
var withoutDataNotes = false;

function showHideLecturerNotes() {
	var div = document.getElementById("lecturerNote");
	var link = document.getElementById("l_link");
	var linkText = document.getElementById("showHideNotes");
	if (div.style.display == "block") {
		div.style.display = "none";
		linkText.innerText = "Notes about use of applet";
		link.style.color = "#990000";
	}
	else {
		var dataDiv = document.getElementById("dataNote");
		if (dataDiv != null && dataDiv.style.display == "block")
			showHideDataNotes();
			
		div.style.display = "block";
		linkText.innerText = "Hide lecturer notes";
		link.style.color = "red";
	}
}

function showHideDataNotes() {
	var div = document.getElementById("dataNote");
	var link = document.getElementById("d_link");
	var linkText = document.getElementById("showHideData");
	if (div.style.display == "block") {
		div.style.display = "none";
		linkText.innerText = "Notes about data";
		link.style.color = "#990000";
	}
	else {
		var noteDiv = document.getElementById("lecturerNote");
		if (noteDiv != null && noteDiv.style.display == "block")
			showHideLecturerNotes();
			
		div.style.display = "block";
		linkText.innerText = "Hide data notes";
		link.style.color = "red";
	}
}

function writeLecturerNotesLink(includeDataNotes) {
	document.write("<a href='javascript:showHideLecturerNotes();' class='l_link' id='l_link'><span id='showHideNotes'>Notes about use of applet</span></a>");
	if (includeDataNotes)
		document.write("<a href='javascript:showHideDataNotes();' class='d_link' id='d_link'><span id='showHideData'>Notes about data</span></a>");
	document.write("<br clear='all'>");
}


//------------------------------------------------------------
//		choice of blocks to display

	
function changeBlock(select, nBlocks) {
	var newDataIndex = select.selectedIndex;
	for (i=0 ; i<nBlocks ; i++) {
		var example = document.getElementById("example" + (i + 1));
		example.style.display = (newDataIndex == i) ? "block" : "none";
	}
}


//------------------------------------------------------------
//		display full version or video or summary

/*
var headNode = document.getElementsByTagName("head")[0];         
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = isSummary ? '../../structure/summaryStyles.css'
												: isVideo ? '../../structure/videoStyles.css'
												: '../../structure/fullStyles.css';
cssNode.media = 'screen';
headNode.appendChild(cssNode);
*/

//------------------------------------------------------------
//		setup and display of alternative data images
//		**** functions are also defined in printFixes.js ****

var hasSvg = !!(window.SVGSVGElement);
var gifRedirect = "";			//	can be "../HciMean/" within DciMean, etc so that gifs from English version are used when SVGs are not supported

function showCorrectImage(imageId) {
	if (hasSvg) {
		var gif = document.getElementById('gif_' + imageId);
		gif.style.display = "none";
		var svg = document.getElementById('svg_' + imageId);
		svg.style.display = "inline";
	}
}

var imgNames;
function setupChoiceImages() {
	imgNames = new Array();
	for (var i=0 ; i<arguments.length ; i++)
		imgNames[i] = arguments[i];
}

function changeImageIndex(imageId, newIndex) {
	if (hasSvg) {
		var image = document.getElementById('svg_' + imageId);
		image.src = "images/" + imgNames[newIndex] + ".svg";
	}
	else {
		var image = document.getElementById('gif_' + imageId);
		image.src = gifRedirect + "images/" + imgNames[newIndex] + ".gif";
	}
}

function changeImage(imageId, select) {	
	var newIndex = select.selectedIndex;
	changeImageIndex(imageId, newIndex);
}

/*
function outputImage(imageName, imageId, width, height) {	
	if (hasSvg)
		document.write("<iframe src='" + imageName + ".svg' id='svg_" + imageId = "' width='" + width + "' height='" + height + "' frameborder='0'></iframe>");
	else
		document.write("<img src='" + gifRedirect + "" + imageName + ".gif' id='gif_" + imageId = "' width='" + width + "' height='" + height + "'>");
}
*/