var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Paired data</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired1')\">1. Paired data</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Paired data are a type of bivariate data in which two similar measurements are made from each individual. We are usually interested in testing whether the means of both measurements are the same.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('testPaired2')\">2. Analysis of differences</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>For paired data, differences between the two measurements hold all information about whether the means of both variables are the same.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
