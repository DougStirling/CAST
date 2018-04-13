var layoutLevel;			//	0 = min, 1 = mid, 2 = max, unused for module
var displayPage = null;


var isWindows = navigator.platform.toLowerCase().indexOf('win') != -1;
var isIE = navigator.appName.toLowerCase().indexOf('microsoft') != -1;

var backgroundColor = lookup(searchString, "backgroundColor");
if (backgroundColor == null) {
//	if (isWindows && !isIE)
//		backgroundColor = "ffd8b1";
//	else
		backgroundColor = "F3F3F3";			//		for lecturing version, this is overwritten by finishSetup()
}

var tabletString = lookup(searchString, "tabletVersion");
var isTabletVersion = tabletString != null && tabletString == "true";


//----------------------------------------------------------------------------------


function bookHasVideos() {
	return environment.supportsVideos && typeof hasVideos != 'undefined' && hasVideos;
}

function bookHasSummaries() {
	return typeof hasSummaries != 'undefined' && hasSummaries;
}

function bookHasApplets() {
	return !isTabletVersion && environment.supportsJava;
}


var bookRepeatCount = (window.location.protocol == "file") ? 10 : 100;

function finishSetup() {
	var browserSettings = document.getElementById("adviceFrame");
	var extras = "";
	if (hasVideos)
		extras += "?hasVideos";
	if (hasSummaries)
		extras += (extras.length > 0) ? "&hasSummaries" : "?hasSummaries";
	var url = language + "/systemAdvice.html" + extras;
	browserSettings.src = url;
	
													//		wait until book definition is loaded
	if (!bookLoaded) {
		if (bookRepeatCount < 0)				//	wait for 10 seconds
			alert("The specified e-book \"" + bookName + "\" does not exist");
		else {
			bookRepeatCount --;
			setTimeout("finishSetup()", 100);
		}
	}
	else {
		var versionImage = document.getElementById("versionGif");
//		versionImage.src = homeDir + "/" + versionGif + ".gif";
		versionImage.src = homeDir + "/" + versionGif + ".png";
		
		var startPageName = lookup(searchString, "page");
		var tocParam = lookup(searchString, "toc");
		if (tocParam == null)
			layoutLevel = (isLecturingVersion && startPageName != null) ? 0 : 2;
		else
			layoutLevel = (tocParam == "true") ? 2 : 0;
		
		insertTocList();
		
		if (startPageName != null) {
			var commaIndex = startPageName.indexOf(",");
			if (commaIndex >= 0)			//		for older links that have unnecessary folder name "folder,file"
				startPageName = startPageName.substr(commaIndex + 1);
		}
		
		if (startPageName == null)
			displayPage = new PageRef(-1, -1, -1);
		else {
			displayPage = pageRefFromFile(startPageName);
			if (displayPage == null) {
				displayPage = new PageRef(-1, -1, -1);
				alert("Specified page does not exist in e-book");
			}
		}
		
		if (isLecturingVersion || isTabletVersion) {
			var printButton = document.getElementById("print");
			printButton.style.visibility = "hidden";
		}
		
		var fullTabSpan = document.getElementById("fullText");
		fullTabSpan.innerHTML = fullTextString;
		var summaryTabSpan = document.getElementById("summaryText");
		summaryTabSpan.innerHTML = summaryTextString;
		var videoTabSpan = document.getElementById("videoText");
		videoTabSpan.innerHTML = (typeof videoTextString == 'undefined') ? "Video" : videoTextString;
		var appletTabSpan = document.getElementById("appletText");
		appletTabSpan.innerHTML = (typeof appletTextString == 'undefined') ? "Applets" : appletTextString;
		
//		showingVideo = bookHasVideos();
		showingVideo = false;
		
		compactBanner(layoutLevel);
		
		showPage(displayPage.ch, displayPage.sec, displayPage.page);
		
		if (isLecturingVersion)
			backgroundColor = "E8E8E8";
		
		setBannerChaptersForPrint();
		
		showBrowserMessage(!isTabletVersion && startPageName == null);
		
		if (document.addEventListener) {
			document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
			var contentElement = document.getElementById("contentDiv");
			contentElement.ontouchmove = function(e) { e.stopPropagation(); };
		}
	}
}

