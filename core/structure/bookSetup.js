var searchString = window.location.search;
var bookName = lookup(searchString, "book");
if (bookName == null)
	bookName = lookup(searchString, "module");

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


var book  = null;
var bookLoaded = false;			//		can't seem to trap failed book read :-(


if (bookName == null) {
	alert("No book or module name has been specified");
	window.location = "structure/dummy.html";
}
else {
	var head_tag = document.getElementsByTagName('head')[0];
	var script_tag = document.createElement('script');
	script_tag.setAttribute('type', 'text/javascript');
	script_tag.setAttribute('src', 'bk/' + bookName + '/book_structure.js');
	head_tag.appendChild(script_tag);
}


function BookObject(directory, file, title, isInteractive, summaryDir, summaryFile, videoDir, videoFile, firstChildIndex) {
	this.directory = directory;
	this.file = file;
	this.title = title;
	this.isInteractive = isInteractive;
	this.summaryDir = summaryDir;
	this.summaryFile = summaryFile;
	this.videoDir = videoDir;
	this.videoFile = videoFile;
	this.firstChildIndex = firstChildIndex;
	this.lastChildIndex = firstChildIndex - 1;
	this.children = new Array();
	this.partTitle = null;
	
	this.addObject = AddObject;
	this.addPartTitle = AddPartTitle;
	this.getTocHtml = GetTocHtml;
//	this.writeToc = WriteToc;
	this.objectFromIndices = ObjectFromIndices;
	this.refFromFile = RefFromFile;
	this.nextRef = NextRef;
	this.previousRef = PreviousRef;
	this.finalPage = FinalPage;
	this.isFirstPage = IsFirstPage;
	this.isLastPage = IsLastPage;
	
	this.isInEbook = IsInEbook;
}

function AddObject(directory, file, title, isInteractive, summaryDir, summaryFile, videoDir, videoFile, level, firstIndex) {
	if (level == 1) {
		this.lastChildIndex ++;
		this.children[this.lastChildIndex] = new BookObject(directory, file, title, isInteractive, summaryDir, summaryFile, videoDir, videoFile, firstIndex);
	}
	else
		this.children[this.lastChildIndex].addObject(directory, file, title, isInteractive, summaryDir, summaryFile, videoDir, videoFile, level - 1, firstIndex);
}

function AddPartTitle(title) {			//	adds to most recently added chapter
	this.children[this.lastChildIndex].partTitle = title;
}

function GetTocHtml(level, parentIndex, index) {
	var theHtml = "";
	if (this.partTitle != null)
		theHtml += '\n<p class="part">' + this.partTitle + '</p>\n';
	
	if (level == 0)
		theHtml += '<p class="about"><a class="whiteLink" id="about" href="javascript:showChapter(-1)">' + this.title + '</a></p>\n';
	else if (level == 1)
		theHtml += '\n<p class="ch"><a class="whiteLink" id="ch' + index + '" href="javascript:showChapter(' + index + ')">' + index + '. ' + this.title + '</a></p>\n';
	else if (level == 2)
		theHtml += '<li id="sec' + parentIndex + '.' + index + '"><a class="whiteLink" id="a_sec' + parentIndex + '.' + index + '" href="javascript:showSection(' + parentIndex + ',' + index + ')">' + this.title + '</a></li>\n';
	
	if (level < 2) {
		if (level == 1 && this.children.length > 0)
			theHtml += '<ol id="list' + index + '" style="display:none">\n';
		var x;
		for (x in this.children)
			theHtml += this.children[x].getTocHtml(level + 1, index, x);
		
		if (level == 1 && this.children.length > 0)
			theHtml += '</ol>\n';
	}
	return theHtml;
}

/*
function WriteToc(doc, level, parentIndex, index) {
	doc.write(this.getTocHtml(level, parentIndex, index));
}
*/

function ObjectFromIndices(ch, sec, page) {
	if (ch < 0)
		return this;
	else
		return this.children[ch].objectFromIndices(sec, page, -1);
}

function fileNameCore(file) {
	var core = file;		//	removes version information of the form '_x'
	var number = "";
	while (core.length > 1) {
		var c = core.charAt(core.length - 1);
		if (c < '0' || c > '9')
			break;
		number = c + number;
		core = core.substr(0, core.length - 1);
	}
	
	if (core.charAt(core.length - 2) == '_')
		core = core.substr(0, core.length - 2);
		
	return core + number;
}

function RefFromFile(fl) {	
	if (fileNameCore(fl) == fileNameCore(this.file))
		return new PageRef(-1, -1, -1);
	else {
		var x;
		for (x in this.children) {
			var ref = this.children[x].refFromFile(fl);
			if (ref !=  null)
				return new PageRef(x, ref.ch, ref.sec);
		}
		return null;
	}
}

function IsInEbook(dir, filePrefix) {
	if (dir == this.directory && filePrefix == this.file)
		return true;
	var x;
	for (x in this.children) {
		if (this.children[x].isInEbook(dir, filePrefix))
			return true;
	}
	return false;
}


