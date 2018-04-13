var selectedTab = -1;


function reorganiseWindow() {
	var windowHeight;
	
	if (typeof window.innerHeight != 'undefined')
		windowHeight = window.innerHeight;
	else if (typeof document.documentElement != 'undefined'
										 && typeof document.documentElement.clientHeight !=
										 'undefined' && document.documentElement.clientHeight != 0)
 
								// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		windowHeight = document.documentElement.clientHeight;
	else
		windowHeight = document.getElementsByTagName('body')[0].clientHeight;
 
 var contentDiv = document.getElementById("content");
 contentDiv.style.top = "121px";
 contentDiv.style.height = (windowHeight - 121) + "px";
 contentDiv.style.bottom = "0px";
}
window.onresize=reorganiseWindow;


function writeBody(language) {
	writeBannerFrame();
	writeAllTabs();
	
	document.write("<iframe id='content'></iframe>");
	if (language != null) {
		document.write("<div id='flagDiv' onclick='toggleFlagChoice()'><img src='init/images/flag_" + language + ".png' width='24px' height='24px'></div>");
		document.write("<div id='flagChoice'>" + languageFlagString("en", language, "public")
											+ languageFlagString("de", language, "german") + languageFlagString("fr", language, "french")
											+ languageFlagString("es", language, "spanish") + languageFlagString("zh", language, "chinese")
											+ "</div>");
	}
}

function languageFlagString(language, currentLanguage, fullLanguage) {
	var clickHandler = (language == currentLanguage) ? "" : (" onclick='showLanguagePage(\"" + fullLanguage + "\", \"" + currentLanguage + "\")'");
	var cursorStyle = (language == currentLanguage) ? "style='cursor:default;'" : "";
		
	return "<img src='init/images/flag_" + language + ".png' width='24px' height='24px'" + clickHandler + cursorStyle + ">"
}

function showLanguagePage(language) {
	document.location.href = "collection_" + language + ".html";
}

function toggleFlagChoice() {
	var flagChoiceDiv = document.getElementById("flagChoice");
	if (flagChoiceDiv.style.display == "block")
		flagChoiceDiv.style.display = "none";
	else
		flagChoiceDiv.style.display = "block";
}

function writeBannerFrame() {
	document.write("<iframe id='banner' src='init/banner.html?heading1=" + escape(bannerText1) + "&heading2=" + escape(bannerText2) + "'>");
	document.write("</iframe>");
}

function writeTab(tabString, index) {
	document.write("<td class='oneTab' id='menuTd" + index + "'><img src='init/images/leftRight_off.png' id='menuLeft" + index + "' width='6' height='26'>");
	document.write("<a href='javascript:selectTab(" + index + ")'><span class='oneTab' id='menuSpan" + index + "' onMouseover='doHover(\"" + index + "\", true)' onMouseout='doHover(\"" + index + "\", false)'>&nbsp;");
	document.write(tabString);
	document.write("&nbsp;</span></a>");
	document.write("<img src='init/images/leftRight_off.png' id='menuRight" + index + "' width='6' height='26'></td>");
}

function writeAllTabs() {
	document.write("<div id='tabs'>");
	document.write("<table border='0' align='left' cellpadding='0' cellspacing='0'><tr>");
	for (var i=0 ; i<tabName.length ; i++)
		writeTab(tabName[i], i);
	document.write("</tr></table>");
	document.write("</div>");
}

function doHover(index, onNotOff) {
	if (index != selectedTab) {
		var menuSpan = document.getElementById("menuSpan" + index);
		menuSpan.style.color = onNotOff ? "#FF0000" : "#660000";
	}
}

function selectTab(index) {
	if (index == selectedTab)
		return;
	if (selectedTab >= 0) {
		var oldTabTd = document.getElementById("menuTd" + selectedTab);
		oldTabTd.style.backgroundColor = "#DDDDDD";
		var oldLeftImg = document.getElementById("menuLeft" + selectedTab);
		oldLeftImg.src = "init/images/leftRight_off.png";
		var oldRightImg = document.getElementById("menuRight" + selectedTab);
		oldRightImg.src = "init/images/leftRight_off.png";
	}
	doHover(index, false);
	selectedTab = index;
	
	var newTabTd = document.getElementById("menuTd" + selectedTab);
	newTabTd.style.backgroundColor = "#FFFFFF";
	var newLeftImg = document.getElementById("menuLeft" + selectedTab);
	newLeftImg.src = "init/images/left_on.png";
	var newRightImg = document.getElementById("menuRight" + selectedTab);
	newRightImg.src = "init/images/right_on.png";
	
	var contentFrame = document.getElementById("content");
	contentFrame.src = tabLink[selectedTab];
}