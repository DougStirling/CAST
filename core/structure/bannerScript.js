var displayBannerCh = -999;
var displayBannerSec = -1;
var displayBannerPage = -1;
	

function changeBannerToChapter(chapterNo, chapter) {
	changeBannerToSection(chapterNo, chapter, -1, "");
}

function changeText(divName, newText) {
	var div = document.getElementById(divName);
	if (div)										//	needed because mini banner does not have chapter or page divs
		div.innerHTML = newText;
}

function setUnderscoreDisplay(showNotHide) {
	var underscoreImg = document.getElementById('underscore');
	if (canDisplayUnderscore()) {									//	needed because mini banner does not have underscore div
		if (showNotHide)
			underscoreImg.style.display = 'block';
		else
			underscoreImg.style.display = 'none';
	}
}

function changeBannerToSection(chapterNo, chapter, sectionNo, section) {
	changeBannerToPage(chapterNo, chapter, sectionNo, section, -1, "");
}

function changeBannerToPage(chapterNo, chapter, sectionNo, section, pageNo, page) {
	var pageString = page;
	if (pageNo > 0) {
		var redIndex = pageString.indexOf("#r#");
		if (redIndex == 0)		//		ignore any initial #r#
			pageString = pageString.substring(3);
		
		var changeColorIndex = pageString.indexOf("#+#");
		if (changeColorIndex < 0)
			changeColorIndex = pageString.indexOf("#?#");
			
		if (changeColorIndex > 0)	 {	//		change colour after #?# or #+#
			var string0 = pageString.substring(0, changeColorIndex);
			var string1 = pageString.substring(changeColorIndex + 3);
			var string2 = "";
			var changeColorIndex2 = string1.indexOf("#?#");
			if (changeColorIndex2 > 0) {
				string2 = string1.substring(changeColorIndex2 + 3);
				string1 = string1.substring(0, changeColorIndex2);
			}
			
			pageString = string0 + "<span class='pageHilite'>" + string1 + "</span>" + string2;
		}
	}
	
	changeText('ch', chapter);
	if (chapterNo < 0) {
		changeText('chNo', '');
		changeText('chAndNo', chapter);
		changeText('sec', '');
		changeText('page', '');
		changeText('pageFull', chapter);
		setUnderscoreDisplay(false);
	}
	else {
		changeText('chNo', chapterNo);
		changeText('chAndNo', chapterNo + '. ' + chapter);
		if (sectionNo < 0) {
			changeText('sec', '');
			changeText('page', '');
			changeText('pageFull', chapterNo + '. ' + chapter);
			setUnderscoreDisplay(false);
		}
		else {
			changeText('sec', sectionNo + '. ' + section);
			if (pageNo < 0) {
				setUnderscoreDisplay(isModule);
				changeText('page', '');
				changeText('pageFull', chapterNo + '.' + sectionNo + '. ' + section);
			}
			else {
				setUnderscoreDisplay(true);
				changeText('page', pageNo + '. ' + pageString);
				changeText('pageFull', chapterNo + '.' + sectionNo + '.' + pageNo + '. ' + pageString);
				
			}
		}
	}
	
	displayBannerCh = chapterNo;
	displayBannerSec = sectionNo;
	displayBannerPage = pageNo;
	
	checkArrows();
	showBannerTabs(chapterNo, sectionNo, pageNo);
}


/* ---------------------------------------- */

var backArrowDisabled = false;
var nextArrowDisabled = false;

function checkArrows() {
	var oldBack = backArrowDisabled;
	var oldNext = nextArrowDisabled;
	
	backArrowDisabled = top.isFirstPage();
	nextArrowDisabled = top.isLastPage();
	
	var backArrow = document.getElementById('backArrow');
	var nextArrow = document.getElementById('nextArrow');
	
	if (backArrowDisabled != oldBack) {
		if (backArrowDisabled) {
			backArrow.src = 'structure/images/backArrow_dim.svg';
			backArrow.style.cursor = 'default';
			backArrow.title = '';
		}
		else {
			backArrow.src = 'structure/images/backArrow_std.svg';
			backArrow.style.cursor = 'pointer';
			backArrow.title = 'Show previous page';
		}
	}
	
	if (nextArrowDisabled != oldNext) {
		if (nextArrowDisabled) {
			nextArrow.src = 'structure/images/nextArrow_dim.svg';
			nextArrow.style.cursor = 'default';
			nextArrow.title = '';
		}
		else {
			nextArrow.src = 'structure/images/nextArrow_std.svg';
			nextArrow.style.cursor = 'pointer';
			nextArrow.title = 'Show next page';
		}
	}
}

