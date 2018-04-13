
var page = new Array();
pageIndex = 0;

var chapterNo = -2;	//		first numbered is called Chapter 0
var sectionNo = 0;	//		first numbered is called Section 1
var currentSection = null;
function aC() {		//	addChapter
	pageIndex ++;
	chapterNo ++;
	sectionNo = 0;
}

function Section(name) {
	this.name = name;
}

function aS(name) {		//	addSection
	pageIndex ++;
	sectionNo ++;
	currentSection = new Section(chapterNo + "." + sectionNo + " " + name);
}

function aOS(name) {		//	add overview Section
	aS(name);
	pageIndex ++;			//	extra for contents page
}

function Page(name, dir, filePrefix) {
	this.name = name;
	this.dir = dir;
	this.filePrefix = filePrefix;
	this.section = currentSection;
//	this.getHtml = GetHtml;
}

//function GetHtml() {
//	return '../' + this.dir + '/' + this.filePrefix + '.html';
//}

function aP(name, dir, filePrefix) {		//	addPage		
	page[pageIndex] = new Page(name, dir, filePrefix);
	pageIndex ++;
}

function Term(name) {
	this.name = name;
	this.reference = new Array();
	this.source = null;
}

var termEntry = new Array();
var currentTerm = -1;
function aT(name) {		//	addTerm
	var t = new Term(name);
	var i;
	for (i=1 ; i<aT.arguments.length ; i++)
		t.reference[i-1] = aT.arguments[i];
	termEntry[termEntry.length] = t;
}

function aSrc(text) {		//	addSource
	var t = termEntry[termEntry.length - 1];
	t.source = text;
}
	
function writeTermEntries(doc) {		//	ignores the parameter "doc"
	var htmlContent = "";
	var i;
	for (i=0 ; i<termEntry.length ; i++) {
		if (i>0)
			htmlContent += "<br>\n";
		htmlContent += "<a href='javascript:top.writeReferenceFrame(" + i + ")'>";
		htmlContent += "<img src='../../terms/images/bullet_std.gif' id='bullet_" + i + "' width='12' height='12' border='0'>";
		htmlContent += termEntry[i].name + "</a>";
	}
	
	var termsElement = document.getElementById("terms");
	termsElement.innerHTML = htmlContent;
	
	document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
}

function writeReferenceFrame(iTerm) {
	var termsDoc = document;
	if (top.currentIndex >= 0)
		termsDoc.getElementById('bullet_' + top.currentIndex).src = '../../terms/images/bullet_std.gif';
	top.currentIndex = iTerm;
	if (iTerm >= 0)
		termsDoc.getElementById('bullet_' + iTerm).src = '../../terms/images/bullet_bold.gif';
	
	var referencesContent = "";
	var ref = termEntry[iTerm].reference;
	oldSection = null;
	var i;
	for (i=0 ; i<ref.length ; i++) {
		if (i>0)
			referencesContent += "<br>\n";
		var p = page[ref[i]];
		var newSection = p.section;
		if (oldSection != newSection) {
			referencesContent += "<strong>" + newSection.name + "</strong><br>";
			oldSection = newSection;
		}
		referencesContent += "<img src='../../terms/images/spacer.gif' width='25' height='4'><a href='javascript:top.changePage(" + ref[i] + ")'>" + p.name + "</a>";
	}
	
	var referenceElement = document.getElementById("references");
	referenceElement.innerHTML = referencesContent;
	referenceElement.ontouchmove = function(e) { e.stopPropagation(); };
	
	var hasSourcePanel = (document.getElementById("source") != null);
	if (hasSourcePanel) {
		var srcText = termEntry[iTerm].source;
		var sourceContent = (srcText == null) ? "" : ("<p>" + srcText + "</p>\n");
		var backColor = (srcText == null) ? '#CCCCCC' : '#FFFFFF';
		
		var sourceElement = document.getElementById("source");
		sourceElement.innerHTML = sourceContent;
		sourceElement.style.backgroundColor = backColor;
		sourceElement.ontouchmove = function(e) { e.stopPropagation(); };
	}
}

function changePage(i) {
	var filePrefix = page[i].filePrefix;
	if (opener && !opener.closed) {
		opener.postMessage("showPage=" + filePrefix, "*");
		
//		opener.showNamedPage(filePrefix);
//	
		if (typeof environment != 'undefined' && environment.isTablet)		//	index window fills whole screen
			close();
	}
}