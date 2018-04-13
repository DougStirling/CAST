var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>More about histograms</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density5')\">1. Relative frequency and area</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing that area = relative frequency.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density7')\">2. Histograms with varying class widths</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing that the area for each value and the total area should stay the same when classes are combined.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_density8')\">3. Mixed class widths (cont)</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram showing when mixed class widths might be desirable. It also shows that the proportion of the histogram area above any classes equals the proportion of values, even when there are varying classed widths.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
