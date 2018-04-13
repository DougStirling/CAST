var sectionInnerHtml = "<img class='sectionStar' src='structure/images/star.svg' width='33' height='33'>\n";
sectionInnerHtml += "<img class='sectionUnderscore' src='structure/images/sectionUnderscore.png' width='443' height='4'>\n";
sectionInnerHtml += "<p class='sectionHeading'>Frequency tables</p>\n\n";

sectionInnerHtml += "<dl>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_freqTable1')\">1. Frequency tables</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagrams showing how frequency table is built up from raw categorical data.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_freqTable2')\">2. Proportions and percentages</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Example of frequency table with optional proportions and percentages.</dd>\n";

sectionInnerHtml += "  <dt class='contents'><a href=\"javascript:showNamedPage('l_freqTable3')\">3. Changes to the categories</a></dt>\n";
  sectionInnerHtml += "  <dd class='full_text'>Diagram allows categories to be reordered, grouped and hidden (to display conditional distribution of a subset of categories).</dd>\n";

sectionInnerHtml += "</dl>\n";
var endString = getSectionEndString();
sectionInnerHtml += endString;

var sectionDiv = document.getElementById("section");
sectionDiv.innerHTML = sectionInnerHtml;
sectionDiv.style.display = "block";

var pageIframe = document.getElementById("content");
pageIframe.style.display = "none";