function initialiseBanner() {
	top.updateBannerForPage();
	var versionImage = document.getElementById('versionGif');
	if (versionImage)
		versionImage.src = "../" + homeDir + "/" + versionGif + ".gif";
//	setDefaultTabs();
}


function doBackPage() {
	if (!backArrowDisabled)
		top.showPreviousPage();
}

function hiliteBack() {
	if(!backArrowDisabled) {
		var backArrow = document.getElementById('backArrow');
		backArrow.src = 'structure/images/backArrow_bold.svg';
	}
}

function restoreBack() {
	if(!backArrowDisabled) {
		var backArrow = document.getElementById('backArrow');
		backArrow.src = 'structure/images/backArrow_std.svg';
	}
}

function doNextPage() {
	if (!nextArrowDisabled)
		top.showNextPage();
}

function hiliteNext() {
	if(!nextArrowDisabled) {
		var nextArrow = document.getElementById('nextArrow');
		nextArrow.src = 'structure/images/nextArrow_bold.svg';
	}
}

function restoreNext() {
	if(!nextArrowDisabled) {
		var nextArrow = document.getElementById('nextArrow');
		nextArrow.src = 'structure/images/nextArrow_std.svg';
	}
}



function showWebCAST() {
	var newWindow = top.open(castWebServerUrl, "AboutCAST");
	newWindow.focus();
}

//--------------------------------------------------

//var showingSummary = false;
var showingSummary = true;
var showingVideo = false;

function showBannerTabs(chNo, secNo, pageNo) {
	var hasAppletVersion = bookHasApplets();
	var hasSummaryVersion, hasVideoVersion;
	var isInteractive = false;
	
/*
	if (chNo <= 0) {							//	no alternatives for splash page or preface
		hasSummaryVersion = false;
		hasVideoVersion = false;
	}
	else 
*/
	if (secNo < 0) {					//	chapter or splash page
		var pageRef = book.objectFromIndices(chNo, secNo, pageNo);
		hasSummaryVersion = bookHasSummaries() && pageRef.summaryDir != null && pageRef.summaryFile != null;
		hasVideoVersion = bookHasVideos() && pageRef.videoDir != null && pageRef.videoFile != null;
	}
	else if (pageNo < 0) {					//	section
//		hasSummaryVersion = bookHasSummaries();
		hasSummaryVersion = false;
		hasVideoVersion = false;
	}
	else {
		var pageRef = book.objectFromIndices(chNo, secNo, pageNo);
		hasSummaryVersion = bookHasSummaries() && pageRef.summaryDir != null && pageRef.summaryFile != null;
		hasVideoVersion = bookHasVideos() && pageRef.videoDir != null && pageRef.videoFile != null;
		isInteractive = pageRef.isInteractive;
	}
	
	if (hasSummaryVersion && hasVideoVersion && hasAppletVersion) {
		setTabVisibility("summary", true);
		setTabVisibility("video", true);
		setTabVisibility("applet", isInteractive);			//	tab text is "Interact" if applets are on page
		setTabVisibility("full", !isInteractive);				//	or "Full text" if there are no applets
		
		setTabHilite("video", videoTabTooltip, showingVideo);
		setTabHilite("summary", summaryTabTooltip, showingSummary);
		if (isInteractive)
			setTabHilite("applet", appletTabTooltip, !showingVideo && !showingSummary);
		else
			setTabHilite("full", fullTabTooltip, !showingVideo && !showingSummary);
	}
	else if (hasSummaryVersion && hasVideoVersion && !hasAppletVersion) {
		setTabVisibility("summary", true);
		setTabVisibility("video", true);
		setTabVisibility("applet", false);
		setTabVisibility("full", false);
		
		setTabHilite("video", videoTabTooltip, showingVideo);
		setTabHilite("summary", summaryTabTooltip, showingSummary);
	}
	else if (hasSummaryVersion && (!hasVideoVersion && hasAppletVersion || chNo > 0 && pageNo < 0)) {
		setTabVisibility("summary", true);
		setTabVisibility("video", false);
		setTabVisibility("applet", false);
		setTabVisibility("full", true);
		
		setTabHilite("summary", summaryTabTooltip, showingSummary);
		setTabHilite("full", fullTabTooltip, !showingSummary);
	}
	else if (!hasSummaryVersion && hasVideoVersion && hasAppletVersion) {
		setTabVisibility("summary", false);
		setTabVisibility("video", true);
		setTabVisibility("applet", isInteractive);			//	tab text is "Interact" if applets are on page
		setTabVisibility("full", !isInteractive);				//	or "Full text" if there are no applets
		
		setTabHilite("video", videoTabTooltip, showingVideo);
		if (isInteractive)
			setTabHilite("applet", appletTabTooltip, !showingVideo);
		else
			setTabHilite("full", appletTabTooltip, !showingVideo);
	}
	else {
		setTabVisibility("full", false);
		setTabVisibility("summary", false);
		setTabVisibility("video", false);
		setTabVisibility("applet", false);
	}
}