function PageRef(ch, sec, page) {
	this.ch = ch;
	this.sec = sec;
	this.page = page;
}

function NextRef(ch, sec, page) {
	if (ch == -1) {
		if (this.firstChildIndex <= this.lastChildIndex)
			return new PageRef(this.firstChildIndex, -1, -1);
		else
			return null;
	}
	
	var nextObjectRef = this.children[ch].nextRef(sec, page, -1);
	
	if (nextObjectRef == null) {
		if (ch == this.lastChildIndex)
			return null;
		else
			return new PageRef(parseInt(ch) + 1, -1, -1);		//	should not need to convert explicitly
	}
	else
		return new PageRef(ch, nextObjectRef.ch, nextObjectRef.sec);
}

function FinalPage() {
	if (this.lastChildIndex >= this.firstChildIndex) {
		var lastSub = this.children[this.lastChildIndex].finalPage();
		return new PageRef(this.lastChildIndex, lastSub.ch, lastSub.sec);
	}
	else
		return new PageRef(-1, -1, -1);
}

function PreviousRef(ch, sec, page) {
	if (ch == -1)
		return null;
	
	var prevObjectRef = this.children[ch].previousRef(sec, page, -1);
	if (prevObjectRef != null)
		return new PageRef(ch, prevObjectRef.ch, prevObjectRef.sec);
	else {
		if (ch == this.firstChildIndex)
			return new PageRef(-1, -1, -1);
		else {
			var prevSub = this.children[ch - 1].finalPage();
			return new PageRef(parseInt(ch) - 1, prevSub.ch, prevSub.sec);		//	should not need to convert explicitly
		}
	}
}

function IsFirstPage(ch, sec, page) {
	return ch == -1;
}

function IsLastPage(ch, sec, page) {
	return (this.lastChildIndex < this.firstChildIndex)
					|| (ch == this.lastChildIndex && this.children[ch].isLastPage(sec, page, -1));
}

//-------------------------------------------------------------------


function addBook(directory, file, title, summaryFile, videoFile) {
	var sd = (typeof summaryFile == 'undefined' || summaryFile == null) ? null : directory;
	var sf = (typeof summaryFile == 'undefined') ? null : summaryFile;
	var vd = (typeof videoFile == 'undefined' || videoFile == null) ? null : directory;
	var vf = (typeof videoFile == 'undefined') ? null : videoFile;
	book = new BookObject(directory, file, title, false, sf, sd, vd, vf, 0);			//	first chapter number is 0
}


var pendingPart = null;

function addPart(title) {
	pendingPart = title;
}


/*
function addChapter(directory, file, title) {
	book.addObject(directory, file, title, false, null, null, null, null, 1, 1);
	if (pendingPart != null) {
		book.addPartTitle(pendingPart);
		pendingPart = null;
	}
}
*/


function addChapter(directory, file, title, summaryFile, videoFile) {
	var sd = (typeof summaryFile == 'undefined') ? null : directory;
	var sf = (typeof summaryFile == 'undefined') ? null : summaryFile;
	var vd = (typeof videoFile == 'undefined') ? null : directory;
	var vf = (typeof videoFile == 'undefined') ? null : videoFile;
	book.addObject(directory, file, title, false, sd, sf, vd, vf, 1, 1);
	if (pendingPart != null) {
		book.addPartTitle(pendingPart);
		pendingPart = null;
	}
}

function addSection(directory, file, title) {
	book.addObject(directory, file, title, false, null, null, null, null, 2, 1);
}

function addPage_2(directory, file, title, pageType, summaryDir, summaryFile, videoDir, videoFile) {
	if (typeof summaryDir == 'undefined' || typeof summaryFile == 'undefined') {
		summaryDir = null;
		summaryFile = null;
	}
	if (typeof videoDir == 'undefined' || typeof videoFile == 'undefined') {
		videoDir = null;
		videoFile = null;
	}
	
	var isInteractive = (pageType == 'interact');
	book.addObject(directory, file, title, isInteractive, summaryDir, summaryFile, videoDir, videoFile, 3, 0);
}

function addPage(directory, file, title, summaryDir, summaryFile, videoDir, videoFile) {
	addPage_2(directory, file, title, true, summaryDir, summaryFile, videoDir, videoFile);
}

function getTocHtml() {
	return book.getTocHtml(0, -1, -1);
}

/*
function writeToc(doc) {
	book.writeToc(doc, 0, -1, -1);
}
*/

function pageFromIndices(ch, sec, page) {
	return book.objectFromIndices(ch, sec, page);
}

function pageRefFromFile(file) {
	return book.refFromFile(file);
}


function nextPage(ch, sec, page) {
	return book.nextRef(ch, sec, page);
}

function previousPage(ch, sec, page) {
	return book.previousRef(ch, sec, page);
}