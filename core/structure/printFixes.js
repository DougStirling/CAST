function writeAppletParams() {
}


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

var searchString = window.location.search;
var url = lookup(searchString, "url");



function showPrintDialog(showNotHide) {
	if (top.url == null) {
		var window = document.getElementById('dialogWindow');
		window.style.height = '300px';
	}
	var el = document.getElementById("overlay");
	el.style.visibility = showNotHide ? "visible" : "hidden";
	var body = document.getElementById("body");
	body.style.overflow = showNotHide ? "hidden" : "auto";
}

/*
function initialise() {
	var images = document.getElementsByTagName("img");
	for (var i=0; i<images.length; i++) {
		var oneImage = images[i];
		if (oneImage.className == "summaryPict" || oneImage.className == "borderedPict") {
			oneImage.height = oneImage.height * 3 / 4;
			oneImage.width = oneImage.width * 3 / 4;
		}
	}
	
	showPrintDialog(true);
}
*/

function doPrint() {
	showPrintDialog(false);
	window.print();
}

function showPdf() {
	window.location.href = url;
}

//------------------------------------------------------------
//		setup and display of alternative data images

var hasSvg = !!(window.SVGSVGElement);
var gifRedirect = "";			//	can be "../HciMean/" within DciMean, etc so that gifs from English version are used when SVGs are not supported

function showCorrectImage(imageId) {
/*
	if (hasSvg) {
		var gif = document.getElementById('gif_' + imageId);
		gif.style.display = "none";
		var svg = document.getElementById('svg_' + imageId);
		svg.style.display = "inline";
	}
*/
}

//------------------------------------------------------------

function outputExercise() {};

var shrinkImage = function(index, element) {
	var $graph = $(element);
	var width = $graph.width();
	var height = $graph.height();
	$graph.width(width * 0.75);
	$graph.height(height * 0.75);
	
	if ($graph.attr("class") == "gif") {		//	change gif to svg
		var src = $graph.attr("src");
		var core = src.substring(0, src.length - 4);	//	to remove ".gif"
		$graph.attr("src", core + ".svg");
	}
}

$(function() {							//	Assumes that jquery has already been included
	var $images = $('img');
	$images.each(shrinkImage);
});