function setTabVisibility(prefix, showNotHide) {
	var displayString = showNotHide ? "block" : "none";
	var textDisplayString = showNotHide ? "table-cell" : "none";
	
	document.getElementById(prefix + "LeftTab").style.display = displayString;
	document.getElementById(prefix + "RightTab").style.display = displayString;
	document.getElementById(prefix + "TextCell").style.display = textDisplayString;
}

function setTabHilite(prefix, popup, isSelected) {
	var tableTextCell = document.getElementById(prefix + 'TextCell');
	tableTextCell.className = isSelected ? "tabText activeTab" : "tabText inactiveTab";
	tableTextCell.title = isSelected ? "" : popup;
	
	var textSpan = document.getElementById(prefix + 'Text');
	textSpan.className = isSelected ? "activeTab" : "inactiveTab";
	textSpan.isSelected = isSelected;															//	defines property of textSpan
	
	var leftEnd = document.getElementById(prefix + 'LeftTab');
	var rightEnd = document.getElementById(prefix + 'RightTab');
	leftEnd.src = 'structure/images/' + (isSelected ? 's_ltab_on.png' : 's_ltab_off.png');
	rightEnd.src = 'structure/images/' + (isSelected ? 's_rtab_on.png' : 's_rtab_off.png');
}


function hiliteTabText(prefix, hilite) {
	var textSpan = document.getElementById(prefix + 'Text');
	if (textSpan.isSelected)
		return;
	textSpan.className = hilite ? "inactiveHoverTab" : "inactiveTab";
//	textSpan.style.color = hilite ? "#AA0000" : "#000066";
//	textSpan.style.cursor = hilite ? "pointer" : "default";
}

function showFullText() {
	if (showingSummary || showingVideo) {
		showingSummary = false;
		showingVideo = false;
		setTabHilite("full", fullTabTooltip, true);
		setTabHilite("summary", summaryTabTooltip, false);
		setTabHilite("video", videoTabTooltip, false);
		
		updateDisplayPage();
	}
}

function showAppletText() {
	if (showingSummary || showingVideo) {
		showingSummary = false;
		showingVideo = false;
		
		setTabHilite("applet", appletTabTooltip, true);
		setTabHilite("summary", summaryTabTooltip, false);
		setTabHilite("video", videoTabTooltip, false);
		
		updateDisplayPage();
	}
}

