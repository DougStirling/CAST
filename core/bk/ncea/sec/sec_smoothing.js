var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Smoothing</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing1')\">1. Moving averages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Moving averages are a simple way to smooth out irregularities in a time series.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('smoothing2')\">2. More about moving averages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When an even number of values is used for the moving averages, the smoothed values are at times half-way between those of the raw data. The method can be modified to give smoothed values at the times of the original values.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
