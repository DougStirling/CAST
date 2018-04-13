var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Describing centre</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_b1')\">1. Centre and spread</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The centre of a distribution is a 'typical value'. The spread describes how far the values are from the centre.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_b2')\">2. Median, range and IQR</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median is a summary of the centre of a distribution. The range and inter-quartile range both describe spread.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread_m3')\">3. Summaries of centre</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>The median and mean are alternative measures of the centre of a distribution.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('centerSpread4')\">4. Properties of median and mean</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>When a data set is not symmetric, the mean and median may differ substantially.</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