function showSummaryText() {
	if (!showingSummary) {
		showingSummary = true;
		showingVideo = false;
		
		setTabHilite("full", fullTabTooltip, false);			//	the full tab is used instead of the applet tab if there are no videos
		setTabHilite("applet", appletTabTooltip, false);
		setTabHilite("summary", summaryTabTooltip, true);
		setTabHilite("video", videoTabTooltip, false);
		
		updateDisplayPage();
	}
}

function showVideoText() {
	if (!showingVideo) {
		showingSummary = false;
		showingVideo = true;
		
		setTabHilite("full", fullTabTooltip, false);			//	the full tab is used instead of the applet tab if page is not interactive
		setTabHilite("applet", appletTabTooltip, false);
		setTabHilite("summary", summaryTabTooltip, false);
		setTabHilite("video", videoTabTooltip, true);
		
		updateDisplayPage();
	}
}


//---------------------------------------------------------------


function setBannerChaptersForPrint() {
	var theHtml = "";
	theHtml += "<select id='version'>\n";
	if (hasSummaries) {
		theHtml += "<option value='1'>" + "List of pages" + "</option>\n";
		theHtml += "<option value='2' selected>" + summaryTextString + "</option>\n";
	}
	else {
		theHtml += "<option value='1'>" + "List of pages" + "</option>\n";
	}
	theHtml += "</select>\n";
	theHtml += "of\n";
	theHtml += "<select id='chapter'>\n";
	for (var i=1 ; i<noOfChapters ; i++)
		theHtml += "<option value='" + i + "'>" + chapterString + " " + i + "</option>\n";
	theHtml += "</select>\n";
	theHtml += "for printing\n";
			
	var printDiv = document.getElementById("summaryChoices");
	printDiv.innerHTML = theHtml;
}

function hilitePrintIcon(hilite) {
	var icon = document.getElementById("print");
	icon.src = hilite ? 'structure/images/print_bold.gif' : 'structure/images/print.gif';
}

function showPrintDialog(showNotHide) {
	var el = document.getElementById("overlay");
	el.style.visibility = showNotHide ? "visible" : "hidden";
	
	var printEl = document.getElementById("printDiv");
	printEl.style.display = showNotHide ? "block" : "none";
}

function showPrintChapter() {
	var versionSelect = document.getElementById("version");
	var chapterSelect = document.getElementById("chapter");
	
	var versionType = versionSelect.options[versionSelect.selectedIndex].value;
	
//	var isSummary = (versionSelect != null) && (typeof versionSelect != "undefined") && (versionSelect.selectedIndex == 0);
	var chapter = chapterSelect.selectedIndex + 1;
	if (versionType == 2)
		chapter = "s_" + chapter;
	else if (versionType == 1)
		chapter = "t_" + chapter;
	chapter = "Chapter_" + chapter;
	
	var queryString = (versionType == 2 ? "isSummary" : "");
	
	var chapterUrl = "";
	if (versionType == 2 && top.summaryPdfUrl != null)
		chapterUrl = ("url=" + top.summaryPdfUrl + "/" + chapter + ".pdf");
	if (chapterUrl.length > 0)
		queryString = (queryString.length == 0) ? chapterUrl : (queryString + "&" + chapterUrl);
	
	window.open(top.homeDir + "/text/" + chapter + ".html" + (queryString.length == 0 ? "" : ("?" + queryString)), "printChapter");
	showPrintDialog(false);
}


/*
var bigTabs = true;

function setBigTabs() {
	if (!bigTabs) {
		var fullText = document.getElementById('fullText');
		fullText.innerHTML = '<nobr>' + top.fullTextString + '</nobr>';
		var summaryText = document.getElementById('summaryText');
		summaryText.innerHTML = '<nobr>' + top.summaryTextString + '</nobr>';
		bigTabs = true;
	}
}

function setDefaultTabs() {
	var bannerWidth = window.offsetWidth;
	if (bannerWidth > 1000)
		setBigTabs();
	else
		if (bigTabs) {
			var fullText = document.getElementById('fullText');
			fullText.innerHTML = "+";
			var summaryText = document.getElementById('summaryText');
			summaryText.innerHTML = "-";
			bigTabs = false;
		}
}
*/