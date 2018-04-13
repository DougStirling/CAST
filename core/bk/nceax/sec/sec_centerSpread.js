var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre and spread</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread1')\">1. Ideas of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example in which the differences between the centre and spread of two groups can be interpreted meaningfully. (The centre and spread of the second group can be changed with sliders.)</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread2')\">2. Simple measures of centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram similar to the previous one but showing that differences between the centres and spreads of the groups can be summarised by the median and either the range or inter-quartile range.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread3')\">3. Sample mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing that median splits data set in half and mean is point of balance.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_centerSpread4')\">4. Properties of median and mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing how mean is affected by an outlier and how it is further into the tail of a skew distribution.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
