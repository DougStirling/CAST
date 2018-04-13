function bookEntry(shortName, longName, description) {
	this.shortName = shortName;
	this.longName = longName;
	this.description = description;
}

var bookGroups = new Object();		//	associative array of groupName -> bookEntry[]

function addBook(shortName, groupName, longName, description) {
	var bookList;
	if (groupName in bookGroups)
		bookList = bookGroups[groupName];
	else {
		bookList = new Array();
		bookGroups[groupName] = bookList;
	}
	bookList[bookList.length] = new bookEntry(shortName, longName, description);
}

function writeBookGroup(groupName, canExpand, helpMessage) {
	document.write("<p class='heading'>");
	if (canExpand)
		document.write("<a href='javascript:expandHeading(\"" + groupName + "\")' class='expandLink' onMouseover='hiliteArrow(\"" + groupName + "\", true)' onMouseout='hiliteArrow(\"" + groupName + "\", false)'>");
		
	document.write(groupName);
	if (canExpand)
		document.write(" <img src='../init/images/closedArrowGreen.gif' id='" + groupName + "Arrow' align='absbottom' style='border-width:0px;'></a>");
	
	document.write("</p>\n\n");
	
	document.write("<div id='" + groupName + "' class='collection' style='display:" + (canExpand ? "none" : "block") + "'>\n");
	document.write("  <div class='collectionList'>\n");
	document.write("		<dl>\n");
	
	var bookList = bookGroups[groupName];
	for (var i=0 ; i<bookList.length ; i++) {
		var bookEntry = bookList[i];
		document.write("		<dt><a href='javascript:startEbook(\""+ bookEntry.shortName + "\")' class='startEbook'>" + bookEntry.longName + "</a></dt>\n");
		document.write("		<dd>" + bookEntry.description + "</dd>\n");
	}
	
	document.write("		</dl>\n");
	document.write("    <p class='clickInfo'>" + helpMessage + "</p>\n");
	document.write("	</div>\n");
	document.write("</div>\n\n");
}

function writeAllBooks(helpMessage) {
	var noOfGroups = 0;
	for (groupName in bookGroups)
		noOfGroups ++;
	var canExpand = noOfGroups > 1;
	
	for (groupName in bookGroups)
		writeBookGroup(groupName, canExpand, helpMessage)
}

function hasCustomBooks() {
	return Object.keys(bookGroups).length > 0;
}