function showBrowserMessage(showNotHide) {
	var el = document.getElementById("overlay");
	el.style.visibility = showNotHide ? "visible" : "hidden";
	
	var adviceFrame = document.getElementById("adviceDiv");
	adviceFrame.style.display = showNotHide ? "block" : "none";
}


var fullTabTooltip = 'Full version of page';							//	should be overridden by e-book's bookStructure.js
var summaryTabTooltip = 'Summarised version of page';			//	should be overridden by e-book's bookStructure.js
var videoTabTooltip = 'Version of page with videos';			//	should be overridden by e-book's bookStructure.js
var appletTabTooltip = 'Interactive version of page';			//	should be overridden by e-book's bookStructure.js


function reorganiseWindow() {
	var layoutExtra = isModule ? 3 : 0;
	var bannerHeight = windowLayout[layoutLevel + layoutExtra].bannerHeight;
	var tocWidth = windowLayout[layoutLevel + layoutExtra].tocWidth;
	
	var bannerDiv = document.getElementById("banner");
	var tocDiv = document.getElementById("tocDiv");
	
	var oldBannerHeight = parseInt(bannerDiv.style.height);
	var oldTocWidth = parseInt(tocDiv.style.width);
	
	if (bannerHeight != oldBannerHeight || tocWidth != oldTocWidth) {
		bannerDiv.style.height = bannerHeight + "px";
		tocDiv.style.width = tocWidth + "px";
		tocDiv.style.top = bannerHeight + "px";
		
		var contentDiv = document.getElementById("contentDiv");
		contentDiv.style.top = bannerHeight + "px";
		contentDiv.style.left = (tocWidth + 1) + "px";
		
		var resizeDiv = document.getElementById("resize");
		resizeDiv.style.top = bannerHeight + "px";
		resizeDiv.style.left = (tocWidth + 1) + "px";
	}
	
	var windowWidth;
	var windowHeight;
	
	if (environment.isTablet) {
		var isPortrait = (window.orientation % 180) == 0;
		windowWidth = isPortrait ? screen.width : screen.height;
		windowHeight = isPortrait ? screen.height : screen.width;
	}
	else if (typeof window.innerWidth != 'undefined') {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
	}
	else if (typeof document.documentElement != 'undefined'
										 && typeof document.documentElement.clientWidth !=
										 'undefined' && document.documentElement.clientWidth != 0) {
 
								// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	}
	else {				// older versions of IE
		windowWidth = document.getElementsByTagName('body')[0].clientWidth,
		windowHeight = document.getElementsByTagName('body')[0].clientHeight
	}
	
	var adviceDiv = document.getElementById("adviceDiv");
	var adviceWidth = 600;
	var adviceHeight = Math.min(700, windowHeight - 40);
	var horizPadding = 15;
	var vertPadding = 15;
	adviceDiv.style.top = ((windowHeight - adviceHeight) / 2 - vertPadding) + "px";
	adviceDiv.style.left = ((windowWidth - adviceWidth) / 2 - horizPadding) + "px";
	adviceDiv.style.height = adviceHeight + "px";
}

window.onresize = reorganiseWindow;
window.onorientationchange = reorganiseWindow;


	
function hiliteCompactButton(showNotHide, doHilite) {
	var buttonId = showNotHide ? "showButton" : "hideButton";
	var button = document.getElementById(buttonId);
	var imageName = "structure/images/" + buttonId + (doHilite ? "_bold" : "") + ".gif";
	button.src = imageName;
}


function updateCompactControl() {
	var htmlString = "";
	if (layoutLevel > 0)
		htmlString += "<a class='button' href='javascript:compactBanner(" + (layoutLevel - 1) + ");' onMouseOut='hiliteCompactButton(false, false)' onMouseOver='hiliteCompactButton(false, true)' title='Reduce banner size'><img class='button' id='hideButton' src='structure/images/hideButton.gif' width='18' height='18' border='0'></a>";
	
	if (layoutLevel < 2)
		htmlString += "<a class='button' href='javascript:compactBanner(" + (layoutLevel + 1) + ");' onMouseOut='hiliteCompactButton(true, false)' onMouseOver='hiliteCompactButton(true, true)' title='Increase banner size'><img class='button' id='showButton' src='structure/images/showButton.gif' width='18' height='18' border='0'></a>";

	var resizeDiv = document.getElementById("resize");
	resizeDiv.innerHTML = htmlString;
	
	resizeDiv.style.width = ((layoutLevel == 1) ? 36 : 18) + "px";
	resizeDiv.style.height = 18 + "px";
}


function compactBanner(level) {
	layoutLevel = level;
	var layoutExtra = isModule ? 3 : 0;
	var layoutInfo = windowLayout[level + layoutExtra];
	
	reorganiseWindow();
	
	var logoImg = document.getElementById("castLogo");
	logoImg.src = "structure/images/" + layoutInfo.logoGifFile;
	logoImg.style.top = layoutInfo.logoTop + "px";
	logoImg.style.width = layoutInfo.logoWidth + "px";
	logoImg.style.height = layoutInfo.logoHeight + "px";
	
	var arrowsDiv = document.getElementById("arrowsDiv");
	arrowsDiv.style.marginLeft = arrowsDiv.style.marginRight = layoutInfo.arrowHorizMargin;
	arrowsDiv.style.marginTop = arrowsDiv.style.marginBottom = layoutInfo.arrowVertMargin;
	arrowsDiv.style.width = layoutInfo.arrowTableWidth + "px";
	arrowsDiv.style.height = layoutInfo.arrowTableHeight + "px";
	var backArrow = document.getElementById("backArrow");
	backArrow.style.width = layoutInfo.arrowWidth + "px";
	backArrow.style.height = layoutInfo.arrowHeight + "px";
	var nextArrow = document.getElementById("nextArrow");
	nextArrow.style.width = layoutInfo.arrowWidth + "px";
	nextArrow.style.height = layoutInfo.arrowHeight + "px";
	var arrowStar = document.getElementById("arrowStar");
	arrowStar.style.width = layoutInfo.starWidth + "px";
	arrowStar.style.height = layoutInfo.starHeight + "px";
	var versionImg = document.getElementById("versionGif");
	versionImg.style.display = layoutInfo.versionGifDisplay;
	
	var chNo = document.getElementById("chNo");
	chNo.style.top = layoutInfo.chNoTop + "px";
	chNo.style.display = layoutInfo.chDisplay;
	var ch = document.getElementById("ch");
	ch.style.marginRight = layoutInfo.chRightMargin + "px";
	ch.style.left = layoutInfo.chLeft + "px";
	ch.style.top = layoutInfo.chTop + "px";
	ch.style.display = layoutInfo.chDisplay;
	var chAndNo = document.getElementById("chAndNo");
	chAndNo.style.display = layoutInfo.chAndNoDisplay;
	
	var sec = document.getElementById("sec");
	sec.style.marginLeft = layoutInfo.secMarginLeft + "px";
	sec.style.marginRight = layoutInfo.secMarginRight + "px";
	sec.style.left = layoutInfo.secLeft + "px";
	sec.style.top = layoutInfo.secTop + "px";
	sec.style.height = layoutInfo.secHeight + "px";
	sec.style.fontSize = layoutInfo.secFontSize + "pt";
	sec.style.display = layoutInfo.secDisplay;
	sec.style.color = layoutInfo.secColor;
	
	var page = document.getElementById("page");
	page.style.marginLeft = layoutInfo.pageLeftMargin + "px";
	page.style.marginRight = layoutInfo.pageRightMargin + "px";
	page.style.left = layoutInfo.pageLeft + "px";
	page.style.top = layoutInfo.pageTop + "px";
	page.style.fontSize = layoutInfo.pageFontSize + "pt";
	page.style.display = layoutInfo.pageDisplay;
	
	var fullPage = document.getElementById("pageFull");
	fullPage.style.display = layoutInfo.fullPageDisplay;
	
	var pageUnderscore = document.getElementById("underscore");
	pageUnderscore.style.left = layoutInfo.underscoreLeft + "px";
	pageUnderscore.style.top = layoutInfo.underscoreTop + "px";
	pageUnderscore.style.display = layoutInfo.underscoreDisplay;
	
	var tabsTable = document.getElementById("tabs");
	if (bookHasSummaries() || bookHasVideos())
		tabsTable.style.display = layoutInfo.tabsTableDisplay;
	else
		tabsTable.style.display = "none";
	
	var printImg = document.getElementById("print");
	if (printImg != null)
		printImg.style.display = layoutInfo.printDisplay;
	
	updateCompactControl();
}

function canDisplayUnderscore() {
	var layoutExtra = isModule ? 3 : 0;
	var layoutInfo = windowLayout[layoutLevel + layoutExtra];
	return layoutInfo.underscoreDisplay == "block";
}

//--------------------------------------------------------------------------------------

function WindowLayout(bannerHeight, tocWidth) {
	this.bannerHeight = bannerHeight;
	this.tocWidth = tocWidth;
	
	this.setLogo = SetLogo;
	this.setArrowsTable = SetArrowsTable;
	this.setCh = SetCh;
	this.setSec = SetSec;
	this.setPage = SetPage;
	this.setFullPage = SetFullPage;
	this.setPageUnderscore = SetPageUnderscore;
	this.setTabsTable = SetTabsTable;
	this.setPrint = SetPrint;
}

function SetLogo(logoGifFile, logoTop, logoWidth, logoHeight) {
	this.logoGifFile = logoGifFile;
	this.logoTop = logoTop;
	this.logoWidth = logoWidth;
	this.logoHeight = logoHeight;
}

function SetArrowsTable(arrowTableWidth, arrowTableHeight, arrowHorizMargin, arrowVertMargin,
																			arrowWidth, arrowHeight, starWidth, starHeight, versionGifDisplay) {
	this.arrowTableWidth = arrowTableWidth;
	this.arrowTableHeight = arrowTableHeight;
	this.arrowHorizMargin = arrowHorizMargin;
	this.arrowVertMargin = arrowVertMargin;
	this.arrowWidth = arrowWidth;
	this.arrowHeight = arrowHeight;
	this.starWidth = starWidth;
	this.starHeight = starHeight;
	this.versionGifDisplay = versionGifDisplay;
}

function SetCh(chNoTop, chRightMargin, chLeft, chTop, chDisplay, chAndNoDisplay) {
	this.chNoTop = chNoTop;
	this.chRightMargin = chRightMargin;
	this.chLeft = chLeft;
	this.chTop = chTop;
	this.chDisplay = chDisplay;
	this.chAndNoDisplay = chAndNoDisplay;
}

function SetSec(secMarginLeft, secMarginRight, secLeft, secTop, secHeight, secFontSize, secDisplay, secColor) {
	this.secMarginLeft = secMarginLeft;
	this.secMarginRight = secMarginRight;
	this.secLeft = secLeft;
	this.secTop = secTop;
	this.secHeight = secHeight;
	this.secFontSize = secFontSize;
	this.secDisplay = secDisplay;
	this.secColor = secColor;
}

function SetPage(pageLeftMargin, pageRightMargin, pageLeft, pageTop, pageFontSize, pageDisplay) {
	this.pageLeftMargin = pageLeftMargin;
	this.pageRightMargin = pageRightMargin;
	this.pageLeft = pageLeft;
	this.pageTop = pageTop;
	this.pageFontSize = pageFontSize;
	this.pageDisplay = pageDisplay;
}

function SetFullPage(fullPageDisplay) {
	this.fullPageDisplay = fullPageDisplay;
}

function SetPageUnderscore(underscoreLeft, underscoreTop, underscoreDisplay) {
	this.underscoreLeft = underscoreLeft;
	this.underscoreTop = underscoreTop;
	this.underscoreDisplay = underscoreDisplay;
}

function SetTabsTable(tabsTableDisplay) {
	this.tabsTableDisplay = tabsTableDisplay;
}

function SetPrint(printDisplay) {
	this.printDisplay = printDisplay;
}


var windowLayout = new Array(6);

//	full size for book
windowLayout[2] = new WindowLayout(113, 233);
windowLayout[2].setLogo("logo.png", 10, 111, 91);
windowLayout[2].setArrowsTable(130, 69, 20, 2, 42, 49, 34, 49, "block");
windowLayout[2].setCh(30, 30, 135, 0, "block", "none");
windowLayout[2].setSec(10, 20, 200, 32, 39, 18, "block", "#999999");
windowLayout[2].setPage(10, 20, 225, 63, 24, "block");
windowLayout[2].setFullPage("none");
windowLayout[2].setPageUnderscore(190, 103, "block");
windowLayout[2].setTabsTable("block");
windowLayout[2].setPrint("block");

//	middle size for book
windowLayout[1] = new WindowLayout(60, 90);
windowLayout[1].setLogo("logo2.png", 1, 65, 58);
windowLayout[1].setArrowsTable(120, 49, 20, 2, 42, 49, 34, 49, "none");
windowLayout[1].setCh(30, 30, 111, 0, "none", "block");
windowLayout[1].setSec(10, 20, 330, 0, 20, 14, "block", "#999999");
windowLayout[1].setPage(10, 50, 110, 20, 22, "block");
windowLayout[1].setFullPage("none");
windowLayout[1].setPageUnderscore(100, 54, "block");
windowLayout[1].setTabsTable("none");
windowLayout[1].setPrint("none");

//	small size for book
windowLayout[0] = new WindowLayout(30, 0);
windowLayout[0].setLogo("logo3.png", 0, 50, 30);
windowLayout[0].setArrowsTable(73, 30, 30, 0, 26, 30, 21, 30, "none");
windowLayout[0].setCh(30, 30, 111, 0, "none", "none");
windowLayout[0].setSec(10, 20, 0, 0, 20, 14, "none", "#999999");
windowLayout[0].setPage(0, 0, 0, 0, 22, "none");
windowLayout[0].setFullPage("block");
windowLayout[0].setPageUnderscore(0, 0, "none");
windowLayout[0].setTabsTable("none");
windowLayout[0].setPrint("none");

//	full size for module
windowLayout[5] = new WindowLayout(92, 233);
windowLayout[5].setLogo("logo.png", 0, 111, 91);
windowLayout[5].setArrowsTable(130, 69, 20, 2, 42, 49, 34, 49, "block");
windowLayout[5].setCh(5, 20, 210, 3, "block", "none");
windowLayout[5].setSec(10, 20, 225, 40, 40, 26, "block", "#000000");
windowLayout[5].setPage(0, 0, 0, 0, 30, "none");		//	no pages in module
windowLayout[5].setFullPage("none");
windowLayout[5].setPageUnderscore(190, 82, "block");
windowLayout[5].setTabsTable("none");
windowLayout[5].setPrint("none");

//	middle size for module
windowLayout[4] = new WindowLayout(60, 90);
windowLayout[4].setLogo("logo2.png", 1, 65, 58);
windowLayout[4].setArrowsTable(120, 49, 20, 2, 42, 49, 34, 49, "none");
windowLayout[4].setCh(5, 20, 200, 0, "none", "block");
windowLayout[4].setSec(10, 50, 110, 20, 40, 22, "block", "#000000");
windowLayout[4].setPage(0, 0, 0, 0, 30, "none");		//	no pages in module
windowLayout[4].setFullPage("none");
windowLayout[4].setPageUnderscore(100, 54, "block");
windowLayout[4].setTabsTable("none");
windowLayout[4].setPrint("none");

//	small size for module
windowLayout[3] = new WindowLayout(30, 0);
windowLayout[3].setLogo("logo3.png", 0, 50, 30);
windowLayout[3].setArrowsTable(73, 30, 30, 0, 26, 30, 21, 30, "none");
windowLayout[3].setCh(5, 20, 200, 5, "none", "none");
windowLayout[3].setSec(10, 0, 0, 0, 40, 30, "none", "bold", "none", "#999999");
windowLayout[3].setPage(0, 0, 0, 0, 27, "none", "#000000");		//	no pages in module
windowLayout[3].setFullPage("block");
windowLayout[3].setPageUnderscore(0, 0, "none");
windowLayout[3].setTabsTable("none");
windowLayout[3].setPrint("none");